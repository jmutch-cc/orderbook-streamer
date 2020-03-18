import React, { Component } from "react";
import { OrderbookService } from '../../services/OrderbookService';
import PropTypes from 'prop-types';

const orderbookService = new OrderbookService();

class OrderRow extends Component {

    constructor(props){
        super(props);

        this.randomVar = Math.random();
        this.updated = '';

        let currentComponent = this;
        currentComponent.callback = (data) => {
            console.log("hit callback");
        }
    }
    componentWillReceiveProps(){
        // console.log("Will receive in roiw");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log(this.props.lastUpdated);
        return nextProps.lastUpdated == this.props.order.P;
    }

    componentDidUpdate(prevProps) {
        // console.log("Did update");
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.order.P}
                </td>
                <td>
                    {this.props.order.Q}
                </td>
                <td>
                </td>
                <td>
                </td>
            </tr>
        )
    }
}
OrderRow.propTypes = {
};

export { OrderRow };