import React from "react";

const Post = (props) => {
  return (
    <div className="post">

      <div className="post-score">
        <h3>{props.score}</h3>
        <p>points</p>
      </div>

      <div className="post-content">
        <h2 className="post-title">{props.title}</h2>
        <div className="post-info">
          <a className="post-info__item" href={`http://reddit.com${props.postLink}`} target="_blank">{props.commentCount} comments</a>
          <a className="post-info__item site" href={props.site} target="_blank">{props.site}</a>
          <p className="post-info__item">/u/{props.user}</p>
        </div>
      </div>

      <div className="post-sub">
        <h3 className="post-sub__text" href={`http://reddit.com/r/${props.subreddit}`} target="_blank">/r/{props.subreddit}</h3>
      </div>
    </div>
  );
};

export default Post;
