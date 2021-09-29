import { createSlice } from "@reduxjs/toolkit";

const postsReducer = createSlice({
	name: "posts",
	initialState: {
		posts: [],
	},
	reducers: {
		createPost(state, action) {
			state.posts = [...state.posts, action.payload];
		},
	},
});

export const { createPost } = postsReducer.actions;

export default postsReducer.reducer;
