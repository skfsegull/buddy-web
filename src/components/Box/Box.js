import React, {PropTypes} from 'react';
import styles from './Box.less';
/**
 * @class Box
 * @module *
 */
class Box extends React.Component {

	render () {

		return (
			<div className={ [styles.main, styles[this.props.size]].join(' ') }>
				<div className={ styles.content }>
					<h1 className={ styles.title }>{ this.props.title }</h1>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Box;
