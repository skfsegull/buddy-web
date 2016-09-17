import React, {PropTypes} from 'react';
import styles from './Main.less';

/**
 * @class Main
 * @module *
 */
class Main extends React.Component {
	render () {
		return (
			<div className={ styles.main }>
				Main
				{ this.props.children }
			</div>
		);
	}
}

export default Main;
