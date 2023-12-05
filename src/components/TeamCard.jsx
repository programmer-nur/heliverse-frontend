import { Avatar, Card, List, Modal } from "antd";
import { useState } from "react";
import { useGetSingleTeamQuery } from "../redux/api/usersApi";

const TeamCard = ({ team }) => {
    const {data:singleTeam} = useGetSingleTeamQuery(team._id)
  const [open, setOpen] = useState(false);
  return (
    <div>
      {" "}
      <Card onClick={() => setOpen(true)} style={{ height: "250px", overflow: "hidden" }} hoverable>
        <List
          dataSource={team.users}
          renderItem={(user) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.avatar} />}
                title={`${user.first_name} ${user.last_name}`}
                description={`Available: ${user.available ? "Yes" : "No"}`}
              />
            </List.Item>
          )}
        />
      </Card>
      <Modal
        title="Team Details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
       <Card>
        <List
          dataSource={singleTeam?.data?.users}
          renderItem={(user) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.avatar} />}
                title={`${user.first_name} ${user.last_name}`}
                description={`Email: ${user.email}, Gender: ${
                  user.gender
                }, Domain: ${user.domain}, Available: ${
                  user.available ? "Yes" : "No"
                }`}
              />
            </List.Item>
          )}
        />
      </Card>
      </Modal>
    </div>
  );
};
export default TeamCard;
