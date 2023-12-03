import React from "react";
import { Card } from "antd";

function UserCard({ user }) {
  return (
    <Card
      hoverable
      title={`${user.first_name} ${user.last_name}`}
      style={{ marginBottom: 16 }}
    >
      <img
        className="card-img"
        src={user.avatar}
        alt={`${user.first_name} Avatar`}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <p>
        <span style={{ fontWeight: "bold" }}>Email:</span> {user.email}
      </p>
      <div className="card-gen">
        <p>
          <span style={{ fontWeight: "bold" }}>Gender:</span> {user.gender}
        </p>
        <p style={user.available ? { color: "green" } : { color: "red" }}>
          <span style={{ fontWeight: "bold" }}>Available:</span>{" "}
          {user.available ? "Yes" : "No"}
        </p>
      </div>
      <p>
        <span style={{ fontWeight: "bold" }}>Domain:</span> {user.domain}
      </p>
    </Card>
  );
}

export default UserCard;
