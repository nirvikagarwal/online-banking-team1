import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("Navbar renders correctly", () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("Register")).toBeInTheDocument();
  expect(getByText("Login")).toBeInTheDocument();
  expect(getByText("Open Account")).toBeInTheDocument();
  expect(getByText("Net Banking")).toBeInTheDocument();
});
