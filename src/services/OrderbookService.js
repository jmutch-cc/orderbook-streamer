// import axios from 'axios';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { CCC } from './../ccc-streaming-utils';

const client = new W3CWebSocket('wss://streamer.cryptocompare.com/v2?api_key=ad1eed321df97e8250ad2f2288e2b3838c61b971a7dc857a8d7ad119a3286c6d');

export class OrderbookService {

    snapshot = {0:{},1:{}};
    callback = function(){
        console.log("Original callback hit");
    };

    populateSnapshot(snapshot, callback) {

        snapshot.BID.map((item, key) => {
            this.snapshot[0][item.P] = {
                Q: item.Q,
                P: String(item.P)
            };
        });
        snapshot.ASK.map((item, key) => {
            this.snapshot[1][item.P] = {
                Q: item.Q,
                P: String(item.P)
            };
        });
        callback({orders: this.snapshot, lastUpdated: null});
    }

    getSnapshot(){
        return this.snapshot;
    }

    updateSnapshot(update, callback){
        if(update.ACTION == 1){
            this.snapshot[update.SIDE][update.P] = {'P': update.P, 'Q': update.Q};
        }
        if(this.snapshot[update.SIDE][update.P] == undefined){
            console.error("No price ", update.P, " found on side ", update.SIDE, ' to perform action ', update.ACTION);
            return;
        }
        if(update.ACTION == 2){
            this.snapshot[update.SIDE][update.P]['Q'] = 0;
        }
        if(update.ACTION == 4){
            this.snapshot[update.SIDE][update.P]['Q'] = update.Q;
        }
        callback({lastUpdated: update.P, orders: this.snapshot});
    }

    subscribe(callback) {
        console.log('Subscribing');
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {

            if(message.data){
                let msg = JSON.parse(message.data);
                // console.log(msg);
                if(msg.TYPE == 9){
                    this.populateSnapshot(msg, callback);
                }
                if(msg.TYPE == 8){
                    this.updateSnapshot(msg, callback);
                }
            }
        };
        client.send(JSON.stringify({
            api_key: 'ad1eed321df97e8250ad2f2288e2b3838c61b971a7dc857a8d7ad119a3286c6d',
            action: 'SubAdd',
            subs: ["8~Binance~ETH~BTC"]
        }));
    }

    unsubscribe(currency) {
        console.log('Unsubscribing');
        client.close();
    }
}