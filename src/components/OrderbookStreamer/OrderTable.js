import React, { Component } from "react";
import PropTypes from 'prop-types';
import Infinite from 'react-infinite';
import {OrderRow} from './OrderRow';
import { OrderbookService } from '../../services/OrderbookService';

const orderbookService = new OrderbookService();
class OrderTable extends Component {

    getTableRows(props) {
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log("Should Table update?");
        return true;

    }

    componentWillReceiveProps(){
        // console.log("Will receive in table");
    }


    render() {
        if(!this.props.orders){
            return <div/>
        }
        return (
        <div>
            <h2>{this.props.title}</h2>
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
    title: PropTypes.string
};

export { OrderTable };