import React, { useState } from "react";
import "./Calculator.css";
import calculate from "../logic/calculate";

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    operation: null,
    next: null,
  });
  const { total, next, operation } = state;
  const calculatorHandler = (e) => {
    const data = calculate(state, e.target.innerText);
    setState(data);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="output">
          {total || next
            ? `${total || ""} ${operation || ""} ${next || ""}`
            : 0}
        </div>
        <div
          className="input"
          role="button"
          tabIndex={0}
          onClick={calculatorHandler}
          onKeyDown={calculatorHandler}
        >
          <div className="row">
            <button type="button" className="btn" key="AC">
              AC
            </button>
            <button type="button" className="btn" key="+/-">
              +/-
            </button>
            <button type="button" className="btn" key="%">
              %
            </button>
            <button type="button" className="btn" key="÷">
              ÷
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn" key="7">
              7
            </button>
            <button type="button" className="btn" key="8">
              8
            </button>
            <button type="button" className="btn" key="9">
              9
            </button>
            <button type="button" className="btn" key="x">
              x
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn" key="4">
              4
            </button>
            <button type="button" className="btn" key="5">
              5
            </button>
            <button type="button" className="btn" key="6">
              6
            </button>
            <button type="button" className="btn" key="-">
              -
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn" key="1">
              1
            </button>
            <button type="button" className="btn" key="2">
              2
            </button>
            <button type="button" className="btn" key="3">
              3
            </button>
            <button type="button" className="btn" key="+">
              +
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn" key="0">
              0
            </button>
            <button type="button" className="btn" key=".">
              .
            </button>
            <button type="button" className="btn" key="=">
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
