import React, { PropTypes } from 'react';
import styles from './Navigation.less';

/**
 * @class Navigation
 * @module *
 */
class Navigation extends React.Component {

	//static defaultProps = {};
	//static propTypes = {};
	//state = {};

	//componentWillMount () {}
	//componentDidMount () {}
	//componentWillUnmount () {}
	//shouldComponentMount () { return true; }

	render () {
		return (
			<ul className={ [styles.main, this.props.className].join(' ')}>
				{
					this.props.children
				}
			</ul>
		);
	}
}

export default Navigation;
