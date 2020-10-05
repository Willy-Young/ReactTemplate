import React from 'react';
import PropTypes from 'prop-types';

const flashStyle = { animationDuration: '2s' };
const pulseStyle = { animationDuration: '1s', animationDelay: '-.5s' };

const Pulse: React.FC = ({ children }) => (
	<div className='animate__animated animate__flash animate__infinite' style={ flashStyle }>
		<div className='animate__animated animate__pulse animate__infinite' style={ pulseStyle }>
			{ children }
		</div>
	</div>
);

Pulse.propTypes = {
	children: PropTypes.node,
};
Pulse.defaultProps = {
	children: null,
};

export default Pulse;
