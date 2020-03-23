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
        // console.log(this.props.order.P);
        // console.log(this.props.lastUpdated);
        // console.log(nextProps.lastUpdated.indexOf(Number(this.props.order.P)) !== -1);
        return nextProps.lastUpdated.indexOf(Number(this.props.order.P)) !== -1;
    }

    componentDidUpdate(prevProps) {
        // console.log("Did update");
    }

    render() {
        console.log("Rendering row");
        return ( this.props.order.Q !== 0 &&
            <tr>
                <td>
                    {this.props.order.P}
                </td>
                <td>
                    {this.props.order.Q}
                </td>
                <td>
                    {this.props.order.Q * this.props.order.P}
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