import React, { useState } from "react";
import SBreadCrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";

const CategoryCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    const res = await postData("/cms/categories", form);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil tambah kategori ${res.data.data.name}`
        )
      );
      navigate("/categories");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };
  return (
    <>
      <div className="font-poppins bg-white h-screen">
        <div className="mx-auto container px-[60px] py-[20px]">
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
