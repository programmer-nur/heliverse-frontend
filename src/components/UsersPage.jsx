import React, { useState } from "react";
import { useGetUsersQuery } from "../redux/api/usersApi";
import { useSelector } from "react-redux";
import UserList from "./UserList";
import { Spin } from "antd";

function UsersPage() {
  const { pagination } = useSelector((state) => state.users);
  const { data: users, isLoading } = useGetUsersQuery({ pagination });

  if (isLoading) {
    return <div className="spain"><Spin size="large" /></div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold",fontFamily:"sans-serif" }}>All Users</h1>
      <div style={{ margin: "30px 0" }}>
        <UserList users={users} />
      </div>
    </div>
  );
}

export default UsersPage;
