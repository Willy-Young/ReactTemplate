import { configureActions } from '@storybook/addon-actions';
import { DecoratorFunction, StoryFn } from '@storybook/addons';
import { addDecorator } from '@storybook/react';

import React from 'react';
import { MemoryRouter } from 'react-router';

configureActions({
	clearOnStoryChange: true,
	depth: 5,
	limit: 20,
});

const Contexts: DecoratorFunction<any> = (storyFn: StoryFn) => (
	<MemoryRouter>
		<div style={{ margin: '2em' }}>
			{ storyFn() }
		</div>
	</MemoryRouter>
);

addDecorator(Contexts);
