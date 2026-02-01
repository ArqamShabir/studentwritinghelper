import React, { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

const AllInOneConverter = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hex, setHex] = useState("");
  const [octal, setOctal] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const updateFromDecimal = (value) => {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setBinary(num.toString(2));
      setHex(num.toString(16).toUpperCase());
      setOctal(num.toString(8));
    } else {
      setBinary("");
      setHex("");
      setOctal("");
    }
  };

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    if (/^\\d*$/.test(value)) {
      setDecimal(value);
      updateFromDecimal(value);
    }
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    if (/^[01]*$/.test(value)) {
      setBinary(value);
      const num = parseInt(value, 2);
      if (!isNaN(num)) {
        setDecimal(num.toString(10));
        setHex(num.toString(16).toUpperCase());
        setOctal(num.toString(8));
      } else {
        setDecimal("");
        setHex("");
        setOctal("");
      }
    }
  };

  const handleHexChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[0-9A-F]*$/.test(value)) {
      setHex(value);
      const num = parseInt(value, 16);
      if (!isNaN(num)) {
        setDecimal(num.toString(10));
        setBinary(num.toString(2));
        setOctal(num.toString(8));
      } else {
        setDecimal("");
        setBinary("");
        setOctal("");
      }
    }
  };

  const handleOctalChange = (e) => {
    const value = e.target.value;
    if (/^[0-7]*$/.test(value)) {
      setOctal(value);
      const num = parseInt(value, 8);
      if (!isNaN(num)) {
        setDecimal(num.toString(10));
        setBinary(num.toString(2));
        setHex(num.toString(16).toUpperCase());
      } else {
        setDecimal("");
        setBinary("");
        setHex("");
      }
    }
  };

  const clearAll = () => {
    setBinary("");
    setDecimal("");
    setHex("");
    setOctal("");
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Binary to Decimal, Hex, and Octal Converter"
        description="Convert between binary, decimal, hexadecimal, and octal formats. Fast and accurate for students and developers."
        canonicalPath="/calculators/binary-to-decimal-converter"
        keywords="binary converter, decimal to binary, hex converter, octal converter"
        faqItems={[
          {
            question: "Can I convert between all four number systems?",
            answer:
              "Yes. Enter any value and the converter updates binary, decimal, hex, and octal instantly.",
          },
          {
            question: "What input formats are supported?",
            answer:
              "Use digits for decimal, 0 or 1 for binary, 0-7 for octal, and 0-9 plus A-F for hex.",
          },
          {
            question: "Is this calculator free?",
            answer: "Yes. It is free to use and works without sign-up.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Binary to Decimal Converter
              </h1>
              <h2 className="text-gray-600">
                Easily convert between Binary, Decimal, Hexadecimal, and Octal
                formats.
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-gray-700 font-medium">
                    Binary
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={binary}
                      onChange={handleBinaryChange}
                      placeholder="Enter Binary (e.g., 1010)"
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {binary && (
                      <button
                        onClick={() => copyToClipboard(binary)}
                        className="cursor-pointer rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                      >
                        Copy
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-gray-700 font-medium">
                    Decimal
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={decimal}
                      onChange={handleDecimalChange}
                      placeholder="Enter Decimal (e.g., 10)"
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {decimal && (
                      <button
                        onClick={() => copyToClipboard(decimal)}
                        className="cursor-pointer rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                      >
                        Copy
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-gray-700 font-medium">
                    Hexadecimal
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={hex}
                      onChange={handleHexChange}
                      placeholder="Enter Hex (e.g., A)"
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {hex && (
                      <button
                        onClick={() => copyToClipboard(hex)}
                        className="cursor-pointer rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                      >
                        Copy
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-gray-700 font-medium">
                    Octal
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={octal}
                      onChange={handleOctalChange}
                      placeholder="Enter Octal (e.g., 12)"
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {octal && (
                      <button
                        onClick={() => copyToClipboard(octal)}
                        className="cursor-pointer rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                      >
                        Copy
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex">
                <button
                  onClick={clearAll}
                  className="cursor-pointer rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
                >
                  Clear All
                </button>
              </div>

              <div className="mt-12 space-y-6 text-gray-800 leading-7">
                <h3 className="text-2xl font-semibold">
                  What is a Binary to Decimal, Hex, and Octal Converter?
                </h3>
                <p>
                  Our Binary to Decimal, Hexadecimal, and Octal Converter is an
                  essential online tool for anyone working with different
                  number systems. Whether you are a student, programmer, or tech
                  enthusiast, this tool helps you convert numbers quickly and
                  accurately between Binary (Base-2), Decimal (Base-10),
                  Hexadecimal (Base-16), and Octal (Base-8).
                </p>

                <h2 className="text-2xl font-semibold">
                  Why Use Our Number System Converter?
                </h2>
                <ul className="list-disc pl-5">
                  <li>
                    Instantly convert Binary to Decimal, Hex, and Octal with a
                    single click.
                  </li>
                  <li>
                    Supports Decimal to Binary, Hex, and Octal conversions.
                  </li>
                  <li>
                    Perfect for students learning computer science and digital
                    electronics.
                  </li>
                  <li>
                    Helps programmers work with memory addresses, color codes,
                    and binary data.
                  </li>
                  <li>Free, fast, and no login required.</li>
                </ul>

                <h2 className="text-2xl font-semibold">Who Can Benefit?</h2>
                <p>
                  This tool is ideal for computer science students, software
                  developers, network engineers, cryptographers, and educators.
                  Easily convert between various number systems used in
                  computing, programming, networking, and security.
                </p>

                <h2 className="text-2xl font-semibold">
                  Examples of Conversion
                </h2>

                <div className="overflow-x-auto rounded-lg border border-gray-300">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">
                          Input Format
                        </th>
                        <th className="border border-gray-300 p-2">Input</th>
                        <th className="border border-gray-300 p-2">Binary</th>
                        <th className="border border-gray-300 p-2">Decimal</th>
                        <th className="border border-gray-300 p-2">Hex</th>
                        <th className="border border-gray-300 p-2">Octal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Decimal</td>
                        <td className="border border-gray-300 p-2">255</td>
                        <td className="border border-gray-300 p-2">11111111</td>
                        <td className="border border-gray-300 p-2">255</td>
                        <td className="border border-gray-300 p-2">FF</td>
                        <td className="border border-gray-300 p-2">377</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Binary</td>
                        <td className="border border-gray-300 p-2">1010</td>
                        <td className="border border-gray-300 p-2">1010</td>
                        <td className="border border-gray-300 p-2">10</td>
                        <td className="border border-gray-300 p-2">A</td>
                        <td className="border border-gray-300 p-2">12</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">
                          Hexadecimal
                        </td>
                        <td className="border border-gray-300 p-2">1A3</td>
                        <td className="border border-gray-300 p-2">110100011</td>
                        <td className="border border-gray-300 p-2">419</td>
                        <td className="border border-gray-300 p-2">1A3</td>
                        <td className="border border-gray-300 p-2">643</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-semibold">Conclusion</h2>
                <p>
                  Whether you are converting numbers for learning, work, or
                  daily tasks, our Binary to Decimal, Hex, and Octal Converter
                  makes the process seamless. Save time, avoid mistakes, and
                  focus on understanding and applying the number systems that
                  power the digital world.
                </p>
              </div>
            </div>
          </main>
          <CalculatorSidebar currentSlug="binary-to-decimal-converter" />
        </div>
      </div>
    </div>
  );
};

export default AllInOneConverter;
