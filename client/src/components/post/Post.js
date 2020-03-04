import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

export default function Post() {
  const [posts, setPosts] = useState({
    posts: [],
    selected: null
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
        setPosts({ posts: data, selected: null });
      });
  };

  useEffect(() => {
    showPosts();
  }, []);

  const choosePost = id => {
    setPosts({
      ...posts,
      selected: id
    });
  };
  // console.log(posts);

  const postTitles =
    posts.posts.length > 0 &&
    posts.posts.map(post => {
      return (
        <div onClick={() => choosePost(post.id)} key={post.id}>
          <h1>{post.title ? post.title : 'Untitled'}</h1>
          {/* <p>{post.content}</p> */}
        </div>
      );
    });

  let postDisplay = posts.posts.filter(post => post.id === posts.selected);

  return (
    <div>
      {postTitles}
      <PostCard posts={posts.posts} selected={postDisplay} />
    </div>
  );
}
