import { Link } from "react-router-dom";

const NetBankingPage = () => {
  return (
    <div class="container mt-5" style={{ height: "500px" }}>
      <div class="row">
        <div class="col-md-3">
          <Link to="/fundTransfer">
            <button class="btn btn-light btn-block">Fund Transfer</button>
          </Link>
        </div>
        <div class="col-md-3">
          <Link to="/addBeneficiary">
            <button class="btn btn-light btn-block">Add Beneficiary</button>
          </Link>
        </div>

        <div class="col-md-3">
          <Link to="/manageBeneficiary">
            <button class="btn btn-light btn-block">Manage Beneficiary</button>
          </Link>
        </div>
        <div class="col-md-3">
          <Link to="/transactions">
            <button class="btn btn-light btn-block">Transaction History</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NetBankingPage;
