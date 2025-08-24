import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RedditTopicPage.css';

export default function RedditTopicPage() {
  const { subreddit, postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`)
      .then(res => res.json())
      .then(data => {
        const postData = data[0]?.data?.children[0]?.data;
        const commentData = data[1]?.data?.children || [];
        setPost(postData);
        setComments(commentData);
      })
      .catch(err => console.error("Reddit Post Fetch Error ❌", err));
  }, [subreddit, postId]);

  if (!post) return <div className="reddit-topic">Loading...</div>;

  return (
    <div className="reddit-topic">
      <h2>{post.title}</h2>
      <p className="author">Posted by u/{post.author}</p>
      <p>{post.selftext || 'No post content available.'}</p>

      <div className="meta">
        <span>👍 {post.ups}</span>
        <span>💬 {post.num_comments} comments</span>
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((c, i) => (
          c.kind === "t1" && (
            <div key={i} className="comment">
              <strong>u/{c.data.author}</strong>
              <p>{c.data.body}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
