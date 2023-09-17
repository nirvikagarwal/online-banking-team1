import React, { useState } from "react";
import "./registrationPage.css";
import { useForm } from "react-hook-form";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

const AddBeneficiary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [details, setDetails] = useState({
    name: "",
    accountNo: "",
    ifscCode: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const onSubmit = (e) => {
    console.log(details);
    e.preventDefault();
  };

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center "
      >
        <MDBCard className="m-5" style={{ width: "40%" }}>
          <MDBCardBody className="px-5">
            <h2
              className="text-uppercase text-center mb-5"
              style={{ fontSize: "20px" }}
            >
              Manage Beneficiary
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                size="lg"
                id="name"
                type="text"
                {...register("name", { required: true })}
                onChange={handleOnChange}
                value={details.name}
              />

              {errors.firstName?.type === "required" && (
                <p role="alert">Name is required</p>
              )}

              <MDBInput
                wrapperClass="mb-4"
                label="Account Number"
                size="lg"
                id="accountNo"
                {...register("accountNo", { required: true })}
                type="text"
                onChange={handleOnChange}
                value={details.accountNo}
              />
              {errors.accountNo?.type === "required" && (
                <p role="alert">Account number is required</p>
              )}
              <MDBInput
                {...register("email", { required: true })}
                wrapperClass="mb-4"
                label="IFSC Code"
                size="lg"
                id="ifscCode"
                type="ifscCode"
                onChange={handleOnChange}
                value={details.ifscCode}
              />
              {errors.ifscCode?.type === "required" && (
                <p role="alert">IFSC Code is required</p>
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

              <MDBBtn
                className="mb-4 w-100 gradient-custom-3"
                size="lg"
                type="submit"
                // data-bs-toggle="modal" data-bs-target="#exampleModal"
              >
                UPDATE
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default AddBeneficiary;
