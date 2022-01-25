import React, {useState} from 'react';
import UserPostsList from './UserPostsList';

const User = ({data}) => {
    
    const [userInfo, setUserInfo] = useState({
        id: data.id,
        name : data.name,
        username : data.username,
        email : data.email,
        street: data.address.street,
        suite: data.address.suite,
        city: data.address.city,
        phone: data.phone,
        website: data.website
    });
    const [userPosts, setUserPosts] = useState(null);
    const [isPostsExtended, setIsPostsExtended] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleGetPosts = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userInfo.id}`);
        const data = await response.json();
        setUserPosts(data);
    }

    
  return (
      <div className='container'>
          <div className="user-header" onClick={() => setIsExpanded(!isExpanded)}>
              <h3>User: {userInfo.id}</h3>
              <h3>{isExpanded ? "-" : "+"}</h3>
          </div> 
    {isExpanded && <>
        <form className="formEl">
      <div className='row'>
      <label>Name</label>
      <input 
      type="text" 
      required 
      value={userInfo.name} 
      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}/>
      </div>
    <div className='row'>
    <label>Username</label>
      <input 
      type="text" 
      required 
      value={userInfo.username} 
      onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}/>
    </div>
    <div className='row'>
    <label>Email</label>
      <input 
      type="text" 
      required 
      value={userInfo.email} 
      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}/>
    </div>
    <div className='row'>
    <label>Street</label>
      <input 
      type="text" 
      required 
      value={userInfo.street} 
      onChange={(e) => setUserInfo({...userInfo, street: e.target.value})}/>
    </div>
    <div className='row'>
    <label>Suite</label>
      <input 
      type="text" 
      required 
      value={userInfo.suite} 
      onChange={(e) => setUserInfo({...userInfo, suite: e.target.value})}/>
    </div>
    <div className='row'>
    <label>City</label>
      <input 
      type="text" 
      required 
      value={userInfo.city} 
      onChange={(e) => setUserInfo({...userInfo, city: e.target.value})}/>
    </div>
    <div className='row'>
    <label>Phone</label>
      <input 
      type="text" 
      required 
      value={userInfo.phone} 
      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}/>
    </div>
    <div className='row'>
    <label>Website</label>
      <input 
      type="text" 
      required 
      value={userInfo.website} 
      onChange={(e) => setUserInfo({...userInfo, website: e.target.value})}/>
    </div>
    </form>
    <button type="button" onClick={handleGetPosts}>Get user's posts</button>
    {userPosts !== null && <UserPostsList isActive={isPostsExtended} setIsActive={setIsPostsExtended} posts={userPosts} />}
    </>}
    </div> 
  );
};

export default User;
