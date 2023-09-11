import React, { useState } from "react";
import axios from "axios";

export const Demo = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(inputValues);
    e.preventDefault();
  };

  //   axios
  //     .post("https://localhost:3000/userdetails", {
  //       inputValues,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });

  axios
    .post(`https://jsonplaceholder.code.com/users`, { inputValues })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
