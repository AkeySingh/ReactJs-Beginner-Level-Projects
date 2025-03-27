import React from "react";
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  IncrementCounter,
  DecrementCounter,
} from "../Store/Features/CounterSlice";

function Counter() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.CounterSlice || { counter: 0 });

  const handleIncrement = () => {
    dispatch(IncrementCounter());
  };
  const handleDecrement = () => {
    dispatch(DecrementCounter());
  };

  console.log(data);
  return (
    <div className="counter">
      <button className="button " onClick={handleDecrement}>
        {" "}
        −{" "}
      </button>
      <button className="counter-button "> {data.counter}</button>
      <button className="button " onClick={handleIncrement}>
        {" "}
        ✚{" "}
      </button>
    </div>
  );
}

export default Counter;
