import React, {PropTypes} from 'react';
import styles from './Login.less'

import {routerActions} from 'react-router-redux'
import {connect} from 'react-redux'
import * as loginActions from '../actions/loginActions';

import Button from '../components/Button/Button';
/**
 * @class Login
 * @module *
 */

class Login extends React.Component {

	login = () => {
		this.props.dispatch(loginActions.login());
		this.props.dispatch(routerActions.push('/'));
	};

	render () {
		return (
			<div className={styles.main}>
				<h1 className={ styles.title }>Buddy félagatal</h1>
				<div>
					{ /* TOTO: Login form */}
				</div>
				<Button onClick={ this.login } primary>Skrá inn</Button>
			</div>
		);
	}
}

export default connect()(Login);
