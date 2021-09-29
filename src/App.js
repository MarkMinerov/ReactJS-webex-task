import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// routes
import NewPost from "./routes/NewPost";
import Posts from "./routes/Posts";
import Additional from "./routes/Additional";

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/newPost">New Post</Link>
						</li>
						<li>
							<Link to="/posts">Posts</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/newPost">
						<NewPost />
					</Route>
					<Route path="/more/:id">
						<Additional />
					</Route>
					<Route path="/">
						<Posts />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
