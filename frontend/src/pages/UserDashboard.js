const UserDashboard = ()=>{
    return <div className="container-fluid" >
    <div className="row">
      {/* Sidebar */}
      <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar" style={{height:"100vh"}}>
  <div className="position-sticky">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <i className="bi bi-house-door"></i> Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-bar-chart-line"></i> Account Overview
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-wallet2"></i> Transactions
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="bi bi-globe"></i> Internet Banking
        </a>
      </li>
    </ul>
  </div>
</nav>

      {/* Main content */}
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="container">
          <h1>Welcome to Your Bank Dashboard</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Account Balance</h5>
                  <p className="card-text">$5,000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Transactions</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Transaction 1</li>
                    <li className="list-group-item">Transaction 2</li>
                    <li className="list-group-item">Transaction 3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Account Details</h5>
                  <p className="card-text">Account Number: 123456789</p>
                  <p className="card-text">Account Type: Savings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Internet Banking Section */}
          <section>
            <h2>Internet Banking</h2>
            {/* Add your internet banking content here */}
          </section>
        </div>
      </main>
    </div>
  </div>
}


export default UserDashboard;