import React, { Component} from 'react';
import {Stats} from './Stats';
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

    // componentDidUpdate(prevProps) {
    //     console.log("orders", this.props.orders); //test
    //     this.setState({ orders: this.props.orders});
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log("Should display update?");
        return true;
    }

    render() {
        return (
            <div className="container">
                <Stats orders={this.props.orders}></Stats>
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