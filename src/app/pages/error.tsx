import React, { ReactNode } from 'react';

interface State {
	hasError: boolean;
	error: Error;
}

class ErrorUncaught extends React.Component<any, State> {
	static getDerivedStateFromError(error: Error): State {
		return {
			hasError: true,
			error,
		};
	}
	
	state: State = {
		hasError: false,
		error: null,
	};
	
	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<div className='app-page-center'>
					<div style={{ whiteSpace: 'pre-wrap' }}>
						{ this.state.error.stack }
					</div>
				</div>
			);
		}
		
		return this.props.children;
	}
	
}

export default ErrorUncaught;
