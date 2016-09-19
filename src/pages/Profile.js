import React from 'react';
import styles from './Profile.less';

import Box from '../components/Box/Box';
import EventList from '../components/EventList/EventList';
/**
 * @class Profile
 * @module *
 */
class Profile extends React.Component {

	//static defaultProps = {};
	//static propTypes = {};
	//state = {};

	//componentWillMount () {}
	//componentDidMount () {}
	//componentWillUnmount () {}
	//shouldComponentMount () { return true; }

	render () {
		return (
			<div className={ styles.main }>
				<div className={ styles.grid }>
					<Box title="Titill" size="third">
						Hérna kemur eitthvað stuff
					</Box>
				</div>
				<div className={ styles.grid }>
					<Box title="Opnir viðburðir">
						<EventList />
					</Box>
					<Box title="Lokaðir viðburðir">
						<ul>
							<li>Félagsútilega - Skrá - Fela</li>
							<li>Jota joti - Skrá - Fela</li>
						</ul>
					</Box>
				</div>
				<div className={ styles.grid }>
					<Box title="Þínir hópar">
					</Box>
				</div>
			</div>
		);
	}
}

export default Profile;
