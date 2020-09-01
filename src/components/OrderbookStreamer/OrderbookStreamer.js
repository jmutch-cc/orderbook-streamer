import React, { Component } from 'react';
import { Subscription } from './Subscription';
import { Display } from './Display';
import { OrderbookService } from '../../services/OrderbookService';
import PropTypes from 'prop-types';
const orderbookService = new OrderbookService();

class OrderbookStreamer extends Component {
    constructor(props){
        super(props);
        this.changeSubscription = this.changeSubscription.bind(this);
        this.state = {
            orders: {},
            lastUpdated: [],
            exchange: props.exchange,
            fSym: props.fSym,
            tSym: props.tSym,
            apiKey: props.apiKey
        };
        let currentComponent = this;
         setInterval(function(){
            currentComponent.setState(prevState => {
                return { orders: orderbookService.getSnapshot(), lastUpdated: orderbookService.getLastUpdated() }
            });
            orderbookService.resetLastUpdated();
        }, 150);
    }

    subscribe(exchange, fSym, tSym, url, apiKey){
        let currentComponent = this;
        currentComponent.callback = (data) => {
            this.setState(prevState => {
                return {orders: data.orders,
                    lastUpdated: orderbookService.getLastUpdated()};
            });
            orderbookService.resetLastUpdated();
        }
        orderbookService.subscribe( exchange, fSym, tSym, url, apiKey, currentComponent.callback );
    }

    changeSubscription(subscriptionKey, url, apiKey){
        let parts = subscriptionKey.split('~');
        let exchange = parts[0];
        let fSym = parts[1];
        let tSym = parts[2];
        orderbookService.unsubscribe();
        this.setState({
            exchange: exchange,
            fSym: fSym,
            tSym: tSym,
        });
        this.subscribe(exchange, fSym, tSym, url, apiKey);
    }

    render() {
        return (
            <div className="container">
                <Subscription
                    subscribe={this.changeSubscription}
                    clientUrl={orderbookService.clientUrl}
                    apiKey={this.state.apiKey}
                    exchange={this.state.exchange}
                    fSym={this.state.fSym}
                    tSym={this.state.tSym}
                    autoSubscribe={this.props.autoSubscribe}
                />
                <Display
                    fSym={this.state.fSym}
                    tSym={this.state.tSym}
                    orders={this.state.orders}
                    lastUpdated={this.state.lastUpdated}/>
            </div>
        );
    }
}

OrderbookStreamer.propTypes = {
    exchange: PropTypes.string.isRequired,
    fSym: PropTypes.string.isRequired,
    tSym: PropTypes.string.isRequired,
};

export { OrderbookStreamer };