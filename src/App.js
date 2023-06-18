import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";
import Pay from "./Pay";
import BankStatement from "./BankStatement";
import Navbar from "./Navbar";

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/bankstatement" element={<BankStatement />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
