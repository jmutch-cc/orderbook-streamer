import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChartStats extends Component {
    constructor(props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            toggle: 'sell'
        };
    }

    toggleState(e) {
        this.setState({
            toggle: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md">
                        <form className="switch-field">
                            <input
                                type="radio"
                                id="switch_left"
                                name="switchToggle"
                                value="buy"
                                onChange={this.toggleState}
                                checked={this.state.toggle==='buy'}
                            />
                            <label htmlFor="switch_left">Buy</label>

                            <input
                                type="radio"
                                id="switch_right"
                                name="switchToggle"
                                value="sell"
                                onChange={this.toggleState}
                                checked={this.state.toggle==='sell'}
                            />
                            <label htmlFor="switch_right">Sell</label>
                        </form>
                    </div>
                    <div className="col-md">
                        <input type="text" value={this.state.priceImpactVolume} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md col-stat">
                        <div className="stat-wrapper">
                            <div className="stat-label">
                                10% Bid Depth
                            </div>
                            <div className="stat-data">
                                {this.props.stats.depth.bids.from} ( {this.props.stats.depth.bids.to} )
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-stat">
                        <div className="stat-wrapper">
                            <div className="stat-label">
                                Price Impact
                            </div>
                            <div className="stat-data">
                                {this.props.stats.impact.sell} /
                                {this.props.stats.impact.buy}
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-stat">
                        <div className="stat-wrapper">
                            <div className="stat-label">
                                Price Impact %
                            </div>
                            <div className="stat-data">
                                { (this.props.stats.impact[this.state.toggle] / this.props.stats.midpoint) * 100 || 0 }%
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="stat-wrapper">
                            <div className="stat-label">
                                Average Price
                            </div>
                            <div className="stat-data">
                                {this.props.stats.impact.averageSellPrice} /
                                {this.props.stats.impact.averageBuyPrice}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ChartStats.propTypes = {
    stats: PropTypes.object.isRequired
};

export { ChartStats };