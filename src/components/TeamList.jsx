import { Avatar, Card, List } from "antd";
import TeamCard from "./TeamCard";

const TeamList = (data) => {
  const teams = data.team
    if (!teams) {
        return <Loading />;
      }

  return (
   <div className="team-container">
   {
        teams.map(team=>(
            <TeamCard team={team}/>
        ))
    }
   </div>
  )
}
export default TeamList