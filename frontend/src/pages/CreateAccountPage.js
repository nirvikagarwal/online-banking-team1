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
import OpenAccountModal from "../components/OpenAccountModel";
import { GetUserContext } from "../context/UserContext";

const CreateAccount = () => {
  const { user } = GetUserContext();
  const [details, setDetails] = useState({
    accountType: "",
    branch: "",
    occupation: "",
    annualIncome: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    console.log(details);
    e.preventDefault();
    const response = await openAccount(details);
    if (response) {
      setDetails({
        accountType: "",
        branch: "",
        occupation: "",
        annualIncome: "",
      });
      setShow(true);
    }
  };
  return (
    <>
      <OpenAccountModal
        show={show}
        handleClose={handleClose}
        userId={user.userId}
      />
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
                name="accountType"
                id="accountType"
                onChange={handleOnChange}
                value={details.accountType}
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
                label="Occupation"
                size="lg"
                id="occupation"
                type="text"
                name="occupation"
                onChange={handleOnChange}
                value={details.occupation}
              />
              <MDBInput
                required
                wrapperClass="mb-4"
                label="Gross Annual Income"
                size="lg"
                id="annualIncome"
                type="number"
                name="annualIncome"
                onChange={handleOnChange}
                value={details.annualIncome}
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
    </>
  );
};

export default CreateAccount;
