import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(
    groupTeamMembers(employees)
  );

  function groupTeamMembers(employees) {
    const groupedEmployees = [];
    employees.forEach((employee) => {});
    return employees;
  }

  return <div>GroupedTeamMembers</div>;
};

export default GroupedTeamMembers;
