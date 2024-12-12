import React from "react";
import { Nav } from "react-bootstrap";

export default function index({ action, children }) {
  return <Nav.Link onClick={action}>{children}</Nav.Link>;
}
