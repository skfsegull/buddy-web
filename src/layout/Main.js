import React from 'react';
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
					<div className={ styles.navigationHead }>
						<div className={ styles.navigationIcon }>
							Buddy
						</div>
					</div>
					<NavigationItem icon="rocket" >
						Yfirlit
					</NavigationItem>
					<NavigationItem icon="calendar" selected>
						Viðburðir
					</NavigationItem>
					<NavigationItem icon="user">
						Mín skráning
					</NavigationItem>
					<NavigationItem icon="users">
						Iðkendur
					</NavigationItem>
					<NavigationItem icon="logout">
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
