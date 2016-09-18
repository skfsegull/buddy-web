import React, {PropTypes} from 'react';
import styles from './Icon.less';
//import '../../../icons/style.less';
/**
 * @class Icon
 * @module *
 */
class Icon extends React.Component {

	//static defaultProps = {};
	static propTypes = {
		name: PropTypes.string,
		size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
		className: PropTypes.string
	};
	//state = {};

	//componentWillMount () {}
	//componentDidMount () {}
	//componentWillUnmount () {}
	//shouldComponentMount () { return true; }

	render () {
		const { name, size, className} = this.props;

		return (
			<i className={ ['icon', 'icon-' + name, styles[size], className].join(' ') } />
		);
	}
}

export default Icon;
