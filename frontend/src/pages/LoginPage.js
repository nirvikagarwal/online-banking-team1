import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/images/login.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
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
                      <label className="form-label" htmlFor="username">
                        Username
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    <img src={login} alt="login" className="img-fluid p-5" />
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