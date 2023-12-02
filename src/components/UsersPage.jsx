
import React from 'react';
import UserList from './UserList';
import { useGetUsersQuery } from '../redux/api/usersApi';


function UsersPage() {
  const { data: users, isLoading } = useGetUsersQuery();
  

  console.log(users,'ddd')

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Users Page</h2>
      <UserList users={users} />
    </div>
  );
}

export default UsersPage;
