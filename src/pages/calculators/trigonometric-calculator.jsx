import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function TrigonometricCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [angleMode, setAngleMode] = useState("DEG");
  const [graphFunc, setGraphFunc] = useState("");
  const [showGraph, setShowGraph] = useState(false);
  const [ans, setAns] = useState("");

  const toRadians = (deg) => (deg * Math.PI) / 180;

  const handleButtonClick = (value) => {
    if (result && /[0-9.]/.test(value)) {
      setInput(value);
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => setInput("");
  const handleDelete = () => setInput((prev) => prev.slice(0, -1));
  const toggleAngleMode = () =>
    setAngleMode((prev) => (prev === "DEG" ? "RAD" : "DEG"));
  const insertAns = () => setInput((prev) => prev + "ANS");

  const compute = () => {
    try {
      if (input.includes("x")) {
        setGraphFunc(input);
        setShowGraph(true);
      } else {
        let expr = input
          .replace(/PI/g, Math.PI)
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
        setAns(evaluated);
        setInput("");
        setShowGraph(false);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const generateGraphData = (func) => {
    const xValues = [];
    const yValues = [];

    for (let i = -360; i <= 360; i += 5) {
      let x = angleMode === "DEG" ? toRadians(i) : i;
      let y = null;

      try {
        let expr = func
          .replace(/PI/g, Math.PI)
          .replace(/ANS/g, ans || "0")
          .replace(/x/g, `(${x})`)
          .replace(/sin\(/g, "Math.sin(")
          .replace(/cos\(/g, "Math.cos(")
          .replace(/tan\(/g, "Math.tan(")
          .replace(/cot\(/g, "1/Math.tan(")
          .replace(/sec\(/g, "1/Math.cos(")
          .replace(/csc\(/g, "1/Math.sin(");

        y = eval(expr);
        if (Math.abs(y) > 10) y = null;
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

  const handleGraph = (func) => {
    setGraphFunc(func);
    setShowGraph(true);
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Trigonometric Calculator - Sin, Cos, Tan, and More"
        description="Calculate trigonometric values, switch between degrees and radians, and visualize functions."
        canonicalPath="/calculators/trigonometric-calculator"
        keywords="trigonometric calculator, sin cos tan, radians, degrees"
        faqItems={[
          {
            question: "Can I switch between degrees and radians?",
            answer:
              "Yes. Use the DEG/RAD toggle to change the angle mode before calculating.",
          },
          {
            question: "How do I use PI?",
            answer:
              "Use the PI button to insert the value of pi into the expression.",
          },
          {
            question: "Can I graph functions?",
            answer: "Yes. Expressions that include x will display a graph.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <div className="w-full max-w-lg space-y-4">
              <div>
                {ans && (
                  <div className="text-right text-gray-500 text-sm">
                    Ans: {ans}
                  </div>
                )}
                <div className="min-h-[48px] rounded border bg-gray-50 p-2 text-right text-2xl">
                  {input || "0"}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {[
                  "sin(",
                  "cos(",
                  "tan(",
                  "PI",
                  angleMode,
                  "cot(",
                  "sec(",
                  "csc(",
                  "ANS",
                  "DEL",
                  "(",
                  ")",
                  ".",
                  "C",
                  "=",
                ].map((btn) => (
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
                    className={`cursor-pointer rounded p-2 text-sm transition hover:bg-opacity-80 ${
                      btn === "="
                        ? "bg-blue-500 text-white"
                        : btn === "C"
                        ? "bg-red-500 text-white"
                        : btn === "DEL"
                        ? "bg-yellow-400 text-white"
                        : btn === angleMode
                        ? "bg-gray-200"
                        : "bg-gray-100"
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[
                  "7",
                  "8",
                  "9",
                  "/",
                  "4",
                  "5",
                  "6",
                  "*",
                  "1",
                  "2",
                  "3",
                  "-",
                  "0",
                  "+",
                  "**",
                  "%",
                ].map((btn) => (
                  <button
                    key={btn}
                    onClick={() => handleButtonClick(btn)}
                    className="cursor-pointer rounded bg-gray-200 p-2 text-sm hover:bg-gray-300"
                  >
                    {btn}
                  </button>
                ))}
              </div>

              {result && (
                <div className="rounded bg-gray-100 p-2 text-sm">
                  Result: {result}
                </div>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => handleGraph(input)}
                  className="rounded bg-indigo-500 px-4 py-2 text-sm text-white hover:bg-indigo-600"
                >
                  Graph
                </button>
                <button
                  onClick={handleClear}
                  className="rounded bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-900"
                >
                  Clear
                </button>
              </div>

              {showGraph && (
                <div className="mt-4">
                  <Line data={generateGraphData(graphFunc)} />
                </div>
              )}
            </div>
          </main>
          <CalculatorSidebar currentSlug="trigonometric-calculator" />
        </div>
      </div>
    </div>
  );
}
