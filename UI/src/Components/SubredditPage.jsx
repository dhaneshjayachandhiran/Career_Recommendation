import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SubredditPage.css';

export default function SubredditPage() {
  const { name } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${name}/hot.json?limit=15`)
      .then(res => res.json())
      .then(data => {
        const parsed = data.data.children.map(item => ({
          id: item.data.id,
          title: item.data.title,
          author: item.data.author,
          ups: item.data.ups,
          comments: item.data.num_comments,
          created: item.data.created_utc,
          url: `https://reddit.com${item.data.permalink}`,
          body: item.data.selftext,
        }));
        setPosts(parsed);
      });
  }, [name]);

  return (
    <div className="subreddit-page">
      <h2>r/{name}</h2>
      {posts.map(post => (
        <div key={post.id} className="subreddit-post-card">
          <h3>{post.title}</h3>
          <p>{post.body?.slice(0, 200)}{post.body.length > 200 ? "..." : ""}</p>
          <div className="meta">
            <span>👤 u/{post.author}</span>
            <span>👍 {post.ups}</span>
            <span>💬 {post.comments}</span>
            <span>🕒 {new Date(post.created * 1000).toLocaleString()}</span>
          </div>
          <a href={post.url} target="_blank" rel="noopener noreferrer">🔗 View on Reddit</a>
        </div>
      ))}
    </div>
  );
}
