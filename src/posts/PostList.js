import React from "react";
import Post from "./Post";

const PostList = (props) => {
  return (
    <div className={props.posts.length === 0 || props.empty === true ? "posts-section posts-section--empty" : "posts-section"}>
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
