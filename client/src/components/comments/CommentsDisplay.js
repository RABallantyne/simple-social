import React from 'react';

export default function CommentsDisplay({ comments }) {
  const showComments = comments.map(comment => {
    return (
      <>
        <p>{comment.content}</p>
        <div>likes: {comment.likes}</div>
      </>
    );
  });
  return <div>comments: {showComments}</div>;
}
