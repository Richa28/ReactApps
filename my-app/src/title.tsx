import * as React from 'react';

export class Title extends React.Component<any, any> {

public render() {

        return <div>
        	<div>
                Hello {this.props.customName}
            </div>
        </div>;
	}
}
