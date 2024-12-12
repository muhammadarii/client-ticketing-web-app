import React, { useEffect, useState } from "react";
import DNavbar from "../../components/NavbarDashboard";
import SBreadCrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { useNavigate, useParams } from "react-router-dom";

const CategoryEdit = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchOneCategories = async () => {
    // const res = await getData(`/cms/categories/${categoryId}`);
    // setForm({ ...form, name: res.data.data.name });
  };

  useEffect(() => {
    fetchOneCategories();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err?.response?.data?.msg ?? "Something went wrong",
      });
    }
  };

  return (
    <>
      <div className="bg-white w-full h-screen">
        <DNavbar />
        <div className="px-[60px] py-[20px]">
          <SBreadCrumb
            textSecond={"Categories"}
            urlSecond={"/categories"}
            textThird="Create"
          />
          {alert.status && <SAlert type={alert.type} message={alert.message} />}
          <Form
            form={form}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryEdit;
