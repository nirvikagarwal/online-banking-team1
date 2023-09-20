import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../assets/images/login.png";
import { login, getCurrentUser } from "../utils/apiHelper";
import { useNavigate } from "react-router-dom";
import { GetUserContext } from "../context/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = GetUserContext();

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [loading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(details);
    setIsLoading(true);
    const response = await login(details);
    console.log(response);
    if (response) {
      setDetails({
        email: "",
        password: "",
      });
      const user = await getCurrentUser();
      setUser(user.data);
      navigate("/user");
    }
    setIsLoading(false);
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
                    {loading ? (
                      <button
                        className="btn btn-primary mt-3"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-grow spinner-grow-sm me-2"
                          aria-hidden="true"
                        ></span>
                        <span role="status">Logging in </span>
                      </button>
                    ) : (
                      <div className="">
                        <input
                          type="submit"
                          className="form-control btn btn-primary mt-3"
                          onClick={handleClick}
                        />
                      </div>
                    )}
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
