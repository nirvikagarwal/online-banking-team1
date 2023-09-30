import "./userDashboard.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDashboard = () => {
  const { user, accounts } = useLoaderData();
  const navigate = useNavigate();
  console.log(user);
  console.log(accounts);

  const handleClick = () => {
    navigate(`/transactions/${user.userId}`);
  };

  return (
    <div className="container-fluid mb-4">
      <div className="row">
        {/* Sidebar */}
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar mt-4"
        >
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#user-details">
                  User Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#account-details">
                  Account details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#transaction-history">
                  Transaction history
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#internet-banking">
                  Internet Banking
                </a>
              </li>
              {/* Add more sidebar links as needed */}
            </ul>
          </div>
        </nav>
        {/* Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="card mt-4 shadow">
            <div className="card-body">
              <h5 className="card-title">User Details</h5>
              <p className="card-text">
                {" "}
                Name: {user.firstName} {user.middleName} {user.lastName}
              </p>
              <p className="card-text">
                DOB : {user.dob.slice(0, 10).split("-").reverse().join("-")}
              </p>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.mobile}</p>
            </div>
          </div>
          {/* Account Details */}
          <div className="card mt-4 shadow">
            <div className="card-body">
              <h5 className="card-title">Account Details</h5>
              <div className="accordion" id="accordionFlushExample">
                {accounts.map((account, index) => {
                  const {
                    accountNo,
                    accountType,
                    dateOfOpening,
                    balance,
                    branch,
                    ifsc,
                  } = account;
                  return (
                    <div className="accordion-item" key={accountNo}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${index}`}
                        >
                          Account Number: {accountNo}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p className="text-info-emphasis">
                            Account Type: {accountType}
                          </p>
                          <p className="text-info-emphasis">
                            Balance: INR <span>{balance}</span>.00
                          </p>
                          <p className="text-info-emphasis">Branch: {branch}</p>
                          <p className="text-info-emphasis">IFSC: {ifsc}</p>
                          <p className="text-info-emphasis">
                            Date Of Opening : {dateOfOpening}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="card mt-4 shadow">
            <div className="card-body">
              <h5 className="card-title">Transaction History</h5>
              <button type="button" class="btn btn-info" onClick={handleClick}>
                View All Transactions
              </button>
            </div>
          </div>
          {/* Internet Banking */}
          <div className="card mt-4 shadow">
            <div className="card-body">
              <h5 className="card-title">Internet Banking</h5>
              <ul>
                <li>Fund Transfer</li>
                <li>Bill Payments</li>
                <li>Account Statement</li>
                <li>Change Password</li>
                {/* Add more facilities as needed */}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
