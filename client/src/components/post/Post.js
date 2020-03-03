import React, { useState } from 'react';
import PostCard from './PostCard';

export default function Post() {
  const [posts, setPosts] = useState({
    posts: []
  });

  const showPosts = () => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/posts', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  };
  console.log(posts);
  return (
    <div>
      <button onClick={() => showPosts()}>load Posts</button>
      <PostCard posts={posts} />
    </div>
  );
}
