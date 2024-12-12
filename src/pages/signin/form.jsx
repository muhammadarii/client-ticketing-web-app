import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";

const form = ({ form, handleChange, handleSubmit, isLoading }) => {
  return (
    <form className="bg-white w-[350px] md:w-[460px] h-[410px] rounded-[24px] mt-[25px] md:mt-[50px] p-[40px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <TextInputWithLabel
            label={"Email"}
            type="email"
            placeholder="Email"
            name={"email"}
            value={form.email}
            onChange={handleChange}
          />
          <TextInputWithLabel
            label={"Password"}
            type="password"
            placeholder="Password"
            name={"password"}
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-[20px] mt-[20px]">
          <SButton
            loading={isLoading}
            disabled={isLoading}
            action={handleSubmit}
            className={
              "bg-green portrait:w-[300px] portrait:h-[40px] w-[412px] h-[50px] rounded-[45px] font-medium"
            }
          >
            Sign In
          </SButton>
          <SButton
            className={
              "bg-softNavy text-white portrait:w-[300px] portrait:h-[40px] w-[412px] h-[50px] rounded-[45px] font-medium"
            }
          >
            Create New Account
          </SButton>
        </div>
      </div>
    </form>
  );
};

export default form;
