import React, { Component } from "react";
import { OrderbookService } from '../../services/OrderbookService';
import PropTypes from 'prop-types';

const orderbookService = new OrderbookService();

class OrderRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: false,
        };
    }

    componentWillReceiveProps(props){
        this.state.updated = props.lastUpdated.indexOf(Number(this.props.order.value)) !== -1;
    }

    render() {
        return (
            // this.props.order.Q !== 0 &&
            <tr className={
                this.state.updated ? 'highlight' : ''
                }>
                <td>
                    {this.props.order.value}
                </td>
                <td>
                    {this.props.order.bidsvolume || this.props.order.asksvolume}
                </td>
                <td>
                    {this.props.order.value * (this.props.order.bidsvolume || this.props.order.asksvolume || 0)}
                </td>
                <td>
                    {this.props.order.bidstotalvolume || this.props.order.askstotalvolume}
                </td>
            </tr>
        )
    }
}
OrderRow.propTypes = {
};

export { OrderRow };