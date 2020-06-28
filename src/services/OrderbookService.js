import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('wss://streamer.cryptocompare.com/v2?api_key=66cdac0fc6a565b41a9ecd3549784e14fdc851c2f2bc88f7f1f18019b170cd44');

export class OrderbookService {

    snapshot = {0:{},1:{}};
    lastUpdated = [];
    depth = 2000000;
    side = 'to';

    processData(list, type, desc) {
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
        let stats = this.getStats(bids, asks);
        callback({orders: {0: bids, 1: asks}, lastUpdated: this.lastUpdated, stats: stats});
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
        let stats = this.getStats(bids, asks);
        return {bids: bids, asks: asks, stats: stats};
    }

    updateSnapshot(update, callback){
        if(update.ACTION == 1){
            this.snapshot[update.SIDE][update.P*100] = {'P': update.P, 'Q': update.Q};
            this.lastUpdated.push(update.P);
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
    }

    getMidPoint(bids, asks){
        var lastBid = bids[0]/100;
        var firstAsk = asks[0]/100;
        return (parseFloat(lastBid) + ((firstAsk - lastBid )/ 2));
    }

    getDepth(bids, asks, percentage){
        var midpoint = this.getMidPoint(bids, asks);
        var lowerLimit = midpoint - (midpoint*(percentage/100));
        var upperLimit = midpoint + (midpoint*(percentage/100));

        var bidDepthVolFrom = 0;
        var bidDepthVolTo = 0;
        for(var bid of bids){
            if(bid/100 > lowerLimit){
                bidDepthVolFrom += this.bidsMap[bid].bidsvolume;
                bidDepthVolTo += this.bidsMap[bid].bidsvolume*this.bidsMap[bid].value;
            }
        }
        var askDepthVolFrom = 0;
        var askDepthVolTo = 0;
        for(var ask of asks){
            if(ask/100 < upperLimit){
                askDepthVolFrom += this.asksMap[ask].asksvolume;
                askDepthVolTo += this.asksMap[ask].asksvolume*this.asksMap[ask].value;
            }
        }
        return {
            sell :{
                to: bidDepthVolTo,
                from: bidDepthVolFrom
            },
            buy :{
                to: askDepthVolTo,
                from: askDepthVolFrom
            }
        }
    }

    getPriceImpact(bids, asks){
        var impact = {buy: 0, sell:0, average:{buy: 0, sell:0}};
        var priceImpactVolume = 10;
        if(!priceImpactVolume){
            return impact;
        }
        var midpoint = this.getMidPoint(bids, asks);
        var bidAverage =0, bidTotalVol = 0;
        var askAverage =0, askTotalVol = 0;
        var side = this.side;
        console.log("get price impact side", this.side);
        for(var bid of bids){
            impact.sell = this.bidsMap[bid].value - midpoint;
            if(this.bidsMap[bid].bidstotalvolume[side] > priceImpactVolume) {
                bidAverage += ((priceImpactVolume - bidTotalVol) * this.bidsMap[bid].value)
                bidTotalVol = this.bidsMap[bid].bidstotalvolume[side];
                break;
            }
            bidTotalVol = this.bidsMap[bid].bidstotalvolume[side];
            bidAverage += (this.bidsMap[bid].bidsvolume * this.bidsMap[bid].value);
        }
        for(var ask of asks){
            impact.buy = this.asksMap[ask].value - midpoint;
            if(this.asksMap[ask].askstotalvolume[side] > priceImpactVolume) {
                askTotalVol = this.asksMap[ask].askstotalvolume[side];
                askAverage += ((priceImpactVolume - askTotalVol) * this.asksMap[ask].value)
                break;
            }
            askTotalVol = this.asksMap[ask].askstotalvolume[side];
            askAverage += (this.asksMap[ask].asksvolume * this.asksMap[ask].value);
        }
        impact.average = {
            sell: bidAverage / Math.min(bidTotalVol, priceImpactVolume),
            buy: askAverage / Math.min(askTotalVol, priceImpactVolume)
        };
        return impact;
    }

    getStats(bidsMap, asksMap){
        var stats = {};
        this.bidsMap = bidsMap;
        this.asksMap = asksMap;
        var bids = Object.keys(this.snapshot[0]);
        var asks = Object.keys(this.snapshot[1]);
        bids.sort(function (a, b) {
            return b - a;
        });
        asks.sort(function (a, b) {
            return a - b;
        });
        stats.midpoint = this.getMidPoint(bids, asks);
        stats.depth = this.getDepth(bids, asks, 10);
        stats.impact = this.getPriceImpact(bids, asks, 0.5);
        // stats.bidsVolumeTo = this.bidsMap[bids[bids.length-1]].bidstotalvolume;
        // stats.bidsVolumeFrom = this.bidsMap[bids[bids.length-1]].bidstotalvolumefrom;
        // stats.asksVolumeTo = this.asksMap[asks[asks.length-1]].asksstotalvolume;
        // stats.asksVolumeFrom = this.asksMap[asks[asks.length-1]].asksstotalvolumefrom;
        return stats;
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