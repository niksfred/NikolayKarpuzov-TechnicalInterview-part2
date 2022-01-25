import React, {useState, useEffect} from 'react';
import User from './User';


const UsersList = () => {
const [users,setUsers] = useState([]);

useEffect(() => {
   const fetchUsers = async () => {
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
       const data = await response.json()
       setUsers(data)
   }
fetchUsers()
},
 []);

  return (
  <div>
      {users?.map(user => <User data={user} key={user.id}/>)}
  </div>
  );
};

export default UsersList;
