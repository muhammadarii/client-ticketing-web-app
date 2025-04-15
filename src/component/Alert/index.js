import { Alert } from "react-bootstrap";

export const SAlert = ({ message, type }) => {
  return (
    <Alert variant={type} className="text-center">
      {message}
    </Alert>
  );
};
