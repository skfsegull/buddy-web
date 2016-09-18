import React, {PropTypes} from 'react';
import Navigation from '../components/Navigation/Navigation';
import NavigationItem from '../components/Navigation/NavigationItem';
import styles from './Main.less';

/**
 * @class Main
 * @module *
 */
class Main extends React.Component {
	render () {
		return (
			<div className={ styles.main }>
				<Navigation className={ styles.navigation }>
					<NavigationItem>
						Yfirlit
					</NavigationItem>
					<NavigationItem>
						Viðburðir
					</NavigationItem>
					<NavigationItem>
						Mín skráning
					</NavigationItem>
					<NavigationItem>
						Iðkendur
					</NavigationItem>
					<NavigationItem>
						Útskráning
					</NavigationItem>
				</Navigation>
				<div className={ styles.content }>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Main;
