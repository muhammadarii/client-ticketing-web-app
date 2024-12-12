import React from "react";
import { Form } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";

const form = ({ handleSubmit, form, handleChange, isLoading, edit }) => {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Input Category Name"}
        label={"Category Name"}
        name={"name"}
        value={form.name}
        type={"text"}
        onChange={handleChange}
      />
      <SButton
        className={
          "w-[412px] h-[50px] rounded-[45px] font-medium bg-green mt-5"
        }
        variant="primary"
        type="submit"
        action={handleSubmit}
      >
        {edit ? "Update" : "Submit"}
      </SButton>
    </Form>
  );
};

export default form;
