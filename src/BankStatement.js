import React from "react";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";

const BankStatement = (props) => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const url = "/transactions/account_summary";
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
          setTransaction(json);
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
      <button
        type="submit"
        className="btn btn-info btn-sm fs-5"
        style={{ width: "75px", height: "50px" }}
      >
        <Link to="/main" className="text-white">
          {" "}
          Back{" "}
        </Link>
      </button>
      <table>
        <thead>
          <tr>
            <th> Email Address</th>
            <th> Amount</th>
            <th> Currency</th>
            <th> Date</th>
          </tr>
        </thead>
        <tbody>
        {transaction.map((transaction, index) => (
          <tr key={index}>
            <td> {transaction.reciever_email} </td>
            <td> {transaction.amount}</td>
            
            <td>{transaction.transaction_date}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankStatement;
document.body.classList.add("bg-dark");
