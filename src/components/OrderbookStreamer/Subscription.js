import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.selectExchange = this.selectExchange.bind(this);
        this.selectFsym = this.selectFsym.bind(this);
        this.selectTsym = this.selectTsym.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.state = {
            exchanges: {},
            fSyms: {},
            tSyms: {},
            fSym: props.fSym,
            tSym: props.tSym,
            exchange: props.exchange,
        };
    }

    componentDidMount() {
        axios.get(`https://min-api.cryptocompare.com/data/v4/all/exchanges?topTier=true`)
            .then(res => {
                this.setState({ exchanges: res.data.Data.exchanges });
                this.setState({
                    fSyms: this.state.exchanges[this.state.exchange].pairs,
                    tSyms: this.state.exchanges[this.state.exchange].pairs[this.state.fSym].tsyms
                });
            });
    }

    selectExchange(e){
        let exchange = e.target.value;
        this.setState({ exchange: exchange, fSyms: this.state.exchanges[exchange].pairs})
    }

    selectFsym(e){
        let fSym = e.target.value;
        this.setState({ fSym: fSym, tSyms: this.state.exchanges[this.state.exchange].pairs[fSym].tsyms})
    }

    selectTsym(e){
        let tSym = e.target.value;
        this.setState({ tSym: tSym})
    }

    subscribe(){
        this.props.subscribe(this.state.exchange, this.state.fSym, this.state.tSym);
    }

    render() {
        return (
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
                <span className={"col-md"} onClick={this.subscribe}>
                    <button type="button" className="btn btn-primary">Subscribe</button>
                </span>
                <div className={"col-md-2"} />
            </div>
        )
    }
}

Subscription.propTypes = {
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func
};

export { Subscription };