import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
// import { Button } from 'aws-amplify-react';

export default class EditPost extends Component {
	state = {
		show: false,
		id: '',
		postOwnerId: '',
		postOwnerUsername: '',
		postTitle: '',
		postBody: ''
	};

	handleModal = () => {
		this.setState({ show: !this.state.show });
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	componentWillMount = async () => {
		await Auth.currentUserInfo().then((user) => {
			this.setState({
				postOwnerId: user.attributes.sub,
				postOwnerUsername: user.username
			});
		});
	};

	render() {
		return <button onClick={this.handleModal}>Edit</button>;
	}
}
