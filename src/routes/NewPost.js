import React from "react";
import { connect } from "react-redux";
import { createPost } from "../store/postsReducer";

class CreatePost extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			address: "",
			image: null,
		};

		this.inputValue = this.inputValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
	}

	inputValue(value, field) {
		this.setState((state) => ({
			...state,
			[field]: value,
		}));
	}

	submitForm(event) {
		event.preventDefault();

		const state = this.state;

		if (state.name.length && state.description.length && state.address.length && state.image != null) {
			this.props.createPost({
				...this.state,
				id: Date.now(),
				publishDate: new Date().toString(),
			});

			this.setState({});
			alert("Post was created! Now you can open all posts and find yours one :)");
		}
	}

	uploadImage(event) {
		if (!event.target.files.length) return;

		const blob = URL.createObjectURL(event.target.files[0]);

		this.setState((state) => ({
			...state,
			image: blob,
		}));
	}

	render() {
		return (
			<div>
				<h1>Create new Post</h1>
				<form onSubmit={this.submitForm}>
					<input type="text" onInput={(event) => this.inputValue(event.target.value, "name")} placeholder="Name" required />
					<br />
					<br />
					<input type="text" onInput={(event) => this.inputValue(event.target.value, "address")} placeholder="Address" required />
					<br />
					<br />
					<input type="text" onInput={(event) => this.inputValue(event.target.value, "description")} placeholder="Description" required />
					<br />
					<br />
					<input type="file" onChange={this.uploadImage} placeholder="Description" required accept="image/png, image/jpeg" />
					<br />
					<br />
					<input type="submit" value="Send" />
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createPost: (post) => dispatch(createPost(post)),
	};
};

export default connect(null, mapDispatchToProps)(CreatePost);
