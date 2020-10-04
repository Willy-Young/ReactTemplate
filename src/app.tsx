import React from 'react';

import Simplebar from 'simplebar-react';

const App: React.FC = () => (
	<div>
		<Simplebar style={{ height: '100%' }} scrollableNodeProps={{ id: 'appScrollRoot' }}>
			<main>
				<p>
					React App
				</p>
			</main>
		</Simplebar>
	</div>
);

export default App;
