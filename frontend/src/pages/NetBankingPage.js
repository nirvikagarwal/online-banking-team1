import { Link } from "react-router-dom";
import "./netBankingPage.css";
import { GetUserContext } from "../context/UserContext";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";

const NetBankingPage = () => {
  const { user } = GetUserContext();
  return (
    <div className="container" style={{ height: "70vh" }}>
      <br></br>
      <br></br>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-lg-3 mt-5 px-lg-4">
          {/* Fund Transfer Service */}
          <div className="card mb-4 card1">
            <div className="card-body d-flex flex-column align-items-center">
              {/* <RiMoneyDollarCircleFill /> */}
              <FaMoneyBillTrendUp size={30} />
              <h5 className="card-title mt-2">Fund Transfer</h5>
              <p className="card-text text-reset text-center mt-2">
                Transfer money to another account.
              </p>
              <Link to="/fundTransfer" className="btn btn-outline-light mt-2">
                Go to Fund Transfer
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mt-5 px-lg-4">
          {/* Add Beneficiary Service */}
          <div className="card mb-4 card1">
            <div className="card-body d-flex flex-column align-items-center">
              <BsPersonFillAdd size={30} />
              <h5 className="card-title mt-2">Add Beneficiary</h5>
              <p className="card-text text-reset mt-2 text-center">
                Add a new beneficiary for easy transfers.
              </p>
              <Link to="/addBeneficiary" className="btn btn-outline-light mt-2">
                Go to Add Beneficiary
              </Link>
            </div>
          </div>
        </div>

        {/* Add more services as needed */}
        <div className="col-md-6 col-lg-3 mt-5 px-lg-4">
          {/* Manage Beneficiary Service */}
          <div className="card mb-4 card1">
            <div className="card-body d-flex flex-column align-items-center">
              <FaMoneyBillTransfer size={30} />
              <h5 className="card-title mt-2">Transactions</h5>
              <p className="card-text text-reset text-center mt-2">
                View transactions history of your account.
              </p>
              <Link
                to={`/transactions/${user.userId}`}
                className="btn btn-outline-light mt-2"
              >
                Go to transactions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetBankingPage;
