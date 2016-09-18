import React, {PropTypes} from 'react';
import styles from './NavigationItem.less'
/**
 * @class NavigationItem
 * @module *
 */
class NavigationItem extends React.Component {

	//static defaultProps = {};
	//static propTypes = {};
	//state = {};

	//componentWillMount () {}
	//componentDidMount () {}
	//componentWillUnmount () {}
	//shouldComponentMount () { return true; }

	render () {
		return (
			<li className={ styles.main }>
				{
					this.props.children
				}
			</li>
		);
	}
}

export default NavigationItem;
