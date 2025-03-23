import { useState } from "react";
import Image from 'next/image';
import Head from "next/head";

export default function Calculator() {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);
  const [useSample, setUseSample] = useState(false);
  const [frequencyTable, setFrequencyTable] = useState([]);
  const [error, setError] = useState("");
  

  const calculate = () => {
    setError(""); 
    setResult(null)
    setSteps([]);
    setFrequencyTable([]);

    if(numbers.trim() === "") {
        setError("Input cannot be empty. Please enter numbers.");
        return;
      }
      let values = numbers.split(",").map(Number).filter(n => !isNaN(n));
      if(values.length === 0) {
        setError("Invalid input. Please enter valid numbers separated by commas.");
        return;
      }

    // Calculate frequency table
    let freqMap = {};
    values.forEach(v => freqMap[v] = (freqMap[v] || 0) + 1);
    let total = values.length;
    let freqData = Object.entries(freqMap).map(([val, freq]) => ({
      value: val,
      freq,
      percent: ((freq / total) * 100).toFixed(1) + "%"
    }));
    setFrequencyTable(freqData);

    let N = values.length;
    let sum = values.reduce((a, b) => a + b, 0);
    let mean = values.reduce((a, b) => a + b, 0) / N;
    let squaredDifferences = values.map(x => Math.pow(x - mean, 2));
    let variance = squaredDifferences.reduce((a, b) => a + b, 0) / (useSample ? N - 1 : N);
    let stdDev = Math.sqrt(variance);

    let stepsBreakdown = squaredDifferences.map((diff, i) => (
      <span key={i}>
        ({values[i]} - {mean.toFixed(2)})²
        {i < squaredDifferences.length - 1 && " + "}
      </span>
    ));

    setSteps([
      <tr key="step1">
        <td nowrap="true">s<sup>2</sup> =&nbsp;</td>
        <td>
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td align="center">Σ(x<sub>i</sub> - x̄)<sup>2</sup></td>
              </tr>
              <tr>
                <td height="1" className="border-t border-black"></td>
              </tr>
              <tr>
                <td align="center">{useSample ? "N - 1" : "N"}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>,
      <tr key="step2">
        <td align="right">=&nbsp;</td>
        <td>
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td align="center">{stepsBreakdown}</td>
              </tr>
              <tr>
                <td height="1" className="border-t border-black"></td>
              </tr>
              <tr>
                <td align="center">{N} - {useSample ? "1" : "0"}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>,
      <tr key="step3">
        <td align="right">=&nbsp;</td>
        <td>
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td align="center">{squaredDifferences.reduce((a, b) => a + b, 0).toFixed(2)}</td>
              </tr>
              <tr>
                <td height="1" className="border-t border-black"></td>
              </tr>
              <tr>
                <td align="center">{N} - {useSample ? "1" : "0"}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>,
      <tr key="step4">
        <td align="right">=&nbsp;</td>
        <td>{variance.toFixed(6)}</td>
      </tr>,
      <tr key="sqrt">
        <td nowrap="true">s =&nbsp;</td>
        <td>
          √<span style={{ textDecoration: "overline" }}>{variance.toFixed(6)}</span>
        </td>
      </tr>,
      <tr key="final">
        <td align="right">=&nbsp;</td>
        <td>{stdDev.toFixed(6)}</td>
      </tr>
    ]);

    setResult({
      sum: sum,
      count: N,
      mean: mean.toFixed(2),
      variance: variance.toFixed(6),
      stdDev: stdDev.toFixed(6),
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-screen-xl mx-auto">
      <Head>
  <title>Standard Deviation Calculator - Quick & Accurate</title>
  <meta name="description" content="Easily calculate population and sample standard deviation with step-by-step explanations. Enter your numbers and get accurate results instantly!" />
  <meta name="keywords" content="standard deviation calculator, variance calculator, mean deviation, statistics, data analysis" />
  <link rel="canonical" href="https://studentwritinghelper.com/calculators/standard-deviation-calculator" />

</Head>
    <main className="max-w-lg w-full p-5 bg-white">
      <h1 className="text-2xl font-semibold mb-4">Standard Deviation Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers, comma-separated"
        className="w-full p-2 border rounded-md text-sm md:text-base"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <div className="flex gap-5 my-3">
        <label className="flex items-center">
          <input type="radio" name="stdType" checked={!useSample} onChange={() => setUseSample(false)} />
          <span className="ml-2">Population</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="stdType" checked={useSample} onChange={() => setUseSample(true)} />
          <span className="ml-2">Sample</span>
        </label>
      </div>
      <button className="w-full bg-gray-900 cursor-pointer text-white py-2 rounded-md active:scale-95 transition transform duration-150" onClick={calculate}>Calculate</button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <p><strong>Mean:</strong> {result.mean}</p>
          <p><strong>Variance:</strong> {result.variance}</p>
          <p><strong>Standard Deviation:</strong> {result.stdDev}</p>
          <p><strong>Count:</strong> {result.count}</p>
          <p><strong>Sum:</strong> {result.sum}</p>
        </div>
      )}

      {steps.length > 0 && (
        <div className="mt-4 bg-white p-3">
          <h3 className="text-lg font-semibold mb-2">Calculation Steps:</h3>
          <table cellPadding="0" cellSpacing="0">
            <tbody>{steps}</tbody>
          </table>
        </div>
      )}

      {frequencyTable.length > 0 && (
        <div className="mt-4 bg-white p-3">
          <h3 className="text-lg font-semibold mb-2">Frequency Table:</h3>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Value</th>
                <th className="border p-2">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {frequencyTable.map((row, i) => (
                <tr key={i}>
                  <td className="border p-2">{row.value}</td>
                  <td className="border p-2">{row.freq} ({row.percent})</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="max-w-3xl mx-auto py-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Understanding Standard Deviation</h2>
      <p className="mb-4">
        Standard deviation, commonly represented as <b>&#963;</b>, is a statistical measure that quantifies how much individual values in a dataset deviate from the mean (<b>&mu;</b>). A smaller standard deviation means data points are closer to the mean, while a larger one indicates greater variability. It plays a crucial role in fields like finance, quality control, and scientific research.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Population Standard Deviation</h2>
      <p className="mb-4">
        When analyzing an entire dataset rather than a sample, the population standard deviation is used. It is derived as the square root of the variance and calculated using the following formula:
      </p>
      
      <div className="flex py-4">
        <Image src="/sd1.jpg" width={200} height={70} alt="Population Standard Deviation Formula" loading="lazy" />
      </div>

      <p className="mt-4">Where:</p>
      <ul className="list-disc pl-6">
        <li><b>x<sub>i</sub></b> - Individual data value</li>
        <li><b>&mu;</b> - Mean (average) of the dataset</li>
        <li><b>N</b> - Total number of data points</li>
      </ul>

      <p className="mt-4">
        Consider the dataset: <b>2, 5, 7, 10, 12</b>. To find the standard deviation:
      </p>
      <p className="text-center font-mono text-lg mt-2">
        Mean: (2+5+7+10+12) / 5 = 7.2<br/>
        &#963; = &radic;<span className="underline">[(2 - 7.2)<sup>2</sup> + (5 - 7.2)<sup>2</sup> + ... + (12 - 7.2)<sup>2</sup>]/5</span><br/>
        &#963; ≈ 3.87
      </p>

      <h2 className="text-2xl font-semibold mt-6">Sample Standard Deviation</h2>
      <p className="mb-4">
        If we analyze a subset of data rather than the entire population, we use the sample standard deviation, denoted by <b>s</b>. The key difference is the division by (N-1) instead of N, correcting for bias in smaller samples.
      </p>
      
      <div className="flex py-4">
        <Image src="/sd2.jpg" width={220} height={80} alt="Sample Standard Deviation Formula" loading="lazy" />
      </div>

      <p className="mt-4">Where:</p>
      <ul className="list-disc pl-6">
        <li><b>x<sub>i</sub></b> - A data value in the sample</li>
        <li><b>x&#772;</b> - Sample mean</li>
        <li><b>N</b> - Sample size</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Applications of Standard Deviation</h2>
      <p className="mb-4">
        Standard deviation is widely applied across various industries, including:
      </p>
      <ul className="list-disc pl-6">
        <li><b>Quality Control</b>: Ensuring consistency in product manufacturing.</li>
        <li><b>Weather Analysis</b>: Comparing climate variations across regions.</li>
        <li><b>Finance</b>: Assessing investment risks based on price fluctuations.</li>
      </ul>

      <p className="mt-6">
        Understanding standard deviation helps in making data-driven decisions, offering insights into variability, predictability, and trends within datasets.
      </p>
    </div>
    </main>
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
}
