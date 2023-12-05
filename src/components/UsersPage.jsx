import React, { useState } from "react";
import { useCreateTeamMutation, useGetTeamsQuery, useGetUsersQuery } from "../redux/api/usersApi";
import { useSelector } from "react-redux";
import UserList from "./UserList";
import { Button, Spin } from "antd";
import TeamCreate from "./TeamCreate";
import { PlusOutlined } from "@ant-design/icons";
import TeamList from "./TeamList";
function UsersPage() {
  const [isTeamModalVisible, setTeamModalVisible] = useState(false);
  const { pagination } = useSelector((state) => state.users);
  const { data: team } = useGetTeamsQuery();
  const [createTeam] = useCreateTeamMutation()
  const { data: users, isLoading } = useGetUsersQuery({ pagination });
  
  const handleOpenTeamModal = () => {
    setTeamModalVisible(true);
  };

  const handleCloseTeamModal = () => {
    setTeamModalVisible(false);
  };

  const handleCreateTeam = async (members) => {
    try {
      const res = await createTeam(members ).unwrap();
      if (res._id) {
        message.success(" Create team in successfully");
      }
    } catch (err) {
      message.error(err.message);
    }
  };

  if (isLoading) {
    return (
      <div className="spain">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        All Users
      </h1>
      <div style={{ margin: "30px 0" }}>
        <UserList users={users} handleOpenTeamModal={handleOpenTeamModal} />
      </div>

      {/* All Teams */}
      <div
        style={{
          margin: "20px 50px",
          display: "flex",
          flexWrap:"wrap",
          justifyContent: "space-between",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          All Teams
        </h1>
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <Button
            size="large"
            icon={<PlusOutlined />}
            type="primary"
            onClick={handleOpenTeamModal}
          >
            Create Team
          </Button>
        </div>
      </div>
      <TeamCreate
        visible={isTeamModalVisible}
        onCancel={handleCloseTeamModal}
        onCreate={handleCreateTeam}
        availableUsers={users.data}
      />
      {team?.data && <TeamList team={team?.data} />}
    </div>
  );
}

export default UsersPage;
