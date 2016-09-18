import React, {PropTypes} from 'react';
import styles from './NavigationItem.less'

import Icon from '../Icon/Icon';
/**
 * @class NavigationItem
 * @module *
 */
class NavigationItem extends React.Component {

	//static defaultProps = {};
	static propTypes = {
		selected: PropTypes.bool,
		icon: PropTypes.string
	};
	//state = {};

	//componentWillMount () {}
	//componentDidMount () {}
	//componentWillUnmount () {}
	//shouldComponentMount () { return true; }

	render () {

		let className = styles.main;

		if ( this.props.selected ) className = styles.selected;

		return (
			<li className={ className }>
				<If condition={ !!this.props.icon}>
					<Icon name={ this.props.icon } size="lg" className={ styles.icon }/>
				</If>
				<span className={ styles.text }>{ this.props.children }</span>
			</li>
		);
	}
}

export default NavigationItem;
