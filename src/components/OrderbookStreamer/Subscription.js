import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {OrderbookService} from './../../services/OrderbookService';
const orderbookService = new OrderbookService();

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.selectExchange = this.selectExchange.bind(this);
        this.selectFsym = this.selectFsym.bind(this);
        this.selectTsym = this.selectTsym.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.changeSubscriptionKey = this.changeSubscriptionKey.bind(this);
        this.changeClientUrl = this.changeClientUrl.bind(this);
        this.changeApiKey = this.changeApiKey.bind(this);

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('test');
        console.log(foo);

        this.state = {
            exchanges: {},
            fSyms: {},
            tSyms: {},
            fSym: props.fSym,
            tSym: props.tSym,
            subscriptionKey: '',
            clientUrl: props.clientUrl,
            apiKey: props.apiKey,
            exchange: props.exchange,
        };
    }

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/ob/l2/exchanges?api_key='+this.state.apiKey).then(orderbookRes => {
            axios.get('https://min-api.cryptocompare.com/data/v4/all/exchanges')
                .then(res => {
                    let orderbookExchanges = {};
                    for(let exchange of orderbookRes.data.Data){
                        orderbookExchanges[exchange] = res.data.Data.exchanges[exchange];
                    }
                    this.setState({ exchanges: orderbookExchanges });
                    this.setState({
                        fSyms: this.state.exchanges[this.state.exchange].pairs,
                        tSyms: this.state.exchanges[this.state.exchange].pairs[this.state.fSym].tsyms
                    }, () => {
                        this.setState({
                                subscriptionKey: this.state.exchange + '~' + this.state.fSym + '~' + this.state.tSym
                            },() => {
                            if(this.props.autoSubscribe){
                                this.subscribe();
                            }
                        });
                    })
                });
            });
    }

    selectExchange(e){
        let exchange = e.target.value;
        console.log(this.state.exchanges[exchange].pairs);
        let pairs = this.state.exchanges[exchange].pairs;
        this.setState({
            exchange: exchange,
            fSyms: pairs,
            tSyms: pairs[Object.keys(pairs)[0]].tsyms,
            fSym: Object.keys(pairs)[0],
            tSym: Object.keys(pairs[Object.keys(pairs)[0]].tsyms)[0]
        }, () => {
            this.setState({subscriptionKey: this.state.exchange + '~' + this.state.fSym + '~' + this.state.tSym});
            console.log(this.state.subscriptionKey);
        })
    }

    selectFsym(e){
        console.log("Select Fsym");
        let fSym = e.target.value;
        let pairs = this.state.exchanges[this.state.exchange].pairs;
        this.setState({
            fSym: fSym,
            tSyms: pairs[fSym].tsyms,
            tSym: Object.keys(pairs[fSym].tsyms)[0]
        }, () => {
            this.setState({subscriptionKey: this.state.exchange + '~' + this.state.fSym + '~' + this.state.tSym});
        });
    }

    selectTsym(e){
        console.log("Select Tsym");
        let tSym = e.target.value;
        this.setState({ tSym: tSym},() => {
            this.setState({subscriptionKey: this.state.exchange + '~' + this.state.fSym + '~' + this.state.tSym});
        });
    }

    changeSubscriptionKey(e){
        this.setState({ subscriptionKey: e.target.value});
    }

    changeClientUrl(e){
        this.setState({ clientUrl: e.target.value});
    }

    changeApiKey(e){
        this.setState({ apiKey: e.target.value});
    }

    subscribe(){
        this.props.subscribe(this.state.subscriptionKey, this.state.clientUrl, this.state.apiKey);
    }

    render() {
        return (
            <div className={"subscription"}>
                <div className={"row"}>
                    <div className={"col-md-2"}></div>
                    <div className={"col-md-4"}>
                        <input className={"form-control"} placeholder={"Streamer URL"} onChange={this.changeClientUrl} value={this.state.clientUrl}></input>
                    </div>
                    <div className={"col-md-4"}>
                        <input className={"form-control"} type={"text"} placeholder={"API Key"} onChange={this.changeApiKey} required value={this.state.apiKey}></input>
                    </div>
                </div>
                <div className="subscription row">
                    <div className={"col-md-2"} />
                    <select className={"browser-default custom-select col-md"} value={this.state.exchange} onChange={this.selectExchange} name="exchanges" id="exchanges">
                        {Object.keys(this.state.exchanges).map(exchange =>
                            <option key={exchange}>{exchange}</option>
                        )}
                    </select>
                    <select className={"browser-default custom-select col-md"} value={this.state.fSym} onChange={this.selectFsym} name="fSym" id="fSym">
                        {Object.keys(this.state.fSyms).map(fSym =>
                            <option key={fSym}>{fSym}</option>
                        )}
                    </select>
                    <select className={"browser-default custom-select col-md"} value={this.state.tSym} onChange={this.selectTsym} name="tSym" id="tSym">
                        {Object.keys(this.state.tSyms).map(tSym =>
                            <option key={tSym}>{tSym}</option>
                        )}
                    </select>
                    <div className={"col-md-2"} />
                </div>
                <div className={"row"}>
                    <div className={"col-md-4"}></div>
                    <div className={"col-md-3"}>
                        <input style={{float: "right", width: "80%"}} className={"form-control"} type={"text"} onChange={this.changeSubscriptionKey} placeholder={"Subscription Key"} value={this.state.subscriptionKey}></input>
                        <div style={{float:"right", paddingTop:"10px"}}>8~</div>
                    </div>
                    <div className={"col-md-1"}>
                        <span onClick={this.subscribe}>
                            <button type="button" className="btn btn-primary">Subscribe</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

Subscription.propTypes = {
    subscribe: PropTypes.func.isRequired,
};

export { Subscription };