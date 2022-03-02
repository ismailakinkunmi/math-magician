/* eslint-disable comma-dangle */
/* eslint-disable react/prefer-stateless-function */

import React from "react";
import "./Calculator.css";
import calculate from "../logic/calculate";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      operation: null,
      next: null,
    };
    this.calculatorHandler = this.calculatorHandler.bind(this);
  }

  calculatorHandler = (e) => {
    const data = calculate(this.state, e.target.innerText);
    this.setState(data);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <main className="main">
        <div className="container">
          <div className="output">
            {`${total || ""} ${operation || ""} ${next || ""}`}
          </div>
          <div
            className="input"
            role="button"
            tabIndex={0}
            onClick={this.calculatorHandler}
            onKeyDown={this.calculatorHandler}
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
  }
}

export default Calculator;
