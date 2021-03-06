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

    render() {
        if(!Object.keys(this.props.orders).length){
            return <div/>;
        }
        let bidKeys = Object.keys(this.props.orders[0]);
        let askKeys = Object.keys(this.props.orders[1]);
        bidKeys.sort(function(a,b){return b-a});
        askKeys.sort(function(a,b){return a-b});
        return (
            <div className="container">
                <Stats fSym={this.props.fSym} tSym={this.props.tSym} orders={this.props.orders}></Stats>
                <div className="row">
                    <div className="col-md-6">
                        <OrderTable
                            fSym={this.props.fSym}
                            tSym={this.props.tSym}
                            orders={this.props.orders[0]}
                            keys={bidKeys}
                            lastUpdated={this.props.lastUpdated}
                            title='Buy' />
                    </div>
                    <div className="col-md-6">
                        <OrderTable
                            fSym={this.props.fSym}
                            tSym={this.props.tSym}
                            orders={this.props.orders[1]}
                            keys={askKeys}
                            lastUpdated={this.props.lastUpdated}
                            title='Sell'/>
                    </div>
                </div>
            </div>
        )
    }
}

Display.propTypes = {
    orders: PropTypes.object.isRequired,
    keys: PropTypes.array,
    lastUpdated: PropTypes.array.isRequired,
    fSym: PropTypes.string.isRequired,
    tSym: PropTypes.string.isRequired,
};

export { Display };