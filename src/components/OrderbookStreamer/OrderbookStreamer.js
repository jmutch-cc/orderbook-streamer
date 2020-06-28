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
            stats: {},
            lastUpdated: 0,
        };
    }

    handleSubscribe(event) {

        let currentComponent = this;
        currentComponent.setState(prevState => {
            return {
                orders: orderbookService.getSnapshot(),
                lastUpdated: orderbookService.getLastUpdated(),
                stats: orderbookService.getStats()
            }
        });
        orderbookService.resetLastUpdated();
        // setTimeout(function(){
        //     setInterval(function(){
        //         currentComponent.setState(prevState => {
        //             return {
        //                 orders: orderbookService.getSnapshot(),
        //                 lastUpdated: orderbookService.getLastUpdated(),
        //                 stats: orderbookService.getStats()
        //             }
        //         });
        //         orderbookService.resetLastUpdated();
        //     }, 30000000);
        // }, 1000);

        currentComponent.callback = (data) => {
            console.log("callback", data);
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
            this.setState(prevState => {
                return {stats: data.stats};
            })
        }

        orderbookService
            .subscribe( currentComponent.callback );
    }

    handleUnsubscribe(event) {
        orderbookService
            .unsubscribe();
    }

    setSide(side){
        console.log("side",side);
        orderbookService.side = side;
    }

    render() {
        return (
            <div>
                <Subscription
                    subscribe={this.handleSubscribe.bind(this)}
                    unsubscribe={this.handleUnsubscribe}
                />
                <Display setSide={this.setSide} stats={this.state.stats} orders={this.state.orders} lastUpdated={this.state.lastUpdated}/>
            </div>
        );
    }
}

export { OrderbookStreamer };