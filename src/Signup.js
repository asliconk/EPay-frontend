import React from "react";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstName = (value) => {
    setFirstname(value);
  };
  const handleLastName = (value) => {
    setLastname(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleRegister = () => {
    sendRequest("register");
    setFirstname("");
    setLastname("");
    setPassword("");
    setEmail("");
  };

  const sendRequest = (path) => {
    fetch("/account/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        password: password,
        email: email,
        para_birimi_secimi:"TL"
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" Signup-form-container position-absolute top-50 start-50 translate-middle">
      <form className="Signup-form p-4">
        <div className="Signup-form-content">
          <h3 className="Signup-form-title text-white">
            Sign Up, Create Account
          </h3>
          <div className="form-group mt-3 text-center text-white">
            Already registered?{" "}
            <span
              className="link-primary text-white"
              style={{ cursor: "pointer" }}
            >
              <Link to="/login"> Log in </Link>
            </span>
          </div>
          <div className="form-group mt-3 text-white">
            <label>First Name</label>
            <input type="text" className="form-control mt-1" onChange={(i) => handleFirstName(i.target.value)}/>
          </div>
          <div className="form-group mt-3 text-white">
            <label>Last Name</label>
            <input type="text" className="form-control mt-1" onChange={(i) => handleLastName(i.target.value)}/>
          </div>
          <div className="form-group mt-3 text-white">
            <label>Email address</label>
            <input type="email" className="form-control mt-1"onChange={(i) => handleEmail(i.target.value)} />
          </div>
          <div className="form-group mt-3 text-white">
            <label>Password</label>
            <input type="password" className="form-control mt-1" onChange={(i) => handlePassword(i.target.value)} />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary text-white" onClick={handleRegister}>
              <Link to="/login" className="text-white">
                {" "}
                Sign Up{" "}
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
