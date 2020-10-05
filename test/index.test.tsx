import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import App from 'app/app';

test('renders without crashing', done => {
	const div = document.createElement('div');
	
	ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
	
	done();
});
