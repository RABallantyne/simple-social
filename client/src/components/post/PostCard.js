import React from 'react';

export default function PostCard({ posts }) {
  const postCards =
    posts.length > 0 &&
    posts.map(post => {
      return (
        <div>
          <p>{post.content}</p>
        </div>
      );
    });

  return <div>{postCards}</div>;
}
