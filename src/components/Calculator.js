/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <div className="output">0</div>
          <div className="input">
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
                ×
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
