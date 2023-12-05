import TeamCard from "./TeamCard";

const TeamList = (data) => {
  const teams = data.team;
  if (!teams) {
    return (
      <div className="spain">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="team-container">
      {teams.map((team) => (
        <TeamCard team={team} />
      ))}
    </div>
  );
};
export default TeamList;
