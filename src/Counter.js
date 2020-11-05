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
    <div className="App">
      <h1>Multi-User-Counter</h1>
      <button type="button" className="btn btn-primary" onClick={decrement}>
        -
      </button>
      &nbsp;&nbsp;
      {doc.counter}&nbsp;&nbsp;
      <button type="button" className="btn btn-primary" onClick={increment}>
        +
      </button>
    </div>
  );
}
export default Counter;
