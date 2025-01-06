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
        variant="primary"
        action={handleSubmit}
        loading={isLoading}
        className={"mt-2"}
      >
        {edit ? "Ubah" : "Simpan"}
      </SButton>
    </Form>
  );
};

export default form;
