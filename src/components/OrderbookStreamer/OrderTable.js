import React, { Component } from "react";
import PropTypes from 'prop-types';
import Infinite from 'react-infinite';
import {OrderRow} from './OrderRow';
import { Utils } from '../../services/Utils';
const utils = new Utils();

class OrderTable extends Component {

    getTableRows(props) {
        return this.props.keys.map((key) => {
            return (
                <OrderRow lastUpdated={props.lastUpdated} order={props.orders[key]} key={key}/>
            )
        })
    }

    render() {
        let totalVolume;
        if(!this.props.orders || !this.props.keys.length){
            return <div/>
        }
        if(this.props.title === 'Buy'){
            totalVolume = {
                to: this.props.orders[this.props.keys[this.props.keys.length-1]].bidstotalvolume.to,
                from: this.props.orders[this.props.keys[this.props.keys.length-1]].bidstotalvolume.from
            };
        } else {
            totalVolume = {
                to: this.props.orders[this.props.keys[this.props.keys.length-1]].askstotalvolume.to,
                from: this.props.orders[this.props.keys[this.props.keys.length-1]].askstotalvolume.from
            };
        }
        return (
        <div>
            <div className={"row"}>
                <div className="col-md">
                    {this.props.fSym} {utils.formatNumber(totalVolume.to, 2, true)}
                </div>
                <div className="col-md">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="col-md">
                    {this.props.tSym} {utils.formatNumber(totalVolume.from, 2, true)}
                </div>
            </div>
            <div className="orderbook">
                <div className="row title-row">
                    <div className="col-md">
                        Price
                    </div>
                    <div className="col-md">
                        {this.props.fSym}
                    </div>
                    <div className="col-md">
                        {this.props.tSym}
                    </div>
                    <div className="col-md">
                        Sum({this.props.tSym})
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
    title: PropTypes.string.isRequired,
    fSym: PropTypes.string.isRequired,
    tSym: PropTypes.string.isRequired,
    keys: PropTypes.array.isRequired,
    orders: PropTypes.object.isRequired
};

export { OrderTable };