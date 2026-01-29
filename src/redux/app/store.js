import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/Posts/PostsSlice"
export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
});
