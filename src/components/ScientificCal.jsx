import React, { useState } from "react";

const ScientificCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [lastAns, setLastAns] = useState("");

  // Handle button clicks
  const handleButtonClick = (value) => {
    if (input === "Error" || input === result) {
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Factorial helper function
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  // Calculation function
  const calculateResult = () => {
    try {
      let expr = input
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E")
        .replace(/\^/g, "**")
        .replace(/abs\(/g, "Math.abs(")
        .replace(/exp\(/g, "Math.exp(")
        .replace(/ANS/g, lastAns) // Replace 'ANS' as value
        .replace(/(\d+)!/g, (_, n) => factorial(parseInt(n))); // Handle factorial

      // Auto-close brackets
      const openBrackets = (expr.match(/\(/g) || []).length;
      const closeBrackets = (expr.match(/\)/g) || []).length;
      expr += ")".repeat(openBrackets - closeBrackets);

      let evalResult = eval(expr);
      evalResult = Math.round((evalResult + Number.EPSILON) * 1e12) / 1e12;

      setLastAns(evalResult);
      setResult(evalResult);
      setInput(""); // Clear input after result
    } catch {
      setResult("Error");
      setInput("Error");
    }
  };

  // Clear and Backspace handlers
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Button layout
  const buttons = [
    "7", "8", "9", "/", "sin(",
    "4", "5", "6", "*", "cos(",
    "1", "2", "3", "-", "tan(",
    "0", ".", "+", "(", ")",
    "π", "e", "^", "√(", "log(",
    "ln(", "abs(", "exp(", "%", "!",
    "ANS", "C", "←", "="
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-screen-xl mx-auto">
      <div className="pt-8">
      <h1 className="text-3xl font-bold mb-4">Scientific Calculator</h1>
      <p className="mb-4 text-gray-700">
      Achieve precise results effortlessly with our advanced scientific calculator. Designed for both students and professionals, it makes solving complex math problems simple. Whether you're working with algebra, calculus, or engineering, you can rely on it for accurate and efficient solutions.</p>
          <div className="max-w-md my-10 py-8 px-6 rounded-xl shadow-2xl bg-gray-900">
      <div className="bg-gray-100 p-4 rounded-xl mb-4 shadow-inner">
        {result && (
          <div className="text-gray-500 text-right text-sm mb-1">Ans: {result}</div>
        )}
        <input
          type="text"
          value={input}
          placeholder="0"
          readOnly
          className="w-full bg-gray-100 text-right text-2xl outline-none"
        />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() =>
              btn === "="
                ? calculateResult()
                : btn === "C"
                ? handleClear()
                : btn === "←"
                ? handleBackspace()
                : handleButtonClick(btn)
            }
            className={`py-2 rounded cursor-pointer ${
              btn === "="
                ? "bg-blue-900 text-white"
                : btn === "C"
                ? "bg-red-700 text-white"
                : btn === "←"
                ? "bg-yellow-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:opacity-90 transition-all`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
    </div>
    <div className="w-full lg:w-1/2  bg-gray-100 p-4 shadow-md rounded-xl h-fit " style={{visibility:'hidden', height:'0'}}>
        <h2 className="text-xl font-semibold mb-4">Recommended Calculators</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#" className="hover:underline">CGPA Calculator</a></li>
          <li><a href="#" className="hover:underline">Weighted GPA Calculator</a></li>
          <li><a href="#" className="hover:underline">Final Grade Calculator</a></li>
          <li><a href="#" className="hover:underline">Backlog GPA Estimator</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ScientificCalculator;
