import React, { Component } from "react";
import PropTypes from 'prop-types';
import Infinite from 'react-infinite';
import {OrderRow} from './OrderRow';
import { OrderbookService } from '../../services/OrderbookService';

const orderbookService = new OrderbookService();
class OrderTable extends Component {

    getTableRows(props) {
        if (props.orders) {
            var objs = Object.keys(props.orders);
            if(props.title==='Buy'){
                objs.sort(function(a,b){return b-a});
            } else {
                objs.sort(function(a,b){return a-b});
            }
            return objs.map((key) => {
                return (
                    <OrderRow lastUpdated={props.lastUpdated} order={props.orders[key]} key={key}/>
                )
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log("Should Table update?");
        return true;

    }

    componentWillReceiveProps(){
        // console.log("Will receive in table");
    }


    render() {
        return (
        <div>
            <h2>{this.props.title}</h2>
            <div className="orderbook">
                <div className="d-flex">
                    <div className="col-3">
                        Price
                    </div>
                    <div className="col-3">
                        BTC
                    </div>
                    <div className="col-3">
                        USDT
                    </div>
                    <div className="col-3">
                        Sum(USDT)
                    </div>
                </div>
                <Infinite containerHeight={200} elementHeight={40}>
                    {this.getTableRows(this.props)}
                </Infinite>
            </div>
        </div>
        )
    }
}
OrderTable.propTypes = {
    title: PropTypes.string
};

export { OrderTable };