import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
// import { Button } from 'aws-amplify-react';
import { deletePost } from '../graphql/mutations';

export default class DeletePost extends Component {
	phandleDeletePost = async (postId) => {
		const input = {
			id: postId
		};

		await API.graphql(graphqlOperation(deletePost, { input }));
	};
	render() {
		const post = this.props.data;
		return (
			<button onClick={() => this.handleDeletePost(post.id)}>Delete</button>
		);
	}
}
