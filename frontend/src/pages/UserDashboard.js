import "./userDashboard.css"
const UserDashboard = ()=>{
    return <div className="container-fluid mb-4">
    <div className="row">
      {/* Sidebar */}
      <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar mt-4" >
        <div className="position-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#account-details">
                Account Statement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#account-summary">
                Apply for loan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#transaction-history">
                Credit/Debit Card
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
        {/* Account Details */}
        <div className="card mt-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Account Details</h5>
            <p>Account Number: 1234567890</p>
            <p>Account Type: Savings Account</p>
            <p>Balance: $10,000</p>
            <p>Owner: John Doe</p>
          </div>
        </div>
        {/* Account Summary */}
        <div className="card mt-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Account Summary</h5>
            {/* Display account summary here */}
          </div>
        </div>
        {/* Transaction History */}
        <div className="card mt-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Transaction History</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-09-01</td>
                  <td>Deposit</td>
                  <td>$2,000</td>
                </tr>
                <tr>
                  <td>2023-08-25</td>
                  <td>Withdrawal</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td>2023-08-15</td>
                  <td>Payment</td>
                  <td>$1,200</td>
                </tr>
                {/* Add more transactions as needed */}
              </tbody>
            </table>
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
  </div>}
  


export default UserDashboard;