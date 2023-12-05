import { Avatar, Card, List } from "antd"

const TeamCard = ({team}) => {
    console.log(team,'gdg')
  return (
    <div> <Card
    style={{height:"250px",overflow:"hidden"}}
    hoverable
  >
    <List
      dataSource={team.users}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.avatar} />}
            title={`${user.first_name} ${user.last_name}`}
            description={`Available: ${
              user.available ? "Yes" : "No"
            }`}
          />
        </List.Item>
      )}
    />
  </Card></div>
  )
}
export default TeamCard