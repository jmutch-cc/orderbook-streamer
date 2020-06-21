import React, { Component } from "react";
import PropTypes from 'prop-types';
import {OrderRow} from './OrderRow';
import { OrderbookService } from '../../services/OrderbookService';

const orderbookService = new OrderbookService();

class OrderTable extends Component {

    getTableRows(props) {
        if (props.orders) {
            var objs = Object.keys(props.orders);
            if(props.title==='Buy'){
                objs.reverse();
            }
            return objs.slice(0,30).map((key) => {
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
        // console.log("Rendering table");
        return (
        <div>
            <h2>{this.props.title}</h2>
            <table className="orderbook">
                <thead>
                <tr className="d-flex">
                    <td className="col-3">
                        Price
                    </td>
                    <td className="col-3">
                        BTC
                    </td>
                    <td className="col-3">
                        USDT
                    </td>
                    <td className="col-3">
                        Sum(USDT)
                    </td>
                </tr>
                </thead>
                <tbody>
                    {this.getTableRows(this.props)}
                </tbody>
            </table>
        </div>
        )
    }
}
OrderTable.propTypes = {
    title: PropTypes.string
};

export { OrderTable };