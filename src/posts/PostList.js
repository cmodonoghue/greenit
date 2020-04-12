import React from "react";
import Post from "./Post";

const PostList = (props) => {
  let msg = "";

  if (props.empty === true) {
    msg = "There were no posts today.";
  }

  return (
    <div className="posts-section">
      <p className="posts-empty">{msg}</p>
      <div className="post-list">
        {props.posts.map((post) => (
          <Post
            key={post.id}
            score={post.score}
            title={post.title}
            commentCount={post.commentCount}
            postLink={post.postLink}
            site={post.url}
            user={post.author}
            subreddit={post.subreddit}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
