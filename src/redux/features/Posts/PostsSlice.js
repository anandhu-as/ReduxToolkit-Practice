import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "test1",
    author: "aanndhu",
    content: "xyz",
    reactions: { heart: 0, like: 0, laugh: 0 },
  },
  {
    id: 2,
    title: "test2",
    author: "daniya",
    content: "abc",
    reactions: { heart: 0, like: 0, laugh: 0 },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      const newID = state.length > 0 ? state[state.length - 1].id + 1 : 1;

      state.push({
        id: newID,
        title: action.payload.title,
        author: action.payload.author,
        content: action.payload.content,
        reactions: { heart: 0, like: 0, laugh: 0 },
      });
    },

    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id);
    },

    addReactions: (state, action) => {
      const { id, reaction } = action.payload;

      const post = state.find((post) => post.id === id);
      if (post && post.reactions[reaction] !== undefined) {
        post.reactions[reaction]++;
      }
    },
  },
});

export const { addPosts, deletePost, addReactions } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;
