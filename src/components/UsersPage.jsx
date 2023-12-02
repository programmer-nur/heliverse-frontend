
import React from 'react';
import { useGetUsersQuery } from '../redux/api/usersApi';

function UsersPage() {
  const { data: users, isLoading } = useGetUsersQuery({pagination});

console.log(users)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Users Page</h2>
    </div>
  );
}

export default UsersPage;
