import React from "react";
import Post from "./Post";
import { userPosts } from "@constants";

const Posts = () => {
  return (
    <div className="posts">
      {userPosts.map((post, index) => (
        <Post data={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
