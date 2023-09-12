import React, { useState } from "react";
import "./app.css";
import { useForm } from "react-hook-form";
import { registorUser } from "../utils/apiHelper";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  const onSubmit = (e) => {
    console.log(details);
    // e.preventDefault();
    const response = registorUser(details);
    if (response) {
      setDetails({
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
    }
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
            User details
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <MDBRow>
              <MDBCol size="md">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First Name"
                  size="lg"
                  id="firstName"
                  type="text"
                  {...register("firstName", { required: true })}
                  onChange={handleOnChange}
                  value={details.firstName}
                />
              </MDBCol>
              {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
              )}
              <MDBCol size="md">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Middle Name"
                  size="lg"
                  id="middleName"
                  type="text"
                  name="middleName"
                  onChange={handleOnChange}
                  value={details.middleName}
                />
              </MDBCol>
              <MDBCol size="md">
                <MDBInput
                  {...register("lastName", { required: true })}
                  wrapperClass="mb-4"
                  label="Last Name"
                  size="lg"
                  id="lastName"
                  type="text"
                  onChange={handleOnChange}
                  value={details.lastName}
                />
              </MDBCol>
              {errors.lastName?.type === "required" && (
                <p role="alert">Last name is required</p>
              )}
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Father Name"
              size="lg"
              id="fatherName"
              {...register("fatherName", { required: true })}
              type="text"
              onChange={handleOnChange}
              value={details.fatherName}
            />
            {errors.fatherName?.type === "required" && (
              <p role="alert">Father name is required</p>
            )}
            <MDBInput
              {...register("email", { required: true })}
              wrapperClass="mb-4"
              label="Email"
              size="lg"
              id="email"
              type="email"
              onChange={handleOnChange}
              value={details.email}
            />
            {errors.email?.type === "required" && (
              <p role="alert">email is required</p>
            )}
            <MDBInput
              wrapperClass="mb-4"
              label="Date Of Birth"
              size="lg"
              id="dob"
              type="date"
              {...register("dob", { required: true })}
              onChange={handleOnChange}
              value={details.dob}
            />
            {errors.dob?.type === "required" && (
              <p role="alert">Date of Birth is required</p>
            )}
            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  {...register("mobile", { required: true })}
                  wrapperClass="mb-4"
                  label="mobile"
                  size="lg"
                  id="mobile"
                  type="text"
                  onChange={handleOnChange}
                  value={details.mobile}
                />
                {errors.mobile?.type === "required" && (
                  <p role="alert">mobile number is required</p>
                )}
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="PAN Number"
                  size="lg"
                  id="pan"
                  type="text"
                  {...register("pan", {
                    required: true,
                    pattern: /[A-Z]{5}[0-9]{4}[A-Z]/,
                  })}
                  onChange={handleOnChange}
                  value={details.pan}
                />
                {errors.pan?.type === "required" && (
                  <p role="alert">pan number is required</p>
                )}
                {errors.pan?.type === "pattern" && (
                  <p role="alert">invalid pan number</p>
                )}
              </MDBCol>
            </MDBRow>

            <MDBInput
              {...register("address", { required: true })}
              wrapperClass="mb-4"
              label="Address"
              size="lg"
              id="address"
              type="text"
              onChange={handleOnChange}
              value={details.address}
            />
            {errors.address?.type === "required" && (
              <p role="alert">address is required</p>
            )}
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="password"
              type="password"
              {...register("password", {
                required: true,
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
              })}
              onChange={handleOnChange}
              value={details.password}
            />
            {errors.password?.type === "required" && (
              <p role="alert">Please enter your password</p>
            )}
            {errors.password?.type === "pattern" && (
              <>
                <p role="alert">
                  invalid password
                  <ul className="list-unstyled">
                    <li className="">An item</li>
                    <li className="">A second item</li>
                    <li className="">A third item</li>
                    <li className="">A fourth item</li>
                  </ul>
                </p>
              </>
            )}
            <div className="form-check" style={{ marginBottom: "10px" }}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-3"
              size="lg"
              type="submit"
            >
              Register
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Form;
