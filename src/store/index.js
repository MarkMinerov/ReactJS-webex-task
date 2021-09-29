import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postsReducer";

export const store = configureStore({
	reducer: {
		posts: postsReducer,
	},
});
