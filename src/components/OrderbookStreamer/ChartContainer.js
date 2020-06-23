import React, { Component } from "react";
import { OrderbookService } from '../../services/OrderbookService';
import PropTypes from 'prop-types';

const orderbookService = new OrderbookService();

class ChartContainer extends Component {

    getMidPoint(bids, asks){
        var lastBid = bids[0]/100;
        var firstAsk = asks[0]/100;
        return (parseFloat(lastBid) + ((firstAsk - lastBid )/ 2));
    }

    getDepth(bids, asks, percentage){
        this.stats.midpoint = this.getMidPoint(bids, asks);
        var lowerLimit = this.stats.midpoint - (this.stats.midpoint*(percentage/100));
        var upperLimit = this.stats.midpoint + (this.stats.midpoint*(percentage/100));

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
        this.stats.depth = {
            bids :{
                to: bidDepthVolTo,
                from: bidDepthVolFrom
            },
            asks :{
                to: askDepthVolTo,
                from: askDepthVolFrom
            }
        }
    }

    getPriceImpact(bids, asks){
        if(this.state.priceImpactVolume==0){
            this.stats.impact.buy = this.stats.impact.sell = 0;
            return;
        }
        this.stats.midpoint = this.getMidPoint(bids, asks);
        var bidAverage =0, bidTotalVol = 0;
        var askAverage =0, askTotalVol = 0;

        for(var bid of bids){
            if(this.bidsMap[bid].bidstotalvolume > this.state.priceImpactVolume) {
                this.stats.impact.sell = this.bidsMap[bid].value - this.stats.midpoint;
                bidAverage += ((this.state.priceImpactVolume - bidTotalVol) * this.bidsMap[bid].value)
                bidTotalVol = this.bidsMap[bid].bidstotalvolume;
                break;
            }
            bidTotalVol = this.bidsMap[bid].bidstotalvolume;
            bidAverage += (this.bidsMap[bid].bidsvolume * this.bidsMap[bid].value);
        }

        for(var ask of asks){
            if(this.asksMap[ask].askstotalvolume > this.state.priceImpactVolume) {
                this.stats.impact.buy =  this.asksMap[ask].value - this.stats.midpoint;
                askAverage += ((this.state.priceImpactVolume - askTotalVol) * this.asksMap[ask].value)
                askTotalVol = this.asksMap[ask].askstotalvolume;
                break;
            }
            askTotalVol = this.asksMap[ask].askstotalvolume;
            askAverage += (this.asksMap[ask].asksvolume * this.asksMap[ask].value);
        }

        this.stats.average.sell = bidAverage / Math.min(bidTotalVol, this.state.priceImpactVolume);
        this.stats.average.buy = askAverage / Math.min(askTotalVol, this.state.priceImpactVolume);
    }

    getStats(){
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
        if (bids.length && asks.length) {
            this.getDepth(bids, asks, 10);
        }
        this.getPriceImpact(bids, asks, 0.5);
    }

    handleChange = (e) =>{
        this.setState({priceImpactVolume: e.target.value});
    }

    render() {
        if(this.props.orders){
            this.getStats();
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <input type="text" value={this.state.priceImpactVolume} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="stat-wrapper">
                            <div className="stat-label">
                                10% Bid Depth
                            </div>
                            <div className="stat-data">
                                {this.stats.depth.bids.from} ( {this.stats.depth.bids.to} )
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        {this.stats.impact.sell} /
                        {this.stats.impact.buy}

                    </div>
                    <div className="col-md">
                        { (this.stats.impact.sell / this.stats.midpoint) * 100 || 0 }% /
                        { (this.stats.impact.buy / this.stats.midpoint) * 100 || 0 }%
                    </div>
                    <div className="col-md">
                        {this.stats.average.sell} /
                        {this.stats.average.buy}
                    </div>
                </div>
            </div>
        )
    }
}
ChartContainer.propTypes = {
};

export { ChartContainer };