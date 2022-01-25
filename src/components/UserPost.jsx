import React from 'react';

const UserPost = ({post}) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <span>{post.body}</span>
    </div>);
};

export default UserPost;
