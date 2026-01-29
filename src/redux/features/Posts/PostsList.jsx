import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReactions, deletePost, selectAllPosts } from "./PostsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();


  const handleReactions = (id, reaction) => {
    dispatch(addReactions({ id, reaction }));
  };

  const renderedPosts = posts.map((post) => {
    return (
      <article
        key={post.id}
        className="bg-white shadow-md rounded-md p-4 mb-4 w-full max-w-xl"
      >
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-700">{post.author}</p>
        <p className="text-gray-700 mb-2">{post.content}</p>

        <button
          className="bg-red-400 text-white font-semibold py-2 rounded-md hover:bg-red-500 transition-colors shadow cursor-pointer m-2 w-[120px]"
          onClick={() => dispatch(deletePost({ id: post.id }))}
        >
          delete post
        </button>

        <div className="flex justify-center gap-6 text-2xl mt-3">
          <span
            className="cursor-pointer"
            onClick={() => handleReactions(post.id, "heart")}
          >
            ❤️ {post.reactions.heart}
          </span>

          <span
            className="cursor-pointer"
            onClick={() => handleReactions(post.id, "like")}
          >
            👍 {post.reactions.like}
          </span>

          <span
            className="cursor-pointer"
            onClick={() => handleReactions(post.id, "laugh")}
          >
            😂 {post.reactions.laugh}
          </span>
        </div>
      </article>
    );
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <section className="flex flex-col items-center w-full max-w-2xl">
        {renderedPosts}
      </section>
    </div>
  );
};

export default PostsList;
