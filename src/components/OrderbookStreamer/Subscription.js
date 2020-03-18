import React from 'react';
import PropTypes from 'prop-types';

const Subscription = (props) => (
    <div>
        <div onClick={props.subscribe}>Subscribe</div>
        <div onClick={props.unsubscribe}>Unsubscribe</div>
    </div>
);

Subscription.propTypes = {
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func
};

export { Subscription };