import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbarr = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark nav text-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0 ul1"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <li>
                <Link
                  to="/"
                  className="navbar-brand active text-white"
                  style={{ fontSize: "1.4em" }}
                >
                  Epay
                </Link>
              </li>
              <li></li>
            </div>
            <li>
              <Link
                to="/main"
                className="nav-link text-white"
                style={{ fontSize: "1.4em" }}
              >
                Main
              </Link>
            </li>

            <li>
              <Link
                to="/pay"
                className="nav-link text-white"
                style={{ fontSize: "1.4em" }}
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/bankstatement"
                className="nav-link text-white"
                style={{ fontSize: "1.4em" }}
              >
                Bank Statement
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="nav-link text-white"
                style={{ fontSize: "1.4em" }}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
