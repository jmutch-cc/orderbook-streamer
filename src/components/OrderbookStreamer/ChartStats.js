import React, { Component } from "react";
import { OrderbookService } from '../../services/OrderbookService';
import PropTypes from 'prop-types';

const orderbookService = new OrderbookService();

class ChartStats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: false,
        };
    }

    getBidDepth(bids, asks, percentage){
        var lastBid = bids[bids.length-1];
        var firstAsk = asks[0];

        var midPoint = parseFloat(lastBid) + ((firstAsk - lastBid )/ 2);
        var lowerLimit = midPoint - (midPoint*(percentage/100));
        var upperLimit = midPoint + (midPoint*(percentage/100));

        var bidDepthVolFrom = 0;
        var bidDepthVolTo = 0;
        for(var bid of bids){
            if(bid > lowerLimit){
                bidDepthVolFrom += this.bidsMap[bid].bidsvolume;
                bidDepthVolTo += this.bidsMap[bid].bidsvolume*this.bidsMap[bid].value;
            }
        }
        var askDepthVolFrom = 0;
        var askDepthVolTo = 0;
        for(var ask of asks){
            if(ask < upperLimit){
                askDepthVolFrom += this.asksMap[ask].asksvolume;
                askDepthVolTo += this.asksMap[ask].asksvolume*this.asksMap[ask].value;
            }
        }
        console.log(bidDepthVolFrom);
        console.log(bidDepthVolTo);
        console.log(askDepthVolFrom);
        console.log(askDepthVolTo);
    }

    getStats(){
        if(!this.props.orders[0] || !this.props.orders[1]){return;}
        this.bidsMap = this.props.orders[0];
        this.asksMap = this.props.orders[1];
        var bids = Object.keys(this.props.orders[0]);
        var asks = Object.keys(this.props.orders[1]);
        bids.sort(function (a, b) {
            return a-b;
        });
        asks.sort(function (a, b) {
            return a-b;
        });

        if( bids.length && asks.length){

            this.getBidDepth(bids, asks, 10);

        }
    }

    // Calculation
    // The calculation for market depth is simply the cumulative volume of the base asset at various percentages from the mid price.
    // For example, the “Bid Volume 10%” for BTC/USD on Coinbase would represent the volume of all bids for BTC falling within 10% of
    // the mid price at which the order book snapshot was taken. To calculate the depth, we would add up the volume of all bids placed
    // within this 10% price range. Conversely, the “Ask Volume 10%” would be the volume of all asks within 10% of the mid price.

    componentWillReceiveProps(props){
        // this.state.updated = props.lastUpdated.indexOf(Number(this.props.order.value)) !== -1;
    }

    render() {
        // this.price = this.props.order.value;
        var stats = this.getStats();
        return (

            <div className="col-md-12">
                <div className="col-md-3">
                    10% Bid Depth
                </div>
                <div className="col-md-3">
                    {/*{this.volume}*/}
                </div>
                <div className="col-md-3">
                    {/*{this.tsymPrice}*/}
                </div>
                <div className="col-md-3">
                    {/*{this.totalVolume}*/}
                </div>
            </div>
        )
    }
}
ChartStats.propTypes = {
};

export { ChartStats };