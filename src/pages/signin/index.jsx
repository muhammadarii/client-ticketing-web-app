import React, { useState } from "react";
import DNavbar from "../../components/NavbarDashboard";
import SAlert from "../../components/Alert";
import SForm from "./form";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../config";
import Apple from "../../styles/img/apple.png";
import Google from "../../styles/img/google.png";
import Adobe from "../../styles/img/Adobe.png";
import Slack from "../../styles/img/slack.png";
import Spotify from "../../styles/img/spotify.png";

const PageSignin = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    status: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/signin`,
        form
      );
      localStorage.setItem("token", res.data.data.token);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg ?? "Something went wrong",
      });
    }
  };
  if (token) return <Navigate to="/" />;
  return (
    <>
      <DNavbar />
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col justify-center items-center md:h-screen">
          <h1 className="font-medium text-[25px] md:text-[45px] text-white">
            Sign In
          </h1>
          {alert.status && <SAlert message={alert.message} />}
          <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
          <div className="mt-[50px] md:mt-[100px] flex flex-col justify-center items-center">
            <p className="text-[12px] md:text-[16px] text-gray font-normal">
              Events held by top & biggest global companies
            </p>
            <div className="flex portrait:flex-col justify-center items-center mt-[30px] gap-[35px] md:gap-[70px]">
              <img src={Apple} alt="object" />
              <img src={Adobe} alt="object" />
              <img src={Slack} alt="object" />
              <img src={Spotify} alt="object" />
              <img src={Google} alt="object" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSignin;
