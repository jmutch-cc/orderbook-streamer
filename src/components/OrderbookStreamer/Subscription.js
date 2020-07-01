import React from 'react';
import PropTypes from 'prop-types';

const Subscription = (props) => (
    <div className="subscription">
        <span onClick={props.newSub} value="binance">
            <button type="button" className="btn btn-primary">Binance</button>
        </span>
        <span onClick={props.unsubscribe} value="bittrex">
            <button type="button" className="btn btn-secondary">Bittrex</button>
        </span>
    </div>
);

Subscription.propTypes = {
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func
};

export { Subscription };