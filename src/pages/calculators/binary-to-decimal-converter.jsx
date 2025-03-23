import React, { useState } from "react";
import Head from "next/head";

const AllInOneConverter = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hex, setHex] = useState("");
  const [octal, setOctal] = useState("");

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // Function to update all fields based on Decimal input
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

  // Handle Decimal Input
  const handleDecimalChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // only digits
      setDecimal(value);
      updateFromDecimal(value);
    }
  };

  // Handle Binary Input
  const handleBinaryChange = (e) => {
    const value = e.target.value;
    if (/^[01]*$/.test(value)) { // only binary digits
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

  // Handle Hex Input
  const handleHexChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[0-9A-F]*$/.test(value)) { // only hex digits
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

  // Handle Octal Input
  const handleOctalChange = (e) => {
    const value = e.target.value;
    if (/^[0-7]*$/.test(value)) { // only octal digits
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

  // Clear all fields
  const clearAll = () => {
    setBinary("");
    setDecimal("");
    setHex("");
    setOctal("");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-screen-xl mx-auto">
      <Head>
  <title>Binary to Decimal, Hex, and Octal Converter | All-in-One Tool</title>
  <meta name="description" content="Easily convert between Binary, Decimal, Hexadecimal, and Octal number systems. Free online number system converter for students and developers." />
  <meta name="keywords" content="binary converter, decimal to binary, hex converter, octal converter, number system converter, free tool" />
  <meta name="author" content="Student Writing Helper" />

  {/* Open Graph for Social Media */}
  <meta property="og:title" content="Binary to Decimal, Hex, and Octal Converter" />
  <meta property="og:description" content="Convert between Binary, Decimal, Hex, and Octal easily with this free online tool." />
  <meta property="og:image" content="/images/converter-preview.png" /> {/* Add a preview image */}
  <meta property="og:url" content="https://studentwritinghelper.com/calculators/binary-to-decimal-converter" />
  <meta property="og:type" content="website" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Binary to Decimal, Hex, and Octal Converter" />
  <meta name="twitter:description" content="Convert between Binary, Decimal, Hex, and Octal easily with this free online tool." />
  <meta name="twitter:image" content="/images/converter-preview.png" />

  {/* Canonical URL for SEO */}
  <link rel="canonical" href="https://studentwritinghelper.com/calculators/binary-to-decimal-converter" />

  <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Binary to Decimal, Hex, and Octal Converter",
  "url": "https://studentwritinghelper.com/converter",
  "description": "Free online tool to convert numbers between Binary, Decimal, Hexadecimal, and Octal formats.",
  "image": "https://studentwritinghelper.com/images/converter-preview.png",
  "author": {
    "@type": "Person",
    "name": "Student Writing Helper"
  }
})}
</script>

</Head>

    <div className="max-w-4xl p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Binary to Decimal Converter</h1>
      <h2 className="text-gray-600">Easily convert between Binary, Decimal, Hexadecimal, and Octal formats.</h2>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Binary */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Binary</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={binary}
              onChange={handleBinaryChange}
              placeholder="Enter Binary (e.g., 1010)"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {binary && (
              <button
                onClick={() => copyToClipboard(binary)}
                className="px-3 cursor-pointer py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Copy
              </button>
            )}
          </div>
        </div>

        {/* Decimal */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Decimal</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={decimal}
              onChange={handleDecimalChange}
              placeholder="Enter Decimal (e.g., 10)"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {decimal && (
              <button
                onClick={() => copyToClipboard(decimal)}
                className="px-3 cursor-pointer py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Copy
              </button>
            )}
          </div>
        </div>

        {/* Hexadecimal */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Hexadecimal</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={hex}
              onChange={handleHexChange}
              placeholder="Enter Hex (e.g., A)"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {hex && (
              <button
                onClick={() => copyToClipboard(hex)}
                className="px-3 cursor-pointer py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Copy
              </button>
            )}
          </div>
        </div>

        {/* Octal */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Octal</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={octal}
              onChange={handleOctalChange}
              placeholder="Enter Octal (e.g., 12)"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {octal && (
              <button
                onClick={() => copyToClipboard(octal)}
                className="px-3 py-2  cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Copy
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Clear Button */}
      <div className="flex">
        <button
          onClick={clearAll}
          className="px-4 py-2 bg-gray-900 cursor-pointer text-white rounded-xl hover:bg-gray-800"
        >
          Clear All
        </button>
      </div>
      <div className="mt-12 space-y-6 text-gray-800 leading-7">
        <h3 className="text-2xl font-semibold">What is a Binary to Decimal, Hex, and Octal Converter?</h3>
        <p>
          Our Binary to Decimal, Hexadecimal, and Octal Converter is an essential online tool for anyone working with different number systems. Whether you are a student, programmer, or tech enthusiast, this tool helps you convert numbers quickly and accurately between Binary (Base-2), Decimal (Base-10), Hexadecimal (Base-16), and Octal (Base-8).
        </p>

        <h2 className="text-2xl font-semibold">Why Use Our Number System Converter?</h2>
        <ul className="list-disc pl-5">
          <li>Instantly convert Binary to Decimal, Hex, and Octal with a single click.</li>
          <li>Supports Decimal to Binary, Hex, and Octal conversions.</li>
          <li>Perfect for students learning computer science and digital electronics.</li>
          <li>Helps programmers work with memory addresses, color codes, and binary data.</li>
          <li>Free, fast, and no login required.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Who Can Benefit?</h2>
        <p>
          This tool is ideal for computer science students, software developers, network engineers, cryptographers, and educators. Easily convert between various number systems used in computing, programming, networking, and security.
        </p>

        <h2 className="text-2xl font-semibold">Examples of Conversion</h2>

<div className="overflow-x-auto rounded-lg border border-gray-300">
  <table className="min-w-full text-left border-collapse">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 p-2">Input Format</th>
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
        <td className="border border-gray-300 p-2">Hexadecimal</td>
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
          Whether you're converting numbers for learning, work, or daily tasks, our Binary to Decimal, Hex, and Octal Converter makes the process seamless. Save time, avoid mistakes, and focus on what really matters — understanding and applying the number systems that power our digital world!
        </p>
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

export default AllInOneConverter;
