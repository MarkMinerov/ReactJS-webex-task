import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const formatString = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" };
const dateFormatter = new Intl.DateTimeFormat("en-US", formatString);

class Additional extends React.Component {
	constructor(props) {
		super(props);

		const id = parseInt(this.props.match.params.id);
		const post = this.props.posts.filter((el) => el.id === id)[0];

		this.state = { post };
	}

	render() {
		if (this.state == null || !this.state.post) {
			return <h2>No post was found with this id!</h2>;
		} else {
			const date = dateFormatter.format(new Date(this.state.post.publishDate));

			return (
				<div>
					<h2>{this.state.post.name}</h2>
					<p>Address: {this.state.post.address}</p>
					<p>Description: {this.state.post.description}</p>
					<p>Date of publish: {date}</p>
					<img src={this.state.post.image} alt="" style={{ height: "200px" }} />
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
});

export default connect(mapStateToProps, null)(withRouter(Additional));
