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
		invert: PropTypes.bool,
		inline: PropTypes.bool,
		onClick: PropTypes.func
	};

	static defaultProps = {
		onClick: () => {}
	}

	handleClick = () => {
		this.props.onClick();
	}

	render () {

		const { primary, danger, disabled, invert, inline, size, className } = this.props;

		let selectedStyle = styles.main;
		if(invert) selectedStyle = styles.invert;
		if(danger) selectedStyle = styles.danger;
		if(primary) selectedStyle = styles.primary;
		if(disabled) selectedStyle = styles.disabled;

		let classNames = [selectedStyle, className];
		if(inline) classNames.push(styles.inline);
		if(size) classNames.push(styles[size]);

		return (
			<button onClick={ this.handleClick } className={ classNames.join(' ') }>
				{ this.props.children || this.props.label }
			</button>
		);
	}
}

export default Button;
