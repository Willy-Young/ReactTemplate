import React, { lazy } from 'react';

import { Route, Switch } from 'react-router';

const HomePage = lazy(() => import('app/pages/home'));

const Main: React.FC = () => (
	<Switch>
		<Route path='/' component={ HomePage } />
	</Switch>
);

export default Main;
