import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [result, setResault] = useState("");
  const [current, setCurrent] = useState("");

  const reset = () => {
    setCurrent("");
    setResault("");
  };

  const calculate = () => {
    setCurrent(result)
    setResault("");
  };

  const addToCurrent = (symbol) => {
    if (current.includes("-") || current.includes("+") || current.includes("*") || current.includes("/")) {
      let calcCurrent = eval(String(current + symbol));
      setCurrent(current + symbol);
      setResault(calcCurrent);
    }
    setCurrent(current + symbol);
  };

  const erase = () => {
    let earseOneByOne =  current.slice(0, -1)
    let n = earseOneByOne.lastIndexOf('*');
    let result = earseOneByOne.substring(n + 1);
    setCurrent(earseOneByOne);
    let calcCurrent = eval(String(earseOneByOne + "0"))
    if(result.length && earseOneByOne.includes("*")){
      setResault(calcCurrent);
    } else {
      setResault("");
    }
  }

  const buttons = [
    { symbol: "C", cols: 2, action: reset },
    { symbol: "Hapus", cols: 1, action: erase },
    { symbol: "/", cols: 1, action: addToCurrent },
    { symbol: "7", cols: 1, action: addToCurrent },
    { symbol: "8", cols: 1, action: addToCurrent },
    { symbol: "9", cols: 1, action: addToCurrent },
    { symbol: "*", cols: 1, action: addToCurrent },
    { symbol: "4", cols: 1, action: addToCurrent },
    { symbol: "5", cols: 1, action: addToCurrent },
    { symbol: "6", cols: 1, action: addToCurrent },
    { symbol: "-", cols: 1, action: addToCurrent },
    { symbol: "1", cols: 1, action: addToCurrent },
    { symbol: "2", cols: 1, action: addToCurrent },
    { symbol: "3", cols: 1, action: addToCurrent },
    { symbol: "+", cols: 1, action: addToCurrent },
    { symbol: "0", cols: 2, action: addToCurrent },
    { symbol: ".", cols: 1, action: addToCurrent },
    { symbol: "=", cols: 1, action: calculate },
  ];

  return (
    <div className="calcContainer">
      <div className="calcContent">
        <div className="calcResult">
          <div className="result">
            <p>{current}</p>
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
