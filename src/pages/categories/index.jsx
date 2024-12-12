import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DNavbar from "../../components/NavbarDashboard";
import SButton from "../../components/Button";
import SBreadCrumb from "../../components/Breadcrumb";
import { Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { config } from "../../config";

const CategoriesPage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCategoriesAPI = async () => {
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsLoading(false);
        setdata(res.data.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      <div className="font-poppins bg-white h-screen">
        <div className="text-white">
          <DNavbar />
        </div>
        <div className="px-[60px] py-[20px]">
          <div>
            <SBreadCrumb textSecond={"categories"} />
            <SButton
              action={() => navigate("/categories/create")}
              className={"bg-green w-[80px] h-[30px] rounded-lg font-medium "}
            >
              Add
            </SButton>
          </div>
          <Table striped bordered hover className="mt-[20px]">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={data.length + 3} style={{ textAlign: "center" }}>
                    <div className="flex items-center justify-center">
                      <Spinner animation="grow" variant="light" />
                    </div>
                  </td>
                </tr>
              ) : (
                data.map((data, index) => (
                  <tr key={index}>
                    <td>{(index += 1)}</td>
                    <td>{data.name}</td>
                    <td>Otto</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
