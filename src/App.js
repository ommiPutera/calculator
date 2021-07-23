import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import { FaEquals, FaMinus } from 'react-icons/fa'
import { MdBackspace } from 'react-icons/md'
import "./App.css";

function App() {
  const [result, setResault] = useState("");
  const [current, setCurrent] = useState("");
  const [showCurrent, setShowCurrent] = useState("");

  const reset = () => {
    setCurrent("");
    setShowCurrent("");
    setResault("");
  };

  const calculate = () => {
    setCurrent("");
    setShowCurrent("");
    setResault(result);
  };

  const addToCurrent = (symbol) => {
    if (current.includes("-") || current.includes("+") || current.includes("*") || current.includes("/")) {
      let calcCurrent = eval(String(current + symbol));
      console.log(current, symbol)
      setCurrent(current + symbol);
      setResault(calcCurrent);
      console.log(calcCurrent)
    }
    if(symbol === "*"){
      setShowCurrent(current + "x")
    } else if (symbol === "/") {
      setShowCurrent(current + "÷")
    } else {
      setShowCurrent(showCurrent + symbol);
    }
    setCurrent(current + symbol);
    console.log(current, "hai")
    console.log(showCurrent)
  };

  const erase = () => {
    let earseOneByOne = current.slice(0, -1)
    let earseOneByOneShow = showCurrent.slice(0, -1)
    let n = earseOneByOne.lastIndexOf('*');
    let result = earseOneByOne.substring(n + 1);
    setCurrent(earseOneByOne);
    setShowCurrent(earseOneByOneShow);
    let calcCurrent = eval(String(earseOneByOne + "0"))
    if(result.length && earseOneByOne.includes("*")){
      setResault(calcCurrent);
    } else {
      setResault("");
    }
  }

  const buttons = [
    { symbol: "Clear", cols: 2, color: 2, action: reset },
    { symbol: <MdBackspace />, cols: 1, color: 2, action: erase },
    { symbol: "/", cols: 1, color: 2, action: addToCurrent },
    { symbol: "7", cols: 1, color: 1, action: addToCurrent },
    { symbol: "8", cols: 1, color: 1, action: addToCurrent },
    { symbol: "9", cols: 1, color: 1, action: addToCurrent },
    { symbol: "*", cols: 1, color: 2, action: addToCurrent },
    { symbol: "4", cols: 1, color: 1, action: addToCurrent },
    { symbol: "5", cols: 1, color: 1, action: addToCurrent },
    { symbol: "6", cols: 1, color: 1, action: addToCurrent },
    { symbol: "-", cols: 1, color: 2, action: addToCurrent },
    { symbol: "1", cols: 1, color: 1, action: addToCurrent },
    { symbol: "2", cols: 1, color: 1, action: addToCurrent },
    { symbol: "3", cols: 1, color: 1, action: addToCurrent },
    { symbol: "+", cols: 1, color: 2, action: addToCurrent },
    { symbol: "0", cols: 2, color: 1, action: addToCurrent },
    { symbol: ".", cols: 1, color: 1, action: addToCurrent },
    { symbol: <FaEquals />, cols: 1, color: 3, action: calculate },
  ];

  return (
    <div className="calcContainer">
      <div className="calcContent">
        <div className="calcResult">
          <div className="result">
            <p>{showCurrent}</p>
          </div>
          <div className="calculation">
            <p>{result}</p>
          </div>
        </div>
        <div>
          {buttons.map((btn, i) => {
            return (
              <Button
                key={i}
                symbol={btn.symbol}
                cols={btn.cols}
                color={btn.color}
                action={() => btn.action(btn.symbol)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
