import React from "react";

export default function Input({ type, value, name, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[300px] md:w-[412px] h-[50px] rounded-[14px] pl-3 border border-gray-200 font-poppins placeholder:text-gray"
    ></input>
  );
}
