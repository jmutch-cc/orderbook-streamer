import React, { Component} from 'react';
import {ChartContainer} from './ChartContainer';
import {OrderTable} from './OrderTable';
import PropTypes from 'prop-types';

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            lastUpdated: [],
        };
    }

    componentWillReceiveProps(nextProps){
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log("Should display update?");
        return true;
    }

    render() {
        return (
            <div className="container">
                <ChartContainer orders={this.props.orders}></ChartContainer>
                <div className="row">
                    <div className="col-md-6">
                        <OrderTable orders={this.props.orders[0]} lastUpdated={this.props.lastUpdated} title='Buy' />
                    </div>
                    <div className="col-md-6">
                        <OrderTable orders={this.props.orders[1]} lastUpdated={this.props.lastUpdated} title='Sell'/>
                    </div>
                </div>
            </div>
        )
    }
}


Display.propTypes = {
};

export { Display };