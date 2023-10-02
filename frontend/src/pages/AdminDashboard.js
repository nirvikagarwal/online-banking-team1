import React from "react";
import { useState, useEffect } from "react";
import { getAccounts, getUsers, toggleUser } from "../utils/apiHelper";
import "./Table.css";
import AdminModal from "../components/AdminModal";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  //   const [userStatus, setUserStatus] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [accountStatus, setAccountStatus] = useState({});
  const [originalAccounts, setOriginalAccounts] = useState([]);
  const [sortField, setSortField] = useState(""); // Track the sorting field
  const [sortDirection, setSortDirection] = useState("ascending"); // Track sorting direction
  const [show, setShow] = useState(false);
  const [clickedUser, setClickedUser] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const func = async () => {
      const data = await getUsers(users);
      setUsers(data);

      const accounts = await getAccounts();
      setAccounts(accounts);
      setOriginalAccounts(accounts);
      console.log(accounts);

      //   const statusObj = {};
      //   data.forEach((user) => {
      //     statusObj[user.userId] = true; // Set all users to active initially
      //   });
      //   setUserStatus(statusObj);
      //   console.log(statusObj);

      const statusObj = {};
      accounts.forEach((account) => {
        statusObj[account.accountNo] = true; // Set all users to active initially
      });
      setAccountStatus(statusObj);
      console.log(statusObj);
    };
    func();
  }, []);

  const handleUpdate = async (accountNo) => {
    // const account = await getAccount(userId);
    // console.log(account[0]);
    const response = await toggleUser(accountNo);
    console.log(response);

    // setUserStatus((prevStatus) => ({
    //   ...prevStatus,
    //   [userId]: !prevStatus[userId], // Toggle the user's status
    // }));

    setAccountStatus((prevStatus) => ({
      ...prevStatus,
      [accountNo]: !prevStatus[accountNo], // Toggle the user's status
    }));
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // const newUsers = users.filter((user) =>
    //   user.firstName.startsWith(searchTerm)
    // );
    // setUsers(newUsers);

    const newAccounts = originalAccounts.filter((account) =>
      account.user.toLowerCase().startsWith(searchTerm)
    );
    setAccounts(newAccounts);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      // Toggle sorting direction if the same field is clicked again
      setSortDirection(
        sortDirection === "ascending" ? "descending" : "ascending"
      );
    } else {
      setSortField(field);
      setSortDirection("ascending"); // Set ascending by default when a new field is selected
    }
  };

  const handleDetails = (username) => {
    const clickedUser = users.filter((user) => user.firstName === username);
    console.log(clickedUser);
    setClickedUser(clickedUser);
    setShow(true);
  };

  const sortedAccounts = [...accounts].sort((a, b) => {
    // Custom sorting logic based on the selected field and direction
    if (sortField === "accountNo") {
      return sortDirection === "ascending"
        ? a.accountNo - b.accountNo
        : b.accountNo - a.accountNo;
    } else if (sortField === "user") {
      return sortDirection === "ascending"
        ? a.user.localeCompare(b.user)
        : b.user.localeCompare(a.user);
    } else if (sortField === "accountType") {
      return sortDirection === "ascending"
        ? a.accountType.localeCompare(b.accountType)
        : b.accountType.localeCompare(a.accountType);
    } else if (sortField === "ifsc") {
      return sortDirection === "ascending"
        ? a.ifsc.localeCompare(b.ifsc)
        : b.ifsc.localeCompare(a.ifsc);
    } else if (sortField === "balance") {
      return sortDirection === "ascending"
        ? a.balance - b.balance
        : b.balance - a.balance;
    } else if (sortField === "branch") {
      return sortDirection === "ascending"
        ? a.branch.localeCompare(b.branch)
        : b.branch.localeCompare(a.branch);
    } else if (sortField === "dateOfOpening") {
      const dateA = new Date(a.dateOfOpening).getTime();
      const dateB = new Date(b.dateOfOpening).getTime();
      return sortDirection === "ascending" ? dateA - dateB : dateB - dateA;
    }
    // Add more fields for sorting here if needed
    return 0;
  });

  return (
    <>
      {clickedUser && clickedUser.length > 0 && (
        <AdminModal show={show} handleClose={handleClose} user={clickedUser} />
      )}
      <div className="container" style={{ minHeight: "100vh" }}>
        <br></br>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div class="input-group rounded" style={{ width: "30%" }}>
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={handleSearch}
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div className="d-flex align-items-center" style={{ width: "30%" }}>
            {/* <span className="me-2">Sort By:</span> */}
            <select
              className="form-select"
              value={sortField}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Select Sorting Criteria</option>
              <option value="accountNo">Account No</option>
              <option value="user">Username</option>
              <option value="accountType">Account Type</option>
              <option value="ifsc">IFSC Code</option>
              <option value="balance">Balance</option>
              <option value="branch">Branch</option>
              <option value="dateOfOpening">Date of Opening</option>
              {/* Add more options for sorting fields here */}
            </select>
            <button
              className="btn btn-light ms-2"
              onClick={() => handleSort(sortField)}
            >
              {sortDirection === "ascending" ? (
                <i className="fas fa-arrow-up"></i>
              ) : (
                <i className="fas fa-arrow-down"></i>
              )}
            </button>
          </div>
        </div>

        <table className="table table-striped-columns border tab-cls table-light table-hover">
          <thead>
            <tr>
              {/* <th scope="col">#</th>
              <th scope="col">user_id</th>
              <th scope="col">first_name</th>
              <th scope="col">last_name</th>
              <th scope="col">middle_name</th>
              <th scope="col">dob</th>
              <th scope="col">email</th>
              <th scope="col">pan</th>
              <th scope="col">mobile</th>
              <th scope="col">address</th>
              <th scope="col"></th> */}
              <th scope="col">#</th>
              <th scope="col">username</th>
              <th scope="col">account_no</th>
              <th scope="col">account_type</th>
              <th scope="col">ifsc_code</th>
              <th scope="col">balance</th>
              <th scope="col">branch</th>
              <th scope="col">date_of_opening</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {/* <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.userId}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.middleName}</td>
                  <td>{user.dob}</td>
                  <td>{user.email}</td>
                  <td>{user.pan}</td>
                  <td>{user.mobile}</td>
                  <td>{user.address}</td>
                  <td>
                    {userStatus[user.userId] ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleUpdate(user.userId);
                        }}
                      >
                        DISABLE
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          handleUpdate(user.userId);
                        }}
                      >
                        ENABLE
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody> */}

          <tbody>
            {sortedAccounts.map((account, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{account.user}</td>
                  <td>{account.accountNo}</td>
                  <td>{account.accountType}</td>
                  <td>{account.ifsc}</td>
                  <td>{account.balance}</td>
                  <td>{account.branch}</td>
                  <td>{account.dateOfOpening}</td>
                  <td>
                    {accountStatus[account.accountNo] ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleUpdate(account.accountNo);
                        }}
                      >
                        DISABLE
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          handleUpdate(account.accountNo);
                        }}
                      >
                        ENABLE
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        handleDetails(account.user);
                      }}
                    >
                      DETAILS
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
