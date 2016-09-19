'use strict';

import React, {PropTypes} from 'react';
import EventListItem from './EventListItem'

/**
 * @class EventList
 * @module *
 */
class EventList extends React.Component {

	//static defaultProps = {};
	//static propTypes = {};
	//state = {};

	//componentWillMount () {}
	//componentDidMount () {}
	//componentWillUnmount () {}
	//shouldComponentMount () { return true; }

	render () {
		return (
			<ul>
				<EventListItem />
				<EventListItem />
				<EventListItem />
			</ul>
		);
	}
}

export default EventList;
