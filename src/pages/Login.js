import React, {PropTypes} from 'react';
import styles from './Login.less'

import {routerActions} from 'react-router-redux'
import {connect} from 'react-redux'
import * as loginActions from '../actions/loginActions';

import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
/**
 * @class Login
 * @module *
 */

class Login extends React.Component {

	state = {
		valid: false,
		showPassword: false
	}

	login = () => {
		this.props.dispatch(loginActions.login());
		this.props.dispatch(routerActions.push('/'));
	};

	nextStep = () => {
		if ( this.state.showPassword )
			this.login();
		// else
		// 	this.setState({
		// 		showPassword: !this.state.showPassword
		// 	})
	};

	handleSSNChange = ( value ) => {
		this.setState({
			valid: value.length == 10,
			showPassword: value.length == 10
		})
	};

	render () {
		const { showPassword } = this.state;

		return (
			<div className={styles.main}>
				{/*<h1 className={ styles.title }>Buddy félagatal</h1>*/}
				<Input onChange={ this.handleSSNChange } placeholder="Kennitala" inline big />
				<div className={ showPassword ? styles.showPassword : styles.hidePassword}>
					<Input
						placeholder="Lykilorð"
						type="password"
						inline
						big />
				</div>
				<Button
					onClick={ this.nextStep }
					disabled={ !this.state.valid }
					primary>
					{ showPassword ? 'Skrá inn' : 'Áfram'}
				</Button>
			</div>
		);
	}
}

export default connect()(Login);
