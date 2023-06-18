import React from "react";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    sendRequest("login");
    setEmail("");
    setPassword("");
    navigate("/");
  };

  const sendRequest = (path) => {
    fetch("/account/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("tokenKey", result.csrfmiddlewaretoken);
        localStorage.setItem("email", result.email);
      })
      .catch((err) => console.log(err));
  };
  return (
    <body>
      <div className="Login-form-container position-absolute top-50 start-50 translate-middle">
        <form className="Login-form p-4 text-white">
          <div className="Login-form-content">
            <h3 className="Login-form-title text-white">Sign In to EPay</h3>
            <div className=" form-group mt-3 text-center text-white">
              Not registered yet?{" "}
              <span
                className="link-primary text-white"
                style={{ cursor: "pointer" }}
              >
                <Link to="/signup"> Sign up </Link>
              </span>
            </div>
            <div className="form-group mt-3 text-white">
              <label>Email address</label>
              <input type="email" className="form-control mt-1" onChange={(i) => handleEmail(i.target.value)} />
            </div>
            <div className="form-group mt-3 text-white">
              <label>Password</label>
              <input type="password" className="form-control mt-1" onChange={(i) => handlePassword(i.target.value)} />
            </div>
            <div className="d-grid gap-2 mt-3 text-white">
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                <Link to="/main" className="text-white">
                  {" "}
                  Sign In{" "}
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};
export default Login;
