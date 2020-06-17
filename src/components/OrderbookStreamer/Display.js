import React, { Component} from 'react';
import {Chart} from './Chart';
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
        // console.log("Rendering display");
        return (
            <div className="container">
                <div>
                    <Chart bids={this.props.orders[0] ? Object.values(this.props.orders[0]): []} asks={this.props.orders[1] ? Object.values(this.props.orders[1]): []} />
                </div>
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