import React, { useState } from "react";
import "./style/button.css";

function Button(props) {
  return (
    <div className={`column-${props.cols} colJustify`}>
      <button className="calcButton" onClick={props.action}>
        {props.symbol}
      </button>
    </div>
  );
}

export default Button;
