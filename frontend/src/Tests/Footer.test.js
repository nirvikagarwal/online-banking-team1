import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders quick links", () => {
  const { getByText } = render(<Footer />);
  const homeLink = getByText("Home");
  const accountsLink = getByText("Accounts");
  const transfersLink = getByText("Transfers");
  const paymentsLink = getByText("Payments");
  const statementsLink = getByText("Statements");
  const securityLink = getByText("Security and Privacy");

  expect(homeLink).toBeInTheDocument();
  expect(accountsLink).toBeInTheDocument();
  expect(transfersLink).toBeInTheDocument();
  expect(paymentsLink).toBeInTheDocument();
  expect(statementsLink).toBeInTheDocument();
  expect(securityLink).toBeInTheDocument();
});

test("renders legal links", () => {
  const { getByText } = render(<Footer />);
  const termsLink = getByText("Terms and Conditions");
  const privacyLink = getByText("Privacy Policy");
  const cookieLink = getByText("Cookie Policy");
  const complianceLink = getByText("Compliance");

  expect(termsLink).toBeInTheDocument();
  expect(privacyLink).toBeInTheDocument();
  expect(cookieLink).toBeInTheDocument();
  expect(complianceLink).toBeInTheDocument();
});

test("renders copyright text", () => {
  const { getByText } = render(<Footer />);
  const copyrightText = getByText(
    `© ${new Date().getFullYear()} All rights reserved.`
  );

  expect(copyrightText).toBeInTheDocument();
});
