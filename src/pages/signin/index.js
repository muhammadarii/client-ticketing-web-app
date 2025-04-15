import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card, Container } from "react-bootstrap";
import { SButton } from "../../component/Button";

const PageSignin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container md={12}>
      <Card style={{ width: "40rem" }} className="mt-5 mx-auto">
        <Card.Title className="text-center">Form Login</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <SButton variant="primary" type="submit">
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PageSignin;
