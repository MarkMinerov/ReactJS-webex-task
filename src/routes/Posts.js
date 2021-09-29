import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Posts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sortMethod: null,
		};

		this.selectSortMethod = this.selectSortMethod.bind(this);
	}

	selectSortMethod(event) {
		this.setState({ sortMethod: event.target.value });
	}

	render() {
		let posts = [...this.props.posts];

		if (this.state.sortMethod) {
			if (this.state.sortMethod === "to-new") {
				posts = posts.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
			} else {
				posts = posts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
			}
		}

		console.log(posts);

		let postsContent = posts.map((el) => (
			<div key={el.id}>
				<Link to={`more/${el.id}`}>
					<h2>{el.name}</h2>
				</Link>
				<p>Address: {el.address}</p>
				<img src={el.image} alt="" style={{ height: "200px" }} />
			</div>
		));

		return (
			<div>
				<select defaultValue="default" onChange={this.selectSortMethod}>
					<option value="default" disabled>
						Select sort method
					</option>
					<option value="to-new">From old to new</option>
					<option value="to-old">From new to old</option>
				</select>
				<div>{postsContent}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
});

export default connect(mapStateToProps, null)(Posts);
