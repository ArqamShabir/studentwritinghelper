import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function TrigonometricCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [angleMode, setAngleMode] = useState("DEG");
  const [graphFunc, setGraphFunc] = useState("");
  const [showGraph, setShowGraph] = useState(false);
  const [ans, setAns] = useState("");

  const toRadians = (deg) => (deg * Math.PI) / 180;

  // Handle input appending
  const handleButtonClick = (value) => {
    if (result && /[0-9.]/.test(value)) {
      setInput(value); // Start new input
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => setInput("");
  const handleDelete = () => setInput((prev) => prev.slice(0, -1));
  const toggleAngleMode = () => setAngleMode((prev) => (prev === "DEG" ? "RAD" : "DEG"));
  const insertAns = () => setInput((prev) => prev + "ANS");

  // Calculation & auto-bracket closure
  const compute = () => {
    try {
      if (input.includes("x")) {
        setGraphFunc(input);
        setShowGraph(true);
      } else {
        let expr = input
          .replace(/π/g, Math.PI)
          .replace(/ANS/g, ans || "0")
          .replace(/sin\(/g, angleMode === "DEG" ? "Math.sin(toRadians(" : "Math.sin(")
          .replace(/cos\(/g, angleMode === "DEG" ? "Math.cos(toRadians(" : "Math.cos(")
          .replace(/tan\(/g, angleMode === "DEG" ? "Math.tan(toRadians(" : "Math.tan(")
          .replace(/cot\(/g, angleMode === "DEG" ? "1/Math.tan(toRadians(" : "1/Math.tan(")
          .replace(/sec\(/g, angleMode === "DEG" ? "1/Math.cos(toRadians(" : "1/Math.cos(")
          .replace(/csc\(/g, angleMode === "DEG" ? "1/Math.sin(toRadians(" : "1/Math.sin(");
  
        const open = (expr.match(/\(/g) || []).length;
        const close = (expr.match(/\)/g) || []).length;
        if (open > close) expr += ")".repeat(open - close);
  
        const evaluated = eval(expr);
        setResult(evaluated);
        setAns(evaluated); // Store answer
        setInput(""); // Clear input after computing
        setShowGraph(false); // Hide graph if it was showing
      }
    } catch (error) {
      setResult("Error");
    }
  };
  
  // Graph Data Generator (Fixed)
  const generateGraphData = (func) => {
    const xValues = [];
    const yValues = [];
  
    for (let i = -360; i <= 360; i += 5) {
      let x = angleMode === "DEG" ? toRadians(i) : i;
      let y = null;
  
      try {
        // Replace x in user input
        let expr = func
          .replace(/π/g, Math.PI)
          .replace(/ANS/g, ans || "0")
          .replace(/x/g, `(${x})`)
          .replace(/sin\(/g, "Math.sin(")
          .replace(/cos\(/g, "Math.cos(")
          .replace(/tan\(/g, "Math.tan(")
          .replace(/cot\(/g, "1/Math.tan(")
          .replace(/sec\(/g, "1/Math.cos(")
          .replace(/csc\(/g, "1/Math.sin(");
  
        y = eval(expr);
  
        if (Math.abs(y) > 10) y = null; // Avoid very large values
      } catch {
        y = null;
      }
  
      xValues.push(i);
      yValues.push(y);
    }
  
    return {
      labels: xValues,
      datasets: [
        {
          label: func,
          data: yValues,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.2,
          pointRadius: 0,
        },
      ],
    };
  };
  

  // Handle graph function button click
  const handleGraph = (func) => {
    setGraphFunc(func);
    setShowGraph(true);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg space-y-4">
      {/* Display */}
      <div>
        {ans && <div className="text-right text-gray-500 text-sm">Ans: {ans}</div>}
        <div className="text-right text-2xl p-2 border rounded bg-gray-50 min-h-[48px]">{input || "0"}</div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-5 gap-2">
        {["sin(", "cos(", "tan(", "π", angleMode, "cot(", "sec(", "csc(", "ANS", "DEL", "(", ")", ".", "C", "="].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "=") compute();
              else if (btn === "C") handleClear();
              else if (btn === "DEL") handleDelete();
              else if (btn === angleMode) toggleAngleMode();
              else if (btn === "ANS") insertAns();
              else handleButtonClick(btn);
            }}
            className={`p-2 rounded ${
              btn === "="
                ? "bg-blue-500 text-white"
                : btn === "C"
                ? "bg-red-500 text-white"
                : btn === "DEL"
                ? "bg-yellow-400 text-white"
                : btn === angleMode
                ? "bg-gray-200"
                : "bg-gray-100"
            } hover:bg-opacity-80 transition cursor-pointer text-sm`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Numbers */}
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "+", "**", "%"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className="p-3 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer text-lg"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Graph Section */}
      <div className="flex justify-between items-center mt-2">
        {["sin", "cos", "tan", "cot", "sec", "csc"].map((func) => (
          <button
            key={func}
            onClick={() => handleGraph(func)}
            className="bg-green-400 text-white px-3 py-1 rounded hover:bg-green-500"
          >
            Plot {func}(x)
          </button>
        ))}
        <button
          onClick={() => setShowGraph(false)}
          className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500"
        >
          Hide Graph
        </button>
      </div>

      {/* Graph */}
      {showGraph && graphFunc && (
        <div className="w-full h-56">
          <Line data={generateGraphData(graphFunc)} />
        </div>
      )}
    </div>
  );
}
