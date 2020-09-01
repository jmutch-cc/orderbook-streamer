import { w3cwebsocket as W3CWebSocket } from "websocket";
const clientUrl = 'wss://streamer.cryptocompare.com/v2';
// let client = new W3CWebSocket(clientUrl);

export class OrderbookService {

    snapshot = {0:{},1:{}};
    lastUpdated = [];
    depth = 2000000;
    clientUrl = clientUrl;
    client;

    processData(list, type, desc) {
        // Convert to data points
        let res = {};
        let ordered = {};
        for(let i = 0; i < list.length; i++) {
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
            for(let i = list.length - 1; i >= 0; i--) {
                if (i < (list.length - 1)) {
                    list[i].totalvolume = {
                        to: list[i+1].totalvolume.to + list[i].volume,
                        from: list[i+1].totalvolume.from + (list[i].volume * list[i].value)
                    };
                }
                else {
                    list[i].totalvolume = {
                        to: list[i].volume,
                        from: list[i].volume * list[i].value
                    };
                }
                let dp = {};
                dp["value"] = list[i].value;
                dp[type + "volume"] = list[i].volume;
                dp[type + "totalvolume"] = list[i].totalvolume;
                res[list[i].value*100] = dp;
            }
            ordered = {};
            Object.keys(res).sort(function (a, b) {
                return a-b;
            }).forEach(function(key) {
                ordered[key] = res[key];
            });
        }
        else {
            for(let i = 0; i < list.length; i++) {
                if (i > 0) {
                    list[i].totalvolume = {
                        to: list[i-1].totalvolume.to + list[i].volume,
                        from: list[i-1].totalvolume.from + (list[i].volume * list[i].value)
                    };
                }
                else {
                    list[i].totalvolume = {
                        to: list[i].volume,
                        from: list[i].volume * list[i].value
                    };
                }
                let dp = {};
                dp["value"] = list[i].value;
                dp[type + "volume"] = list[i].volume;
                dp[type + "totalvolume"] = list[i].totalvolume;
                res[list[i].value*100] = dp
            }
            ordered = {};
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
        callback({orders: this.getSnapshot(), lastUpdated: this.lastUpdated});
    }

    getLastUpdated(){
        return this.lastUpdated;
    }
    resetLastUpdated(){
        this.lastUpdated = [];
    }
    resetSnapshot() {
        this.snapshot = {0: {}, 1: {}};
    }
    getSnapshot(){
        let bidKeys = Object.keys(this.snapshot[0]).sort().slice(-this.depth);
        let topBids = [];
        for(let bidKey of bidKeys){
            topBids.push(this.snapshot[0][bidKey]);
        }
        let askKeys = Object.keys(this.snapshot[1]).slice(0,this.depth);
        let topAsks = [];
        for(let askKey of askKeys){
            topAsks.push(this.snapshot[1][askKey]);
        }
        let bids = this.processData(topBids, 'bids', true);
        let asks = this.processData(topAsks, 'asks',  false);
        return {0: bids, 1: asks};
    }

    updateSnapshot(update, callback){
        if(update.ACTION === 1){
            this.snapshot[update.SIDE][update.P*100] = {'P': update.P, 'Q': update.Q};
            this.lastUpdated.push(update.P);
        }
        if(this.snapshot[update.SIDE][update.P*100] === undefined){
            console.error("No price ", update.P, " found on side ", update.SIDE, ' to perform action ', update.ACTION);
            return;
        }
        if(update.ACTION === 2){
           delete this.snapshot[update.SIDE][update.P*100];
        }
        if(update.ACTION === 4){
            this.snapshot[update.SIDE][update.P*100]['Q'] = update.Q;
            this.lastUpdated.push(update.P);
        }
    }

    subscribe(exchange, fSym, tSym, url, apiKey, callback) {
        console.log('Subscribing',exchange, tSym, fSym, this.client);
        this.client = new W3CWebSocket(url + '?api_key=' + apiKey);
        this.client.onopen = () => {
            this.client.send(JSON.stringify({
                action: 'SubAdd',
                subs: ['8~'+exchange+'~'+fSym+'~'+tSym],
            }));
        };
        this.client.onmessage = (message) => {
            if(message.data){
                let msg = JSON.parse(message.data);
                if(msg.TYPE === '9'){
                    this.populateSnapshot(msg, callback);
                }
                if(msg.TYPE === '8'){
                    this.updateSnapshot(msg);
                }
            }
        };
    }

    unsubscribe(currency) {
        this.resetLastUpdated();
        this.resetSnapshot();
        if(this.client != null){
            this.client.close();
            this.client = null;
        }
    }
}