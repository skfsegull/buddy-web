import React, { PropTypes } from 'react';
import styles from './Input.less';
/**
 * @class Input
 * @module *
 */
class Input extends React.Component {

	static defaultProps = {
		onChange: () => {}
	};
	static propTypes = {
		inline: PropTypes.bool,
		big: PropTypes.bool,
		type: PropTypes.string,
		className: PropTypes.string
	};

	handleChange = (e) => {
		this.props.onChange(e.target.value);
	};

	render () {

		const { className, placeholder, big, inline, type} = this.props;

		let classNames = [styles.main, className];
		if(big) classNames.push(styles.big);
		if(inline) classNames.push(styles.inline);

		return (
			<input
				type={ type }
				onChange={ this.handleChange }
				placeholder={ placeholder }
				className={ classNames.join(' ') }/>
		);
	}
}

export default Input;
