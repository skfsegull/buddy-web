import { handleActions } from 'redux-actions';

const initialState = {
	loggedIn: false
};

export default handleActions({
	'LOGIN': (state, action) => {
		return {
			loggedIn: true
		}
	}
}, initialState);
