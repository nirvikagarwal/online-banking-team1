import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should render the footer with correct content", () => {
    const { getByText } = render(<Footer />);
    
    // Test the "About Us" section
    expect(getByText("About Us")).toBeInTheDocument();
    expect(
      getByText("The best banking service provider. One place for all your banking essentials.")
    ).toBeInTheDocument();

    // Test the "Contact Us" section
    expect(getByText("Contact Us")).toBeInTheDocument();
    expect(getByText("premierbank@gmail.com")).toBeInTheDocument();
    expect(getByText("+91 6299674639")).toBeInTheDocument();

    // Test the copyright text
    expect(
      getByText(`© ${new Date().getFullYear()} Premier Private Bank, All rights reserved`)
    ).toBeInTheDocument();
  });
});
