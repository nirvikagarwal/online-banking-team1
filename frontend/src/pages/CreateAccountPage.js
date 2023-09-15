import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { openAccount } from "../utils/apiHelper";

const CreateAccount = () => {
  const [details, setDetails] = useState({
    account_type: "",
    branch: "",
    aadhar: "",
    annual_income: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(details);
    e.preventDefault();
    if (details.aadhar.length !== 12) {
      alert("Aadhar number should contain 12 digits. Please enter again!");
    }
    openAccount(details);
  };
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center "
    >
      <MDBCard className="m-5" style={{ width: "45%" }}>
        <MDBCardBody className="px-5">
          <h2
            className="text-uppercase text-center mb-5"
            style={{ fontSize: "20px" }}
          >
            CREATE ACCOUNT
          </h2>

          <form onSubmit={handleSubmit}>
            <select
              required
              className="form-select"
              aria-label="Default select example"
              name="account_type"
              id="account_type"
              onChange={handleOnChange}
              value={details.account_type}
            >
              <option selected>Account Type</option>
              <option value="savings">Savings Account</option>
              <option value="current">Current Account</option>
              <option value="salary">Salary Account</option>
            </select>
            <br></br>
            <select
              required
              className="form-select"
              aria-label="Default select example"
              name="branch"
              id="branch"
              onChange={handleOnChange}
              value={details.branch}
            >
              <option selected>Select Branch</option>
              <option value="gachibowli">Gachibowli</option>
              <option value="hitech-city">Hitech City</option>
              <option value="raidurg">Raidurg</option>
              <option value="madhapur">Madhapur</option>
              <option value="kondapur">Kondapur</option>
              <option value="kukatpally">Kukatpally</option>
            </select>
            <br></br>

            <MDBInput
              required
              wrapperClass="mb-4"
              label="Aadhar Number"
              size="lg"
              id="aadhar"
              type="number"
              name="aadhar"
              onChange={handleOnChange}
              value={details.aadhar}
            />
            <MDBInput
              required
              wrapperClass="mb-4"
              label="Gross Annual Income"
              size="lg"
              id="annual_income"
              type="number"
              name="annual_income"
              onChange={handleOnChange}
              value={details.annual_income}
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                required
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree that above information is correct"
              />
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-3"
              size="lg"
              type="submit"
            >
              CREATE ACCOUNT
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default CreateAccount;
