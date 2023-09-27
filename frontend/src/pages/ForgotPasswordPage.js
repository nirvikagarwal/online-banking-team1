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
import { resetPassword } from "../utils/apiHelper";
import ForgotPasswordModal from "../components/ForgotPasswordModal";

const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [details, setDetails] = useState({
    email: "",
    mobile: "",
    dob: "",
    newPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const onSubmit = async (e) => {
    console.log(details);
    // e.preventDefault();
    const response = await resetPassword(details);
    console.log(response);
    if (response) {
      setShow(true);
      setDetails({
        email: "",
        mobile: "",
        dob: "",
        newPassword: "",
      });
    }
  };

  return (
    <>
      <ForgotPasswordModal show={show} handleClose={handleClose} />
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
              Reset Your Password
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                size="lg"
                id="email"
                name="email"
                type="email"
                {...register("email", { required: true })}
                onChange={handleOnChange}
                value={details.email}
              />

              {errors.email?.type === "required" && (
                <p role="alert">Email is required</p>
              )}

              <MDBInput
                wrapperClass="mb-4"
                label="Mobile"
                size="lg"
                id="mobile"
                name="mobile"
                type="text"
                {...register("mobile", { required: true })}
                onChange={handleOnChange}
                value={details.mobile}
              />
              {errors.mobile?.type === "required" && (
                <p role="alert">Mobile number is required</p>
              )}

              <MDBInput
                {...register("dob", { required: true })}
                wrapperClass="mb-4"
                label="Date of Birth"
                size="lg"
                id="dob"
                type="date"
                name="dob"
                onChange={handleOnChange}
                value={details.dob}
              />
              {errors.dob?.type === "required" && (
                <p role="alert">DOB is required</p>
              )}

              {/* <MDBInput
                wrapperClass="mb-4"
                label="New Password"
                size="lg"
                id="newPassword"
                type="password"
                name="newPassword"
                onChange={handleOnChange}
                value={details.newPassword}
                {...register("newPassword", {
                  required: true,
                  pattern:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
                })}
              />
              {errors.newPassword?.type === "required" && (
                <p role="alert">Password is required</p>
              )}
              {errors.newPassword?.type === "pattern" && (
                <>
                  <p role="alert">Invalid password</p>
                </>
              )} */}

              <MDBInput
                wrapperClass="mb-4"
                label="New Password"
                size="lg"
                id="newPassword"
                type="password"
                {...register("newPassword", {
                  required: true,
                  pattern:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
                })}
                onChange={handleOnChange}
                value={details.newPassword}
              />
              {errors.newPassword?.type === "required" && (
                <p role="alert">Please enter your password</p>
              )}
              {errors.newPassword?.type === "pattern" && (
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
                ADD
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default ForgotPassword;
