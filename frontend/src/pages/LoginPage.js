import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../assets/images/Login.png";
import { login } from "../utils/apiHelper";

const LoginPage = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(details);

    const response = login(details);
    if (response) {
      setDetails({
        email: "",
        password: "",
      });
    }
  };

  return (
    <section>
      <div className="d-flex flex-column min-vh-100 justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
              <div className="row">
                <div className="col-md-6">
                  <div className="m-5 text-center">
                    <h1>Welcome!</h1>
                  </div>
                  <form className="m-5">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={details.email}
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={details.password}
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="text-start">
                          <Link to="/forgotPassword">Forgot Password?</Link>
                        </div>
                      </div>
                      <div className="col-6"></div>
                    </div>
                    <div className="">
                      <input
                        type="submit"
                        className="form-control btn btn-primary mt-3"
                        onClick={handleClick}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div>
                    <img src={Login} alt="Login" className="img-fluid p-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
