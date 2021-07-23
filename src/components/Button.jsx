import React, { useState } from "react";
import { FaMinus, FaTimes, FaDivide, FaPlus } from "react-icons/fa";
import "./style/button.css";

function Button(props) {
  return (
    <div className={`column-${props.cols} colJustify`}>
      <button className="calcButton" onClick={props.action}>
        {props.symbol == "/" ? (
          <FaDivide />
        ) : props.symbol == "+" ? (
          <FaPlus />
        ) : props.symbol == "-" ? (
          <FaMinus />
        ) : props.symbol == "*" ? (
          <FaTimes />
        ) : (
          props.symbol
        )}
      </button>
    </div>
  );
}

export default Button;
