import React, { Component } from 'react';
import { Subscription } from './Subscription';
import { Display } from './Display';
import { OrderbookService } from '../../services/OrderbookService';
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
            tSym: props.tSym
        };
        let currentComponent = this;
         setInterval(function(){
            currentComponent.setState(prevState => {
                return { orders: orderbookService.getSnapshot(), lastUpdated: orderbookService.getLastUpdated() }
            });
            orderbookService.resetLastUpdated();
        }, 150);
        this.subscribe(this.state.exchange, this.state.fSym, this.state.tSym);
    }

    subscribe(exchange, fSym, tSym){
        let currentComponent = this;
        currentComponent.callback = (data) => {
            this.setState(prevState => {
                return {orders: data.orders,
                    lastUpdated: orderbookService.getLastUpdated()};
            });
            orderbookService.resetLastUpdated();
        }
        orderbookService.subscribe( exchange, fSym, tSym, currentComponent.callback );
    }

    changeSubscription(exchange, fSym, tSym){
        orderbookService.unsubscribe();
        this.setState({
            exchange: exchange,
            fSym: fSym,
            tSym: tSym,
        });
        this.subscribe(exchange, fSym, tSym);
    }

    render() {
        return (
            <div className="container">
                <Subscription
                    subscribe={this.changeSubscription}
                    exchange={this.state.exchange}
                    fSym={this.state.fSym}
                    tSym={this.state.tSym}
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

export { OrderbookStreamer };