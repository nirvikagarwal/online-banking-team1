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
    const response = await axios.get("http://localhost:8080/api/users",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }});
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
      account,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }}
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const login = async (loginDetails) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/login",
      loginDetails
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { registorUser, getUsers, openAccount, login };
