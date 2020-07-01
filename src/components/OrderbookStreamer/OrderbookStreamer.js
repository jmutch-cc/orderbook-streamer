import React, { Component } from 'react';
import { Subscription } from './Subscription';
import { Display } from './Display';
import { OrderbookService } from '../../services/OrderbookService';
const orderbookService = new OrderbookService();

class OrderbookStreamer extends Component {

    constructor(props){
        super(props);

        this.state = {
            orders: 0,
            lastUpdated: 0,
            exchange: 'Binance',
            tSym: 'BTC',
            fSym: 'USDT'
        };
        let currentComponent = this;
         setInterval(function(){
            currentComponent.setState(prevState => {
                return { orders: orderbookService.getSnapshot(), lastUpdated: orderbookService.getLastUpdated() }
            });
            orderbookService.resetLastUpdated();
        }, 1000);
        this.subscribe(this.state.exchange, this.state.tSym, this.state.fSym);
    }

    subscribe(exchange, tSym, fSym){
        let currentComponent = this;
        currentComponent.callback = (data) => {
            this.setState(prevState => {
                return {orders: data.orders,
                    lastUpdated: orderbookService.getLastUpdated()};
            });
            orderbookService.resetLastUpdated();
        }
        orderbookService.subscribe( exchange, tSym, fSym, currentComponent.callback );
    }

    changeSubscription(event){
        this.setState({
            exchange: 'Bittrex',
            tSym: 'BTC',
            fSym: 'USD',
        });
        this.subscribe('Bittrex', this.state.tSym, this.state.fSym);
    }

    unsubscribe(){
        orderbookService.unsubscribe();
    }

    render() {
        return (
            <div>
                <Subscription
                    newSub={this.changeSubscription.bind(this)} unsubscribe={this.unsubscribe.bind(this)}
                />
                <Display orders={this.state.orders} lastUpdated={this.state.lastUpdated}/>
            </div>
        );
    }
}

export { OrderbookStreamer };