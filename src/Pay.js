import React from "react";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";
const Pay = (props) => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleAmount = (value) => {
    setAmount(value);
  };
  const handleCurrency = (value) => {
    setCurrency(value);
  };
  const handlePay = () => {
    sendRequest("make_payment");
    setEmail("");
    setAmount("");
    setCurrency("");
  };

  const sendRequest = (path) => {
    fetch("/pay/transactions/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        amount: amount,
        currency: currency,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <body>
      <div className="Payment-form-container bg-secondary container justify-content-center card position-absolute top-50 start-50 translate-middle col-lg-5 col-md-8 col-sm-10 h-50">
        <form className="Payment-form p-4">
          <div className="Payment-form-content">
            <button type="submit" className="btn btn-info btn-sm fs-5">
              <Link to="/main" className="text-white">
                {" "}
                Back{" "}
              </Link>
            </button>
            <h3 className="Payment-form-title text-white">
              Please enter email, amount and currency
            </h3>
            <br />
            <div className="form-group mt-3">
              <input
                onChange={(i) => handleEmail(i.target.value)}
                class="mt-4 col-lg-12 col-sm-8 col-sm-6"
                type="text"
                className="form-control mt-1"
                placeholder="email address"
              />

              <div className="row">
                <div class="col-lg-6 col-md-6 col-sm-6 mt-3">
                  <input
                    onChange={(i) => handleAmount(i.target.value)}
                    type="number"
                    className="form-control mt-1"
                    placeholder="amount"
                    name="amount"
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 mt-4 text-white">
                  <input
                    onChange={(i) => handleCurrency(i.target.value)}
                    class="mt-4 col-lg-12 col-sm-8 col-sm-6"
                    type="text"
                    className="form-control mt-1"
                    placeholder="currency"
                  />
                </div>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary fs-5" onClick={handlePay}>
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};
export default Pay;
document.body.classList.add("bg-dark");
