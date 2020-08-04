import React, { Component } from "react";
import { Utils } from '../../services/Utils';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

const utils = new Utils();

class Stats extends Component {
    constructor(props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);
        this.toggleDirection = this.toggleDirection.bind(this);
        this.state = {
            updated: false,
            priceImpactVolume: 10,
            toggle: 'sell',
            direction: 'to'
        };
        this.stats = {
            spread: {
                midpoint: 0,
                high: 0,
                low: 0
            },
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
    toggleDirection(e) {
        this.setState({
            direction: e.target.value
        });
    }

    getSpread(bids, asks){
        let lastBid = bids[0]/100;
        let firstAsk = asks[0]/100;
        let midpoint = parseFloat(lastBid) + ((firstAsk - lastBid )/ 2);
        return {
            high: lastBid,
            low: firstAsk,
            midpoint: midpoint
        }
    }

    getDepth(bids, asks, percentage){
        let midpoint = this.getSpread(bids, asks).midpoint;
        let lowerLimit = midpoint - (midpoint*(percentage/100));
        let upperLimit = midpoint + (midpoint*(percentage/100));

        let bidDepthVolFrom = 0;
        let bidDepthVolTo = 0;
        for(let bid of bids){
            if(bid/100 > lowerLimit){
                bidDepthVolFrom += this.bidsMap[bid].bidsvolume;
                bidDepthVolTo += this.bidsMap[bid].bidsvolume*this.bidsMap[bid].value;
            }
        }
        let askDepthVolFrom = 0;
        let askDepthVolTo = 0;
        for(let ask of asks){
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
        let impact = {buy: 0, sell:0, average:{buy: 0, sell:0}};
        if(!this.state.priceImpactVolume){
            return impact;
        }
        let midpoint = this.getSpread(bids, asks).midpoint;
        let bidAverage =0, bidTotalVol = 0;
        let askAverage =0, askTotalVol = 0;
        let side = this.state.direction;
        for(let bid of bids){
            impact.sell = this.bidsMap[bid].value - midpoint;
            if(this.bidsMap[bid].bidstotalvolume[side] > this.state.priceImpactVolume) {
                bidAverage += (this.state.priceImpactVolume - bidTotalVol) * this.bidsMap[bid].value;
                bidTotalVol = this.bidsMap[bid].bidstotalvolume[side];
                break;
            }
            bidTotalVol = this.bidsMap[bid].bidstotalvolume.to;
            bidAverage += (this.bidsMap[bid].bidsvolume * this.bidsMap[bid].value);
        }
        for(let ask of asks){
            impact.buy = this.asksMap[ask].value - midpoint;
            if(this.asksMap[ask].askstotalvolume[side] > this.state.priceImpactVolume) {
                askAverage += ((this.state.priceImpactVolume - askTotalVol) * this.asksMap[ask].value)
                askTotalVol = this.asksMap[ask].askstotalvolume[side];
                break;
            }
            askTotalVol = this.asksMap[ask].askstotalvolume[side];
            askAverage += (this.asksMap[ask].asksvolume * this.asksMap[ask].value);
        }
        impact.average = {
            sell: bidAverage / Math.min(bidTotalVol, this.state.priceImpactVolume),
            buy: askAverage / Math.min(askTotalVol, this.state.priceImpactVolume)
        };
        return impact;
    }

    getStats(){
        let stats = {};
        this.bidsMap = this.props.orders[0];
        this.asksMap = this.props.orders[1];
        let bids = Object.keys(this.props.orders[0]);
        let asks = Object.keys(this.props.orders[1]);
        bids.sort(function (a, b) {
            return b - a;
        });
        asks.sort(function (a, b) {
            return a - b;
        });
        stats.spread = this.getSpread(bids, asks);
        stats.depth = this.getDepth(bids, asks, 10);
        stats.impact = this.getPriceImpact(bids, asks, 0.5);
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
                                    checked={this.state.toggle==='buy'}
                                />
                                <label htmlFor="switch_left">Buy</label>
                                <input
                                    type="radio"
                                    id="switch_right"
                                    name="switchToggle"
                                    value="sell"
                                    onChange={this.toggleState}
                                    checked={this.state.toggle==='sell'}
                                />
                                <label htmlFor="switch_right">Sell</label>
                            </form>
                        </div>
                        <div className="col-md">
                            <form className="switch-field direction">
                                <input
                                    type="radio"
                                    id="switch_direction_to"
                                    name="switchToggle"
                                    value="from"
                                    onChange={this.toggleDirection}
                                    checked={this.state.direction==='from'}
                                />
                                <label htmlFor="switch_direction_to"><i className="fa fa-exchange"></i>BTC</label>
                                <input
                                    type="radio"
                                    id="switch_direction_from"
                                    name="switchToggle"
                                    value="to"
                                    onChange={this.toggleDirection}
                                    checked={this.state.direction==='to'}
                                />
                                <label htmlFor="switch_direction_from"><i className="fa fa-exchange"></i>USDT</label>
                            </form>
                            <input className="form-control price-impact" type="text" value={this.state.priceImpactVolume} onChange={this.handleChange}/>
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
                                    {this.props.fSym} {utils.formatNumber(this.stats.depth[this.state.toggle].from, 2, true)}
                                    ( {this.props.tSym} {utils.formatNumber(this.stats.depth[this.state.toggle].to, 2, true)} )
                                </div>
                            </div>
                        </div>
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Price Impact
                                </div>
                                <div className={`stat-data ${this.stats.impact[this.state.toggle] >= 0 ? 'up-text' : 'down-text'}`}>
                                    {this.props.tSym} {utils.formatNumber(this.stats.impact[this.state.toggle], 3, true)}
                                </div>
                            </div>
                        </div>
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Price Impact %
                                </div>
                                <div className={`stat-data ${this.stats.impact[this.state.toggle] >= 0 ? 'up-text' : 'down-text'}`}>
                                    { utils.formatNumber((this.stats.impact[this.state.toggle] / this.stats.spread.midpoint) * 100, 3, true) || 0 }%
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Average Price
                                </div>
                                <div className="stat-data">
                                    {this.props.tSym} {utils.formatNumber(this.stats.impact.average[this.state.toggle], 2, true)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={"col-md"}>
                        </div>
                        <div className="col-md">
                            Highest bid: <span className={"up-text"}>{utils.formatNumber(this.stats.spread.high, 2, true)}</span>
                        </div>
                        <div className="col-md">
                            <div>
                                Midpoint: {utils.formatNumber(this.stats.spread.midpoint, 3, true)}
                            </div>
                            <div>
                                Spread: {utils.formatNumber(this.stats.spread.low - this.stats.spread.high, 3, true)}
                            </div>
                        </div>
                        <div className="col-md">
                            Lowest ask: <span className={"down-text"}>{utils.formatNumber(this.stats.spread.low, 2, true)}</span>
                        </div>
                        <div className={"col-md"}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Stats.propTypes = {
    orders: PropTypes.object.isRequired,
    fSym: PropTypes.string.isRequired,
    tSym: PropTypes.string.isRequired,
};

export { Stats };