import React, { useState } from "react";
import "./App.scss";

import Header from "./header/Header";
import About from "./about/About";
import Categories from "./categories/Categories";
import PostList from "./posts/PostList";

var snoowrap = require("snoowrap");

const App = () => {
  const [active, setActive] = useState("");
  const [posts, setPosts] = useState([]);
  const [isEmpty, setEmpty] = useState(false);

  const selectCategory = (category) => {
    setPosts([]);
    setActive(category);
    fetchPosts(category);
  };

  const fetchPosts = (subreddit) => {
    console.log("fetching posts for /r/" + subreddit);
    let postList = [];
    r.getSubreddit(subreddit)
      .getTop({ time: "day" })
      .then((listing) => {
        listing.length === 0 ? setEmpty(true): setEmpty(false);
        listing.slice(0, 10).map((submission) => {
          let post = {};
          post.title = submission.title;
          post.author = submission.author.name;
          post.url = submission.url;
          post.postLink = submission.permalink;
          post.score = submission.score;
          post.commentCount = submission.num_comments;
          post.subreddit = subreddit;
          postList.push(post);
        });
        setPosts(postList);
      });
  };

  return (
    <div>
      <Header />
      <About />
      <Categories onSelect={selectCategory} active={active} />
      <PostList posts={posts} empty={isEmpty} />
    </div>
  );
};

const USER_AGENT = `${process.env.REACT_APP_USER_AGENT}`;
const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.REACT_APP_CLIENT_SECRET}`;
const REFRESH_TOKEN = `${process.env.REACT_APP_REFRESH_TOKEN}`;

console.log(USER_AGENT);

const r = new snoowrap({
  userAgent: USER_AGENT,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  refreshToken: REFRESH_TOKEN
});

export default App;
