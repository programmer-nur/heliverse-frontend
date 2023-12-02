import { Card } from "antd";

function UserCard({ user }) {
  return (
    <Card
      title={`${user.first_name} ${user.last_name}`}
      style={{ width: 300, marginBottom: 16 }}
    >
      <img
        src={user.avatar}
        alt={`${user.first_name} Avatar`}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <p>Email: {user.email}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Gender: {user.gender}</p>
        <p>Available: {user.available ? "Yes" : "No"}</p>
      </div>
      <p>Domain: {user.domain}</p>
    </Card>
  );
}

export default UserCard;
