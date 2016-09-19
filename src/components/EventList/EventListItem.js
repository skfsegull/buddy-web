'use strict';

import React, {PropTypes} from 'react';
import styles from './EventListItem.less';

import Button from '../Button/Button';
/**
 * @class EventListItem
 * @module *
 */
class EventListItem extends React.Component {

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
				<div className={ styles.info }>
					<h3>Félagsútilega</h3>
					<div>Eftir 10 daga (12.10.2017)</div>
					<div>Umsjón: Segull, Baldur</div>
					<div>Kostnaður: 9.000kr</div>
				</div>
				<div className={ styles.actions }>
					<Button size="sm" className={ styles.buttonRegister } primary inline>Skrá mig</Button>
					<Button size="sm"  className={ styles.button }invert inline>Fela</Button>
				</div>
			</li>
		);
	}
}

export default EventListItem;
