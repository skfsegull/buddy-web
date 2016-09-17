import React, { PropTypes } from 'react';

/**
 * @class Main
 * @module *
 */
class Main extends React.Component {

	//static defaultProps = {};
	//static propTypes = {};
	//state = {};

	//componentWillMount () {}
	//componentDidMount () {}
	//componentWillUnmount () {}
	//shouldComponentMount () { return true; }

	render () {
		return (
			<div className="main">{
				this.props.children
			}</div>
		);
	}
}

export default Main;
