import React from "react";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";
import logo from "./epay.png";

const Main = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "/account/user";
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const json = await response.json();
          setUser(json);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (e) {
        console.log("Error fetching data:", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Main-form-container bg-secondary container text-white justify-content-center card position-absolute top-50 start-50 translate-middle col-lg-5 col-md-8 col-sm-10 h-50">
      <form className="card-body p-4">
        <div className="Main-form-content">
          <h1 className="card-header-pills">Welcome to EPay</h1>
          <h3 className="card-subtitle">Epay, not a bank!</h3>
          <p className="card-text">
            Send money 24/7 for free, pay your bills, and manage your budget.
          </p>
          <div className="form-group mt-3 d-flex align-items-center">
            <img
              style={{ mixBlendMode: "multiply" }}
              src={logo}
              className="w-25 me-3"
              alt="Uygulama Logosu"
            />

            {product.map((product) => (
              <div>
                <h4 className="text-white">Remainder: {user.email} TL</h4>
                <p className="text-white fs-5">Email Address: {user.email}</p>
              </div>
            ))}
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
            <button type="button" className="form-control mt-1 btn btn-primary">
              <Link to="/bankstatement" className="text-white">
                {" "}
                view bank statement{" "}
              </Link>
            </button>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
            <button type="button" className="form-control mt-1 btn btn-primary">
              <Link to="/pay" className="text-white">
                {" "}
                make payment{" "}
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Main;
document.body.classList.add("bg-dark");
