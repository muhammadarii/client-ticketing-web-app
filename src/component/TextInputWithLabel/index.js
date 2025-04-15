import { Form } from "react-bootstrap";

export const TextInputWithLabel = ({
  name,
  value,
  type,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
};
