import React, { useState } from 'react';
import UserList from './UserList';
import { useGetUsersQuery } from '../redux/api/usersApi';
import { useSelector } from 'react-redux';

function UsersPage() {
    const {pagination} = useSelector(state=>state.users)
  const { data: users, isLoading } = useGetUsersQuery({pagination});

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
