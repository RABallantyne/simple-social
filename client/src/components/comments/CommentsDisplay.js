import React from 'react';

export default function CommentsDisplay({ comments }) {
  const showComments = comments.map(comment => {
    return (
      <div key={comment.id}>
        <p>{comment.content}</p>
        <div>likes: {comment.likes}</div>
      </div>
    );
  });
  return <div>comments: {showComments}</div>;
}
