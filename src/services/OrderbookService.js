// import axios from 'axios';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { CCC } from './../ccc-streaming-utils';

const client = new W3CWebSocket('wss://streamer.cryptocompare.com/v2?api_key=66cdac0fc6a565b41a9ecd3549784e14fdc851c2f2bc88f7f1f18019b170cd44');

export class OrderbookService {

    snapshot = {0:{},1:{}};
    lastUpdated = [];
    depth = 20000;

    processData(list, type, desc) {
        // console.log(list);
        // Convert to data points
        let res = {};
        for(var i = 0; i < list.length; i++) {
            list[i] = {
                value: Number(list[i]['P']),
                volume: Number(list[i][['Q']]),
            }
        }

        // Sort list just in case
        list.sort(function(a, b) {
            if (a.value > b.value) {
                return 1;
            }
            else if (a.value < b.value) {
                return -1;
            }
            else {
                return 0;
            }
        });

        // Calculate cummulative volume
        if (desc) {
            for(var i = list.length - 1; i >= 0; i--) {
                if (i < (list.length - 1)) {
                    list[i].totalvolume = list[i+1].totalvolume + list[i].volume;
                }
                else {
                    list[i].totalvolume = list[i].volume;
                }
                let dp = {};
                dp["value"] = list[i].value;
                dp[type + "volume"] = list[i].volume;
                dp[type + "totalvolume"] = list[i].totalvolume;
                res[list[i].value*100] = dp;
            }
            var ordered = {};
            Object.keys(res).sort(function (a, b) {
                return a-b;
            }).forEach(function(key) {
                ordered[key] = res[key];
            });
        }
        else {
            for(var i = 0; i < list.length; i++) {
                if (i > 0) {
                    list[i].totalvolume = list[i-1].totalvolume + list[i].volume;
                }
                else {
                    list[i].totalvolume = list[i].volume;
                }
                let dp = {};
                dp["value"] = list[i].value;
                dp[type + "volume"] = list[i].volume;
                dp[type + "totalvolume"] = list[i].totalvolume;
                res[list[i].value*100] = dp
            }
            var ordered = {};
            Object.keys(res).sort(function (a, b) {
                return b-a;
            }).forEach(function(key) {
                ordered[key] = res[key];
            });
        }
        return ordered;
    }

    populateSnapshot(snapshot, callback) {

        snapshot.BID.map((item, key) => {
            this.snapshot[0][item.P*100] = {
                Q: item.Q,
                P: String(item.P)
            };
        });
        snapshot.ASK.map((item, key) => {
            this.snapshot[1][item.P*100] = {
                Q: item.Q,
                P: String(item.P)
            };
        });

        var bidKeys = Object.keys(this.snapshot[0]).sort().slice(-this.depth);
        var topBids = [];
        for(var bidKey of bidKeys){
            topBids.push(this.snapshot[0][bidKey]);
        }
        var askKeys = Object.keys(this.snapshot[1]).slice(0,this.depth);
        var topAsks = [];
        for(var askKey of askKeys){
            topAsks.push(this.snapshot[1][askKey]);
        }
        let bids = this.processData(topBids, 'bids', true);
        let asks = this.processData(topAsks, 'asks',  false);

        callback({orders: {0: bids, 1: asks}, lastUpdated: this.lastUpdated});
    }

    getLastUpdated(){
        return this.lastUpdated;
    }

    resetLastUpdated(){
        this.lastUpdated = [];
    }

    getSnapshot(){
        var bidKeys = Object.keys(this.snapshot[0]).sort().slice(-this.depth);
        var topBids = [];
        for(var bidKey of bidKeys){
            topBids.push(this.snapshot[0][bidKey]);
        }
        var askKeys = Object.keys(this.snapshot[1]).slice(0,this.depth);
        var topAsks = [];
        for(var askKey of askKeys){
            topAsks.push(this.snapshot[1][askKey]);
        }
        let bids = this.processData(topBids, 'bids', true);
        let asks = this.processData(topAsks, 'asks',  false);
        return {0: bids, 1: asks};
    }

    updateSnapshot(update, callback){
        if(update.ACTION == 1){
            this.snapshot[update.SIDE][update.P*100] = {'P': update.P, 'Q': update.Q};
        }
        if(this.snapshot[update.SIDE][update.P*100] == undefined){
            console.error("No price ", update.P, " found on side ", update.SIDE, ' to perform action ', update.ACTION);
            return;
        }
        if(update.ACTION == 2){
           // this.snapshot[update.SIDE][update.P]['Q'] = 0;
           delete this.snapshot[update.SIDE][update.P*100];
        }
        if(update.ACTION == 4){
            this.snapshot[update.SIDE][update.P*100]['Q'] = update.Q;
            this.lastUpdated.push(update.P);
        }
        // callback({orders: {0: bids, 1: asks}, lastUpdated: this.lastUpdated});
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
            action: 'SubAdd',
            subs: ["8~Binance~BTC~USDT"],
            api_key: '66cdac0fc6a565b41a9ecd3549784e14fdc851c2f2bc88f7f1f18019b170cd44',
        }));
    }

    unsubscribe(currency) {
        console.log('Unsubscribing');
        client.close();
    }
}