import React, { useState } from "react";
import SBreadCrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../configs";

const CategoryCreate = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${config.api_host_dev}/cms/categories`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      navigate("/categories");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err.response.data.msg,
      });
    }
  };
  return (
    <>
      <div className="bg-white w-full h-screen">
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

export default CategoryCreate;
