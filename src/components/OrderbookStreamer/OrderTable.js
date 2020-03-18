import React, { Component } from "react";
import PropTypes from 'prop-types';
import {OrderRow} from './OrderRow';
import { OrderbookService } from '../../services/OrderbookService';

const orderbookService = new OrderbookService();

class OrderTable extends Component {

    getTableRows(props) {
        if (props.orders) {
            return Object.entries(props.orders).map((item, key) => {
                if(key < 100){
                    return (
                        <OrderRow lastUpdated={props.lastUpdated} order={item[1]} key={key}/>
                    )
                }
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
            <table>
                <thead>
                <tr>
                    <td>
                        Price
                    </td>
                    <td>
                        Quantity
                    </td>
                    <td>
                        tsym
                    </td>
                    <td>
                        Sum(tsym)
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