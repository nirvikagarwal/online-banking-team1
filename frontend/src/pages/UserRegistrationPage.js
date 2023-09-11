import React, { useState } from "react";
import { registorUser } from "../utils/apiHelper";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Form = () => {
  const [details, setDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    email: "",
    dob: "",
    mobile: "",
    pan: "",
    address: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(details);
    e.preventDefault();
    registorUser(details);
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center "
      style={{
        backgroundImage: "url(../assets/images/bg-image.png)",
        backgroundSize: "100% auto",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ width: "35%" }}>
        <MDBCardBody className="px-5">
          <h2
            className="text-uppercase text-center mb-5"
            style={{ fontSize: "20px" }}
          >
            User details
          </h2>

          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol size="md">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First Name"
                  size="lg"
                  id="fName"
                  type="text"
                  name="fName"
                  onChange={handleOnChange}
                  value={details.firstName}
                />
              </MDBCol>
              <MDBCol size="md">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Middle Name"
                  size="lg"
                  id="mName"
                  type="text"
                  name="mName"
                  onChange={handleOnChange}
                  value={details.middleName}
                />
              </MDBCol>
              <MDBCol size="md">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last Name"
                  size="lg"
                  id="lName"
                  type="text"
                  name="lName"
                  onChange={handleOnChange}
                  value={details.lastName}
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Father Name"
              size="lg"
              id="faName"
              name="faName"
              type="text"
              onChange={handleOnChange}
              value={details.fatherName}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              size="lg"
              id="email"
              type="email"
              name="email"
              onChange={handleOnChange}
              value={details.email}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="FDate Of Birth"
              size="lg"
              id="dob"
              type="date"
              name="dob"
              onChange={handleOnChange}
              value={details.dob}
            />

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone"
                  size="lg"
                  id="phone"
                  type="text"
                  name="phone"
                  onChange={handleOnChange}
                  value={details.mobile}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="PAN Number"
                  size="lg"
                  id="pan"
                  type="text"
                  name="pan"
                  onChange={handleOnChange}
                  value={details.pan}
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Address"
              size="lg"
              id="address"
              type="text"
              name="address"
              onChange={handleOnChange}
              value={details.address}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="password"
              type="password"
              name="password"
              onChange={handleOnChange}
              value={details.password}
            />

            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
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
              Registor
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Form;
