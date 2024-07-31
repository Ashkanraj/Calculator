import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        setDisplay(evaluateExpression(display));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const evaluateExpression = (expression) => {
    try {
      const result = Function('"use strict"; return (' + expression + ")")();
      return result.toString();
    } catch {
      return "Error";
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "*",
    "4",
    "5",
    "6",
    "-",
    "+",
    "1",
    "2",
    "3",
    "(",
    ")",
    ".",
    "0",
    "C",
    "=",
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-2/3 min-w-80 max-w-[700px]">
        <div className="mb-4 text-right text-white text-3xl font-mono h-12 overflow-x-auto">
          {display || "0"}
        </div>
        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          {buttons.map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleButtonClick(symbol)}
              className={`p-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition-colors ${
                symbol === "="
                  ? "col-span-2 bg-orange-500 hover:bg-orange-600"
                  : ""
              }`}
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
