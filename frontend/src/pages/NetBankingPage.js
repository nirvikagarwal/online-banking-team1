import { Link } from "react-router-dom";
import "./netBankingPage.css";

const NetBankingPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-6 mt-5">
          {/* Fund Transfer Service */}
          <div className="card mb-4 card1">
            <div className="card-body">
              <h5 className="card-title">Fund Transfer</h5>
              <p className="card-text text-reset">Transfer money to another account.</p>
              <a href="#" className="btn btn-outline-light">
                Go to Fund Transfer
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 mt-5">
          {/* Add Beneficiary Service */}
          <div className="card mb-4 card1">
            <div className="card-body">
              <h5 className="card-title">Add Beneficiary</h5>
              <p className="card-text text-reset">
                Add a new beneficiary for easy transfers.
              </p>
              <a href="#" className="btn btn-outline-light">
                Go to Add Beneficiary
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 mt-4 mb-5">
          {/* Manage Beneficiary Service */}
          <div className="card mb-4 card1">
            <div className="card-body">
              <h5 className="card-title">Manage Beneficiary</h5>
              <p className="card-text text-reset">View and manage your beneficiaries.</p>
              <a href="#" className="btn btn-outline-light">
                Go to Manage Beneficiary
              </a>
            </div>
          </div>
        </div>

        {/* Add more services as needed */}
        <div className="col-md-6 col-lg-6 mt-4 mb-5">
          {/* Manage Beneficiary Service */}
          <div className="card mb-4 card1">
            <div className="card-body">
              <h5 className="card-title">Manage Beneficiary</h5>
              <p className="card-text text-reset">View and manage your beneficiaries.</p>
              <a href="#" className="btn btn-outline-light">
                Go to Manage Beneficiary
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetBankingPage;
