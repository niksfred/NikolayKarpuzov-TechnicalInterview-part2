import React from 'react';
import UserPost from './UserPost';

const UserPostsList = ({isActive, setIsActive, posts}) => {
  return (
  <div className="posts-container">
  <div className="posts-header" onClick={() => setIsActive(!isActive)}>
  <div>Posts</div>
  <div>{!isActive ? "+": "-"}</div>
  </div>
   {isActive && posts.map(post => <UserPost post={post}/>)}
   </div>
   )
  }
export default UserPostsList;
