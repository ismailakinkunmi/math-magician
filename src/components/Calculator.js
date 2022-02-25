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
            <button type="button" className="btn">
              AC
            </button>
            <button type="button" className="btn">
              +/-
            </button>
            <button type="button" className="btn">
              %
            </button>
            <button type="button" className="btn">
              ÷
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn">
              7
            </button>
            <button type="button" className="btn">
              8
            </button>
            <button type="button" className="btn">
              9
            </button>
            <button type="button" className="btn">
              x
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn">
              4
            </button>
            <button type="button" className="btn">
              5
            </button>
            <button type="button" className="btn">
              6
            </button>
            <button type="button" className="btn">
              -
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn">
              1
            </button>
            <button type="button" className="btn">
              2
            </button>
            <button type="button" className="btn">
              3
            </button>
            <button type="button" className="btn">
              +
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn">
              0
            </button>
            <button type="button" className="btn">
              .
            </button>
            <button type="button" className="btn">
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
