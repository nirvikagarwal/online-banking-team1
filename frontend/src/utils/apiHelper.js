import axios from "axios";

const registorUser = async (user) => {
  try {
    const response = await axios.post("http://localhost:8080/api/users", user);
    console.log(response.data);
    return response;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const toggleUser = async (accountNo) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/accounts/${accountNo}/toggle`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const openAccount = async (account) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/accounts",
      account,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const login = async (loginDetails) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/login",
      loginDetails
    );
    console.log(response.data);
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const addBeneficiary = async (details) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/beneficiary",
      details,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const fundTransfer = async (details) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/transactions",
      details,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getCurrentUser = async () => {
  const user = await axios.get("http://localhost:8080/api/users/getDetails", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return user;
};

const getAccount = async (userId) => {
  try {
    const account = await axios.get(
      `http://localhost:8080/api/users/${userId}/accounts`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return account.data;
  } catch (err) {
    console.log(err);
  }
};

const getAccounts = async (userId) => {
  try {
    const account = await axios.get(`http://localhost:8080/api/accounts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return account.data;
  } catch (err) {
    console.log(err);
  }
};

const activateNetBanking = async (details) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/accounts/register",
      details,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getTransactions = async (accountNo) => {
  console.log(accountNo);
  try {
    const response = await axios.get(
      `http://localhost:8080/api/transactions/account/${accountNo}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const resetPassword = async (details) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/resetPassword",
      details
    );
    console.log(response.data);
    return response;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export {
  registorUser,
  getUsers,
  openAccount,
  login,
  addBeneficiary,
  fundTransfer,
  getCurrentUser,
  getAccount,
  activateNetBanking,
  getAccounts,
  toggleUser,
  getTransactions,
  resetPassword,
};
