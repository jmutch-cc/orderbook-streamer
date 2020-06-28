import React, { Component } from "react";
import { Utils } from '../../services/Utils';
import 'font-awesome/css/font-awesome.min.css';

const utils = new Utils();

class Stats extends Component {
    constructor(props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);
        this.toggleDirection = this.toggleDirection.bind(this);
        this.state = {
            updated: false,
            stats: {},
            priceImpactVolume: 10,
            toggle: 'sell',
            direction: 'to'
        };
        this.stats = {
            midpoint: 0,
            depth: {
                bids: {},
                asks: {}
            },
            impact: {
                buy: 0,
                sell: 0,
                averageBuyPrice: 0,
                averageSellPrice: 0
            },
        }
    }

    toggleState(e) {
        this.setState({
            toggle: e.target.value
        });
    }
    toggleDirection(e) {
        this.setState({
            direction: e.target.value
        });
        this.props.setSide(e.target.value);
    }

    handleChange = (e) =>{
        this.setState({priceImpactVolume: e.target.value});
    }

    render() {
        console.log(this.props.stats);
        if(!this.props.stats.depth || !Object.keys(this.props.stats.depth.buy).length || !Object.keys(this.props.stats.depth.sell).length){
            return <div />;
        }
        return (
            <div className="container">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md">
                            <form className="switch-field">
                                <input
                                    type="radio"
                                    id="switch_left"
                                    name="switchToggle"
                                    value="buy"
                                    onChange={this.toggleState}
                                    checked={this.state.toggle=='buy'}
                                />
                                <label htmlFor="switch_left">Buy</label>
                                <input
                                    type="radio"
                                    id="switch_right"
                                    name="switchToggle"
                                    value="sell"
                                    onChange={this.toggleState}
                                    checked={this.state.toggle=='sell'}
                                />
                                <label htmlFor="switch_right">Sell</label>
                            </form>
                        </div>
                        <div className="col-md">
                            <form className="switch-field direction">
                                <input
                                    type="radio"
                                    id="switch_direction_to"
                                    name="switchToggle"
                                    value="from"
                                    onChange={this.toggleDirection}
                                    checked={this.state.direction=='from'}
                                />
                                <label htmlFor="switch_direction_to"><i className="fa fa-exchange"></i>BTC</label>
                                <input
                                    type="radio"
                                    id="switch_direction_from"
                                    name="switchToggle"
                                    value="to"
                                    onChange={this.toggleDirection}
                                    checked={this.state.direction=='to'}
                                />
                                <label htmlFor="switch_direction_from"><i className="fa fa-exchange"></i>USDT</label>
                            </form>
                            <input className="form-control price-impact" type="text" value={this.state.priceImpactVolume} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    10% Bid Depth
                                </div>
                                <div className="stat-data">
                                    Ƀ {utils.formatNumber(this.props.stats.depth[this.state.toggle].from, 2, true)}
                                    ( ₮ {utils.formatNumber(this.props.stats.depth[this.state.toggle].to, 2, true)} )
                                </div>
                            </div>
                        </div>
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Price Impact
                                </div>
                                <div className={`stat-data ${this.props.stats.impact[this.state.toggle] >= 0 ? 'up-text' : 'down-text'}`}>
                                    ₮ {utils.formatNumber(this.props.stats.impact[this.state.toggle], 3, true)}
                                </div>
                            </div>
                        </div>
                        <div className="col-md col-stat">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Price Impact %
                                </div>
                                <div className={`stat-data ${this.props.stats.impact[this.state.toggle] >= 0 ? 'up-text' : 'down-text'}`}>
                                    { utils.formatNumber((this.props.stats.impact[this.state.toggle] / this.props.stats.midpoint) * 100, 3, true) || 0 }%
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="stat-wrapper">
                                <div className="stat-label">
                                    Average Price
                                </div>
                                <div className="stat-data">
                                    ₮ {utils.formatNumber(this.props.stats.impact.average[this.state.toggle], 2, true)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Stats.propTypes = {
};

export { Stats };