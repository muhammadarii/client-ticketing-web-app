import { Form } from "react-bootstrap";

export const TextInput = ({ name, value, type, onChange, placeholder }) => {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
