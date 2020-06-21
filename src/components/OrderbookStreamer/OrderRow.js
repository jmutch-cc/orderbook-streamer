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
        this.price = this.props.order.value;
        this.price = +this.price.toFixed(6);
        this.volume = this.props.order.bidsvolume || this.props.order.asksvolume;
        this.volume = +this.volume.toFixed(6);
        this.tsymPrice = this.props.order.value * (this.props.order.bidsvolume || this.props.order.asksvolume || 0)
        this.tsymPrice = +this.tsymPrice.toFixed(6);
        this.totalVolume = this.props.order.bidstotalvolume || this.props.order.askstotalvolume;
        this.totalVolume = +this.totalVolume.toFixed(6);
        return (

            <tr className={
                `d-flex ${this.state.updated ? 'highlight' : ''}`
                }>
                <td className="col-3">
                    {this.price}
                </td>
                <td className="col-3">
                    {this.volume}
                </td>
                <td className="col-3">
                    {this.tsymPrice}
                </td>
                <td className="col-3">
                    {this.totalVolume}
                </td>
            </tr>
        )
    }
}
OrderRow.propTypes = {
};

export { OrderRow };