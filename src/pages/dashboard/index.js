import React from "react";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  if (!token) {
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
