import React from "react";
import { Navigate } from "react-router-dom";
import DNavbar from "../../components/NavbarDashboard";
import SButton from "../../components/Button";
import Table from "react-bootstrap/Table";
import SBreadCrumb from "../../components/Breadcrumb";

const DashboardPage = () => {
  return (
    <div className="font-poppins bg-white h-screen">
      <div className="text-white">
        <DNavbar />
      </div>
      <div className="px-[60px] py-[20px]">
        <div>
          <SBreadCrumb />
          <SButton
            className={"bg-green w-[80px] h-[30px] rounded-lg font-medium "}
          >
            Add
          </SButton>
        </div>
        <Table striped bordered hover className="mt-[20px]">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardPage;
