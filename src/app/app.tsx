import React, { Suspense } from 'react';

import Simplebar from 'simplebar-react';

import Error from 'app/pages/error';
import Loading from 'app/pages/loading';

import { Main } from './routes';

const App: React.FC = () => (
	<div>
		<Simplebar style={{ height: '100%' }} scrollableNodeProps={{ id: 'appScrollRoot' }}>
			<main>
				<Suspense fallback={ <Loading /> }>
					<Error>
						<Main />
					</Error>
				</Suspense>
			</main>
		</Simplebar>
	</div>
);

export default App;
