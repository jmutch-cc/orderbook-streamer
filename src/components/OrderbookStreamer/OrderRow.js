import React, { Component } from "react";
import { Utils } from '../../services/Utils';
import PropTypes from 'prop-types';
const utils = new Utils();

class OrderRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if(!this.updated && this.props.lastUpdated.indexOf(Number(this.props.order.value)) !== -1){
            this.updated = true;
            let c = this;
            setTimeout(function(){
                c.updated = false;
            }, 100);
        }
        this.price = this.props.order.value;
        this.volume = this.props.order.bidsvolume || this.props.order.asksvolume;
        this.tsymPrice = this.props.order.value * (this.props.order.bidsvolume || this.props.order.asksvolume || 0)
        this.totalVolume = this.props.order.bidstotalvolume || this.props.order.askstotalvolume;
        return (

            <div className={
                `row data-row ${this.updated ? 'highlight' : ''}`
                }>
                <div className="col-md">
                    {utils.formatNumber(this.price, 2)}
                </div>
                <div className="col-md">
                    {utils.formatNumber(this.volume, 6)}
                </div>
                <div className="col-md">
                    {utils.formatNumber(this.tsymPrice, 4, true)}
                </div>
                <div className="col-md">
                    {utils.formatNumber(this.totalVolume['from'],2, true)}
                </div>
            </div>
        )
    }
}

OrderRow.propTypes = {
    lastUpdated: PropTypes.array.isRequired,
    order: PropTypes.object.isRequired,
};

export { OrderRow };