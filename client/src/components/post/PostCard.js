import React, { useEffect } from 'react';

export default function PostCard({ selected }) {
  // let postDisplay = posts.filter(post => post.id === selected);
  console.log(selected);
  if (selected.length > 0) {
    return (
      <div>
        <h1>{selected[0].title ? selected[0].title : 'Untitled'}</h1>
        <p>{selected[0].content}</p>
      </div>
    );
  } else {
    return <div></div>;
  }

  // return <div>{postCards}</div>;
}
