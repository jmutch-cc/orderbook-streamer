import React, { Component } from "react";
import PropTypes from 'prop-types';
import Infinite from 'react-infinite';
import {OrderRow} from './OrderRow';
import { Utils } from '../../services/Utils';
const utils = new Utils();

class OrderTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: {},
            totalVolume: {
                to: 0,
                from: 0
            }
        }
    }

    getTableRows(props) {
        if(props.title==='Buy'){
            this.orderKeys.sort(function(a,b){return b-a});
        } else {
            this.orderKeys.sort(function(a,b){return a-b});
        }
        return this.orderKeys.map((key) => {
            return (
                <OrderRow lastUpdated={props.lastUpdated} order={props.orders[key]} key={key}/>
            )
        })
    }

    render() {
        if(!this.props.orders){
            return <div/>
        }
        var orderKeys = Object.keys(this.props.orders);
        if(!orderKeys.length){
            return;
        }
        if(this.props.title==='Buy'){
            orderKeys.sort(function(a,b){return b-a});
            var totalVolume = {
                to: this.props.orders[orderKeys[orderKeys.length-1]].bidstotalvolume.to,
                from: this.props.orders[orderKeys[orderKeys.length-1]].bidstotalvolume.from
            };
        } else {
            orderKeys.sort(function(a,b){return a-b});
            var totalVolume = {
                to: this.props.orders[orderKeys[orderKeys.length-1]].askstotalvolume.to,
                from: this.props.orders[orderKeys[orderKeys.length-1]].askstotalvolume.from
            };
        }
        this.orderKeys = orderKeys;
        return (
        <div>
            <div className={"row"}>
                <div className="col-md">
                    Ƀ {utils.formatNumber(totalVolume.to, 2, true)}
                </div>
                <div className="col-md">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="col-md">
                    ₮ {utils.formatNumber(totalVolume.from, 2, true)}
                </div>
            </div>
            <div className="orderbook">
                <div className="row title-row">
                    <div className="col-md">
                        Price
                    </div>
                    <div className="col-md">
                        BTC
                    </div>
                    <div className="col-md">
                        USDT
                    </div>
                    <div className="col-md">
                        Sum(USDT)
                    </div>
                </div>
                <Infinite containerHeight={400} elementHeight={21}>
                    {this.getTableRows(this.props)}
                </Infinite>
            </div>
        </div>
        )
    }
}
OrderTable.propTypes = {
    title: PropTypes.string,
    orders: PropTypes.object
};

export { OrderTable };