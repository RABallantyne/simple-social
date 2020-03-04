import React, { useState, useEffect } from 'react';
import PostDisplay from './PostDisplay';

export default function PostMain({ user }) {
  const [posts, setPosts] = useState({
    posts: [],
    selection: null,
    selectedPost: {}
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
        setPosts({ posts: data, selection: null, selectedPost: {} });
      });
  };

  const showSinglePost = selection => {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:3000/posts/${selection}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setPosts({ ...posts, selection: null, selectedPost: data });
      });
  };

  useEffect(() => {
    showPosts();
  }, []);

  const choosePost = id => {
    showSinglePost(id);
  };

  const postTitles =
    posts.posts.length > 0 &&
    posts.posts.map(post => {
      return (
        <div onClick={() => choosePost(post.id)} key={post.id}>
          <h1>{post.title ? post.title : 'Untitled'}</h1>
        </div>
      );
    });

  return (
    <div>
      {postTitles}
      <PostDisplay selected={posts.selectedPost} />
    </div>
  );
}
