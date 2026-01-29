import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts, selectAllPosts } from "./PostsSlice";

const AddPosts = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const dispacth = useDispatch();

  const handleDispatch = () => {
    title.length < 1 && author.length < 1 && content.length < 1
      ? alert("enter valid post")
      : dispacth(addPosts({ title, author, content }));

    setTitle("");
    setAuthor("");
    setContent("");
  };
  return (
    <div className="flex justify-center items-start bg-gray-100 min-h-screen py-10 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add a New Post
        </h1>
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium text-gray-700">Post Title</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Enter post title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium text-gray-700">Author</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Enter author name"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="mb-1 font-medium text-gray-700">Content</label>
          <textarea
            className="border border-gray-300 rounded-md p-2 h-32 resize-y bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Write your post here..."
            onChange={(event) => setContent(event.target.value)}
            value={content}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors shadow w-full"
          onClick={handleDispatch}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddPosts;
