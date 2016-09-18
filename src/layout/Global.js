import React from 'react';
import styles from './Global.less';

/**
 * @class Global
 * @module *
 */
class Global extends React.Component {
	render () {
		return (
			<div className={ styles.main }>
				{ this.props.children }
			</div>
		);
	}
}

export default Global;
