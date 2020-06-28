import React, { Component } from "react";
import { Utils } from '../../services/Utils';
const utils = new Utils();

class OrderRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: false,
        };
    }

    render() {
        this.state.updated = this.props.lastUpdated.indexOf(Number(this.props.order.value)) !== -1;
        this.price = this.props.order.value;
        this.price = utils.formatNumber(this.price, 4);
        this.volume = this.props.order.bidsvolume || this.props.order.asksvolume;
        this.volume = utils.formatNumber(this.volume, 6);
        this.tsymPrice = this.props.order.value * (this.props.order.bidsvolume || this.props.order.asksvolume || 0)
        this.tsymPrice = utils.formatNumber(this.tsymPrice, 4, true);
        this.totalVolume = this.props.order.bidstotalvolumefrom || this.props.order.askstotalvolumefrom;
        this.totalVolume = utils.formatNumber(this.totalVolume,2, true);
        return (

            <div className={
                `row data-row ${this.state.updated ? 'highlight' : ''}`
                }>
                <div className="col-md">
                    {this.price}
                </div>
                <div className="col-md">
                    {this.volume}
                </div>
                <div className="col-md">
                    {this.tsymPrice}
                </div>
                <div className="col-md">
                    {this.totalVolume}
                </div>
            </div>
        )
    }
}
OrderRow.propTypes = {
};

export { OrderRow };