import React from 'react';

import Pulse from 'components/loaders/pulse';

const Loading: React.FC = () => (
	<div className='app-page-center'>
		<Pulse>
			<h1>Loading</h1>
		</Pulse>
	</div>
);

export default Loading;
