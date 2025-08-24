import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './PostDetail.css';

export default function PostDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { post } = location.state || {};
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!post) return;

    fetch(`https://www.reddit.com${post.permalink}.json`)
      .then(res => res.json())
      .then(data => {
        const commentData = data[1]?.data?.children
          .filter(c => c.kind === 't1')
          .map(c => ({
            author: c.data.author,
            body: c.data.body,
            ups: c.data.ups,
            created_utc: c.data.created_utc,
          })) || [];
        setComments(commentData);
      })
      .catch(err => console.error("Error fetching comments ❌", err));
  }, [post]);

  if (!post) return <p className="error-message">⚠️ Post not found.</p>;

  return (
    <div className="post-detail-container">
      <div className="post-content">
        <h2>{post.title}</h2>
        <p className="post-body">{post.body || "No content available."}</p>

        <div className="post-meta">
          <span>👤 u/{post.author}</span>
          <span>👍 {post.ups}</span>
          <span>💬 {post.num_comments} comments</span>
          <span>🕒 {new Date(post.created_utc * 1000).toLocaleString()}</span>
        </div>

        <a
          href={`https://reddit.com${post.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
        View on Reddit if you want!
        </a>
      </div>

      <div className="comments-section">
        <h3>💬 Top Comments</h3>
        {comments.length === 0 ? (
          <p>No comments found.</p>
        ) : (
          comments.map((c, idx) => (
            <div className="comment-card" key={idx}>
              <strong>u/{c.author}</strong>
              <span className="comment-time">
                {new Date(c.created_utc * 1000).toLocaleString()}
              </span>
              <p>{c.body}</p>
              <span className="comment-ups">👍 {c.ups}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
