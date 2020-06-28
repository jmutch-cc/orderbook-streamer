import React, { Component } from "react";
import {Chart} from './Chart';
import { Utils } from '../../services/Utils';
const utils = new Utils();

class ChartContainer extends Component {
    constructor(props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            updated: false,
            priceImpactVolume: 10,
            toggle: 'sell'
        };
        this.stats = {
            midpoint: 0,
            depth: {
                bids: {},
                asks: {}
            },
            impact: {
                buy: 0,
                sell: 0,
                averageBuyPrice: 0,
                averageSellPrice: 0
            },
        }
    }

    toggleState(e) {
        this.setState({
            toggle: e.target.value
        });
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
        if(!this.state.priceImpactVolume){
            return impact;
        }
        var midpoint = this.getMidPoint(bids, asks);
        var bidAverage =0, bidTotalVol = 0;
        var askAverage =0, askTotalVol = 0;

        for(var bid of bids){
            if(this.bidsMap[bid].bidstotalvolume > this.state.priceImpactVolume) {
                impact.sell = this.bidsMap[bid].value - midpoint;
                bidAverage += ((this.state.priceImpactVolume - bidTotalVol) * this.bidsMap[bid].value)
                bidTotalVol = this.bidsMap[bid].bidstotalvolume;
                break;
            }
            bidTotalVol = this.bidsMap[bid].bidstotalvolume;
            bidAverage += (this.bidsMap[bid].bidsvolume * this.bidsMap[bid].value);
        }

        for(var ask of asks){
            if(this.asksMap[ask].askstotalvolume > this.state.priceImpactVolume) {
                impact.buy =  this.asksMap[ask].value - midpoint;
                askAverage += ((this.state.priceImpactVolume - askTotalVol) * this.asksMap[ask].value)
                askTotalVol = this.asksMap[ask].askstotalvolume;
                break;
            }
            askTotalVol = this.asksMap[ask].askstotalvolume;
            askAverage += (this.asksMap[ask].asksvolume * this.asksMap[ask].value);
        }

        impact.average = {
            sell: bidAverage / Math.min(bidTotalVol, this.state.priceImpactVolume),
            buy: impact.averageBuyPrice = askAverage / Math.min(askTotalVol, this.state.priceImpactVolume)
        };
        return impact;
    }

    getStats(){
        var stats = {};
        this.bidsMap = this.props.orders[0];
        this.asksMap = this.props.orders[1];
        var bids = Object.keys(this.props.orders[0]);
        var asks = Object.keys(this.props.orders[1]);
        bids.sort(function (a, b) {
            return b - a;
        });
        asks.sort(function (a, b) {
            return a - b;
        });
        stats.midpoint = this.getMidPoint(bids, asks);
        stats.depth = this.getDepth(bids, asks, 10);
        stats.impact = this.getPriceImpact(bids, asks, 0.5);
        stats.bidsVolumeTo = this.bidsMap[bids[bids.length-1]].bidstotalvolume;
        stats.bidsVolumeFrom = this.bidsMap[bids[bids.length-1]].bidstotalvolumefrom;
        stats.asksVolumeTo = this.asksMap[asks[asks.length-1]].asksstotalvolume;
        stats.asksVolumeFrom = this.asksMap[asks[asks.length-1]].asksstotalvolumefrom;
        this.stats = stats;
    }

    handleChange = (e) =>{
        this.setState({priceImpactVolume: e.target.value});
    }

    render() {
        if(!this.props.orders || !Object.keys(this.props.orders[0]).length || !Object.keys(this.props.orders[0]).length){
            return <div />;
        }
        this.getStats();
        return (
            <div className="container">
                <div className="panel-body">
                    {/*<Chart bids={this.props.orders[0] ? Object.values(this.props.orders[0]): []} asks={this.props.orders[1] ? Object.values(this.props.orders[1]): []} />*/}
                    <div className="row">
                        <div className="col-md">
                            <form className="switch-field">
                                <input
                                    type="radio"
                                    id="switch_left"
                                    name="switchToggle"
                                    value="buy"
                                    onChange={this.toggleState}
                                    checked={this.state.toggle=='buy'}
                                />
                                <label htmlFor="switch_left">Buy</label>
                                <input
                                    type="radio"
                                    id="switch_right"
                                    name="switchToggle"
                                    value="sell"
                                    onChange={this.toggleState}
                                    checked={this.state.toggle=='sell'}
                                />
                                <label htmlFor="switch_right">Sell</label>
                            </form>
                        </div>
                        <div className="col-md">
                            <input className="form-control" type="text" value={this.state.priceImpactVolume} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    10% Bid Depth
                                </div>
                                <div className="stat-data">
                                    {utils.formatNumber(this.stats.depth[this.state.toggle].from, 2, true)}
                                    ( {utils.formatNumber(this.stats.depth[this.state.toggle].to, 2, true)} )
                                </div>
                            </div>
                        </div>
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Price Impact
                                </div>
                                <div className={`stat-data ${this.stats.impact[this.state.toggle] >= 0 ? 'up-text' : 'down-text'}`}>
                                    {utils.formatNumber(this.stats.impact[this.state.toggle], 2, true)}
                                </div>
                            </div>
                        </div>
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Price Impact %
                                </div>
                                <div className={`stat-data ${this.stats.impact[this.state.toggle] >= 0 ? 'up-text' : 'down-text'}`}>
                                    { utils.formatNumber((this.stats.impact[this.state.toggle] / this.stats.midpoint) * 100, 2, true) || 0 }%
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Average Price
                                </div>
                                <div className="stat-data">
                                    {utils.formatNumber(this.stats.impact.average[this.state.toggle], 2, true)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ChartContainer.propTypes = {
};

export { ChartContainer };