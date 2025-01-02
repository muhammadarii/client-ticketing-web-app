import React from "react";
import SBreadCrumb from "../../components/Breadcrumb";

const DashboardPage = () => {
  return (
    <div className="font-poppins bg-white h-screen">
      <div className="px-[60px] py-[20px]">
        <div>
          <SBreadCrumb />
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
