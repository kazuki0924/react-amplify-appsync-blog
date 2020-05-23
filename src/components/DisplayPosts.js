import React, { Component } from 'react';
import { listPosts } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

class DisplayPosts extends Component {
	state = {
		posts: []
	};

	componentDidMount = async () => {
		this.getPosts();
	};

	getPosts = async () => {
		const result = await API.graphql(graphqlOperation(listPosts));

		this.setState({ posts: result.data.listPosts.items });
		// console.log('All Posts: ', JSON.stringify(result.data.listPosts.items));
		// console.log('All Posts: ', result.data.listPosts.items);
	};

	render() {
		return <di>Hello World</di>;
	}
}
export default DisplayPosts;
