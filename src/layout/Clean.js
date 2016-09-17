import React, { PropTypes } from 'react';
import styles from './Clean.less';

/**
 * @class Clean
 * @module *
 */
class Clean extends React.Component {
	render () {
		return (
			<div className="Clean">
				{ this.props.children}
			</div>
		);
	}
}

export default Clean;
