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
    const response = await axios.get("http://localhost:8080/api/users");
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { registorUser, getUsers };