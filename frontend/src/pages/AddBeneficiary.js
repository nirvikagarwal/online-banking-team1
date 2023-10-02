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
import { addBeneficiary } from "../utils/apiHelper";
import BeneficiaryModal from "../components/BeneficiaryModal";

const AddBeneficiary = () => {
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
    beneficiaryName: "",
    accountNo: "",
    bankName: "",
    ifsc: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const onSubmit = async (e) => {
    // console.log(details);
    // e.preventDefault();
    // const response = await addBeneficiary(details);
    // console.log(response);
    // if (response) {
    //   setShow(true);
    //   setDetails({
    //     beneficiaryName: "",
    //     accountNo: "",
    //     bankName: "",
    //     ifsc: "",
    //   });
    // }
  };

  return (
    <>
      <BeneficiaryModal show={show} handleClose={handleClose} />
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
              Add Beneficiary
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <MDBInput
                wrapperClass="mb-4"
                label="Beneficiary Name"
                size="lg"
                id="beneficiaryName"
                name="beneficiaryName"
                type="text"
                {...register("beneficiaryName", { required: true })}
                onChange={handleOnChange}
                value={details.beneficiaryName}
              />

              {errors.beneficiaryName?.type === "required" && (
                <p role="alert">Name is required</p>
              )}

              <MDBInput
                wrapperClass="mb-4"
                label="Account Number"
                size="lg"
                id="accountNo"
                name="accountNo"
                {...register("accountNo", { required: true })}
                type="text"
                onChange={handleOnChange}
                value={details.accountNo}
              />
              {errors.accountNo?.type === "required" && (
                <p role="alert">Account number is required</p>
              )}

              <MDBInput
                {...register("bankName", { required: true })}
                wrapperClass="mb-4"
                label="Bank Name"
                size="lg"
                id="bankName"
                type="bankName"
                onChange={handleOnChange}
                value={details.bankName}
              />
              {errors.bankName?.type === "required" && (
                <p role="alert">IFSC Code is required</p>
              )}

              <MDBInput
                {...register("ifsc", { required: true })}
                wrapperClass="mb-4"
                label="IFSC Code"
                size="lg"
                id="ifsc"
                type="ifsc"
                onChange={handleOnChange}
                value={details.ifsc}
              />
              {errors.ifsc?.type === "required" && (
                <p role="alert">IFSC Code is required</p>
              )}

              {/* <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="password"
                type="password"
                {...add("password", {
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
              )} */}

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

export default AddBeneficiary;
