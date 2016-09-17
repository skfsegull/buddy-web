'use strict';

import React, { PropTypes } from 'react';
import styles from './Button.less';

/**
 * @class Button
 * @module *
 */
class Button extends React.Component {

	static propTypes = {
		primary: PropTypes.bool,
		disabled: PropTypes.bool,
		danger: PropTypes.bool,
		inverse: PropTypes.bool,
		onClick: PropTypes.func
	};

	static defaultProps = {
		onClick: () => {}
	}

	handleClick = () => {
		this.props.onClick();
	}

	render () {

		const { primary, danger, disabled, inverse } = this.props;

		let className = styles.main;
		if(inverse) className = styles.inverse;
		if(danger) className = styles.danger;
		if(disabled) className = styles.disabled;
		if(primary) className = styles.primary;

		return (
			<button onClick={ this.handleClick } className={ className }>
				{ this.props.children || this.props.label }
			</button>
		);
	}
}

export default Button;
