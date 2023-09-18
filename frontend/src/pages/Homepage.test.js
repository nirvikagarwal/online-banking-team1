import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

test("HomePage renders correctly", () => {
  const { getByText } = render(<HomePage />);

  // Check if important text and images are present in the component
  expect(getByText("Welcome to Premier Private Bank")).toBeInTheDocument();
  expect(
    getByText(
      "At Premier Private Bank, we are committed to empowering individuals and businesses with financial solutions that drive growth and prosperity in our communities."
    )
  ).toBeInTheDocument();

  // Check if featured services text is present
  expect(getByText("Featured Services :")).toBeInTheDocument();

  // Check if individual service descriptions are present
  expect(
    getByText("Explore our range of products and services, designed to meet your unique financial needs.")
  ).toBeInTheDocument();
  expect(
    getByText("Simplify your banking with our mobile app for convenient on-the-go access to your accounts.")
  ).toBeInTheDocument();
  expect(
    getByText("Experience seamless and secure online transactions with our internet banking platform.")
  ).toBeInTheDocument();
});
