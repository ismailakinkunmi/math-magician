import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Quote from "./components/Quote";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navBar">
        <div>
          <h1 className="title">Math Magicians</h1>
        </div>
        <div className="navLink">
          <Link to="/">
            Home <span>|</span>
          </Link>
          <Link to="/calculator">
            Calculator <span>|</span>
          </Link>
          <Link to="/quote">Quote</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
