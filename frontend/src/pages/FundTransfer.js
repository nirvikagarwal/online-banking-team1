import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { fundTransfer, getAccount } from "../utils/apiHelper";
import FundTransferModal from "../components/FundTransferModal";
import ActivateNetBankingModal from "../components/ActivateNetBankingModal";
import { GetUserContext } from "../context/UserContext";

const FundTransfer = () => {
  const [show, setShow] = useState(false);
  const [netShow, setNetShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleNetClose = () => {
    setNetShow(false);
  };

  const { user } = GetUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [details, setDetails] = useState({
    type: "",
    amount: "",
    beneficiaryAccountNo: "",
    userAccountNo: "",
    transactionPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const onSubmit = async (e) => {
    console.log(details);
    // e.preventDefault();
    const accounts = await getAccount(user.userId);
    console.log(accounts);
    const valid = accounts.find(
      (account) => `${account.accountNo}` === details.userAccountNo
    );
    console.log(valid);
    let response = null;
    if (valid) {
      if (valid.netBankingEnabled) {
        response = await fundTransfer(details);
        console.log(response);
      } else {
        setNetShow(true);
      }
    }
    if (response) {
      setShow(true);
      setDetails({
        type: "",
        amount: "",
        beneficiaryAccountNo: "",
        userAccountNo: "",
        transactionPassword: "",
      });
    }
  };

  return (
    <>
      <FundTransferModal
        show={show}
        handleClose={handleClose}
        userId={user.userId}
      />
      <ActivateNetBankingModal
        show={netShow}
        handleClose={handleNetClose}
        userId={user.userId}
      />
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
              Fund Transfer
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <select
                required
                className="form-select"
                aria-label="Default select example"
                name="type"
                id="type"
                onChange={handleOnChange}
                value={details.type}
              >
                <option selected>Transaction Type</option>
                <option value="neft">NEFT</option>
                <option value="imps">IMPS</option>
                <option value="rtgs">RTGS</option>
                <option value="ecs">ECS</option>
              </select>
              <br></br>

              <MDBInput
                {...register("amount", { required: true })}
                wrapperClass="mb-4"
                label="Amount"
                size="lg"
                id="amount"
                type="number"
                name="amount"
                onChange={handleOnChange}
                value={details.amount}
              />
              {errors.amount?.type === "required" && (
                <p role="alert">Amount is required</p>
              )}

              <MDBInput
                wrapperClass="mb-4"
                label="Beneficiary Account Number"
                size="lg"
                id="beneficiaryAccountNo"
                name="beneficiaryAccountNo"
                type="text"
                {...register("beneficiaryAccountNo", { required: true })}
                onChange={handleOnChange}
                value={details.beneficiaryAccountNo}
              />

              {errors.beneficiaryAccountNo?.type === "required" && (
                <p role="alert">Beneficiary Account Number is required</p>
              )}

              <MDBInput
                wrapperClass="mb-4"
                label="User Account Number"
                size="lg"
                id="userAccountNo"
                name="userAccountNo"
                {...register("userAccountNo", { required: true })}
                type="text"
                onChange={handleOnChange}
                value={details.userAccountNo}
              />
              {errors.userAccountNo?.type === "required" && (
                <p role="alert">To Account number is required</p>
              )}

              <MDBInput
                wrapperClass="mb-4"
                label="Transaction Password"
                size="lg"
                id="transactionPassword"
                name="transactionPassword"
                type="password"
                {...register("transactionPassword", {
                  required: true,
                  pattern:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
                })}
                onChange={handleOnChange}
                value={details.transactionPassword}
              />
              {errors.transactionPassword?.type === "required" && (
                <p role="alert">Please enter your password</p>
              )}
              {errors.transactionPassword?.type === "pattern" && (
                <>
                  <p role="alert">Invalid password</p>
                </>
              )}

              <MDBBtn
                className="mb-4 w-100 gradient-custom-3"
                size="lg"
                type="submit"
                // data-bs-toggle="modal" data-bs-target="#exampleModal"
              >
                SEND
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default FundTransfer;
