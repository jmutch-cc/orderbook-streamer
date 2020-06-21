import React from 'react';
import PropTypes from 'prop-types';

const Subscription = (props) => (
    <div className="subscription">
        <span onClick={props.subscribe}>
            <button type="button" className="btn btn-primary">Subscribe</button>
        </span>
        <span onClick={props.unsubscribe}>
            <button type="button" className="btn btn-secondary">Unsubscribe</button>
        </span>
    </div>
);

Subscription.propTypes = {
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func
};

export { Subscription };