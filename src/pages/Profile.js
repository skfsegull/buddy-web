import React, {PropTypes} from 'react';
import styles from './Profile.less';

import Box from '../components/Box/Box';
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
				<div className={ styles.grid }><Box title="Opnir viðburðir" size="half">
					Hérna kemur eitthvað stuff
				</Box>
					<Box title="Þín skráning" size="half">
						Hérna kemur eitthvað stuff
					</Box>
				</div>
				<div  className={ styles.grid }>
					<Box title="Annað stöff" size="third">
					</Box>
					<Box title="Annað stöff" size="third">
					</Box>
					<Box title="Þín skráning" size="third">
						Hérna kemur eitthvað stuff
					</Box>
				</div>
			</div>
		);
	}
}

export default Profile;
