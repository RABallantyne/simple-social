import React, { useEffect } from 'react';
import CommentsDisplay from '../comments/CommentsDisplay';

export default function PostDisplay({ selected }) {
  console.log(selected);
  if (selected.post !== undefined) {
    return (
      <div>
        <h1>{selected.post.title ? selected.post.title : 'Untitled'}</h1>
        <h2>{selected.post.author ? selected.post.author : 'Anonnymous'}</h2>
        <div>likes: {selected.post.likes}</div>
        <p>{selected.post.content}</p>
        <CommentsDisplay comments={selected.comments} />
      </div>
    );
  } else {
    return <div></div>;
  }

  // return <div>{postCards}</div>;
}
