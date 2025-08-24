import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerRedditFeed.css';

export default function CareerRedditFeed() {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState("cscareerquestions");
  const navigate = useNavigate();

  const subredditOptions = [
    "cscareerquestions",
    "learnprogramming",
    "AskEngineers",
    "careerguidance",
    "careerchange",
    "engineeringstudents",
    "careeradvice"
  ];

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=10`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.data.children.map(item => ({
          id: item.data.id,
          title: item.data.title,
          author: item.data.author,
          body: item.data.selftext,
          ups: item.data.ups,
          num_comments: item.data.num_comments,
          created_utc: item.data.created_utc,
          permalink: item.data.permalink
        }));
        setPosts(formatted);
      })
      .catch(err => console.error("Reddit Fetch Error ❌", err));
  }, [subreddit]);

  return (
    <div className="reddit-feed">
      <div className="reddit-header-row">
        <h2>🔥 Top Discussions</h2>
        <div className="subreddit-selector">
          <label htmlFor="subreddit">Subreddit:</label>
          <select
            id="subreddit"
            value={subreddit}
            onChange={(e) => setSubreddit(e.target.value)}
          >
            {subredditOptions.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="reddit-posts-container">
        {posts.map(post => (
          <div
            key={post.id}
            className="reddit-card"
            onClick={() =>
              navigate(`/post/${post.id}`, { state: { post } })
            }
          >
            <div className="reddit-header">
              <strong>u/{post.author}</strong>
              <span className="timestamp">
                {new Date(post.created_utc * 1000).toLocaleString()}
              </span>
            </div>

            <h3>{post.title}</h3>
            <p>{post.body?.slice(0, 200)}{post.body.length > 200 ? '...' : ''}</p>

            <div className="reddit-meta">
              <span>👍 {post.ups}</span>
              <span>💬 {post.num_comments} Comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
