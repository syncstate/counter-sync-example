import React from "react";
import { useDoc } from "@syncstate/react";
import "./App.css";

function Counter() {
  const [doc, setDoc] = useDoc();

  const increment = () => {
    setDoc((doc) => {
      doc.counter++;
    });
  };

  const decrement = () => {
    setDoc((doc) => {
      doc.counter--;
    });
  };

  return (
    <div className="main">
      <h1>Multi User Counter</h1>
      <br></br>
      <p class="number">
        {doc.counter}
        <sub>/times</sub>
      </p>
      <br></br>
      <button type="button" className="btn btn-danger" onClick={decrement}>
        -
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" className="btn btn-danger" onClick={increment}>
        +
      </button>
    </div>
  );
}
export default Counter;
