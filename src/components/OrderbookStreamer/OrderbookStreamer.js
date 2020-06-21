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
        };
    }

    handleSubscribe(event) {

        let currentComponent = this;
        currentComponent.setState(prevState => {
            return { orders: orderbookService.getSnapshot(), lastUpdated: orderbookService.getLastUpdated() }
        });
        orderbookService.resetLastUpdated();
        setTimeout(function(){
            setInterval(function(){
                currentComponent.setState(prevState => {
                    return { orders: orderbookService.getSnapshot(), lastUpdated: orderbookService.getLastUpdated() }
                });
                orderbookService.resetLastUpdated();
            }, 5000);
        }, 5000);


        currentComponent.callback = (data) => {
            if(data.lastUpdated){
                this.setState(prevState => {
                    return {lastUpdated: data.lastUpdated};
                })
            }
            if(data.orders) {
                this.setState(prevState => {
                    return {orders: data.orders};
                })
            }
        }

        orderbookService
            .subscribe( currentComponent.callback );
    }

    handleUnsubscribe(event) {
        orderbookService
            .unsubscribe();
    }

    render() {
        return (
            <div>
                <Subscription
                    subscribe={this.handleSubscribe.bind(this)}
                    unsubscribe={this.handleUnsubscribe}
                />
                <Display orders={this.state.orders} lastUpdated={this.state.lastUpdated}/>
            </div>
        );
    }
}

export { OrderbookStreamer };