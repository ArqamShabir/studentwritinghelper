    import { useState } from "react";
    import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
    import SeoHead from "@/components/SeoHead";
    import CalculatorSidebar from "@/components/CalculatorSidebar";

    export default function MeanMedianModeCalculator() {
    const [numbers, setNumbers] = useState("");
    const [stats, setStats] = useState(null);
    const [error, setError] = useState("");

    const calculateStats = () => {
        let numArray = numbers.split(",").map((num) => parseFloat(num.trim())).filter(n => !isNaN(n));
        
        if (numArray.length === 0) {
        setError("Please enter valid numbers separated by commas.");
        setStats(null);
        return;
        }
        
        setError("");
        
        let sorted = [...numArray].sort((a, b) => a - b);
        let mean = numArray.reduce((a, b) => a + b, 0) / numArray.length;
        let median = sorted.length % 2 === 0 ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2 : sorted[Math.floor(sorted.length / 2)];
        let modeMap = {};
        let maxFreq = 0;
        let mode = [];
        sorted.forEach(num => {
        modeMap[num] = (modeMap[num] || 0) + 1;
        if (modeMap[num] > maxFreq) {
            maxFreq = modeMap[num];
        }
        });

        for (let key in modeMap) {
            if (modeMap[key] === maxFreq) {
              mode.push(`${key} (x${maxFreq})`);
            }
          }

        if (mode.length === Object.keys(modeMap).length) {
              mode = ["No Mode"];
        }
        
        let range = Math.max(...numArray) - Math.min(...numArray);
        let geometricMean = Math.pow(numArray.reduce((a, b) => a * b, 1), 1 / numArray.length);
        let chartData = numArray.map((num, index) => ({ value: num, count: index + 1 }));
        setStats({ mean, median, mode, range, geometricMean, max: Math.max(...numArray), min: Math.min(...numArray), sum: numArray.reduce((a, b) => a + b, 0), count: numArray.length, sorted, chartData });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-screen-xl mx-auto">
          <SeoHead
        title="Mean, Median, Mode Calculator - Free Online Tool"
        description="Calculate mean, median, mode, range, and geometric mean easily with our online Mean, Median, Mode Calculator. Get instant results with a user-friendly interface."
        canonicalPath="/calculators/mean-median-mode-calculator"
        keywords="mean median mode calculator, statistics, range, geometric mean"
        faqItems={[
          {
            question: "What is mean, median, and mode?",
            answer:
              "Mean is the average, median is the middle value, and mode is the most frequent value.",
          },
          {
            question: "Can a data set have no mode?",
            answer:
              "Yes. If every value appears the same number of times, there is no mode.",
          },
          {
            question: "What is range?",
            answer:
              "Range is the difference between the largest and smallest values.",
          },
        ]}
      />
        <div className="p-6 w-full max-w-2xl">
          <h1 className="text-2xl font-bold md:text-3xl">Mean, Median, Mode Calculator</h1>
          <div className="py-6 bg-white">
            <input
              type="text"
              placeholder="Enter comma separated values"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-0 focus:border-gray-400"
            />
            <button className="w-full bg-gray-900 cursor-pointer text-white py-2 rounded-lg mt-4 active:scale-95 transition transform duration-150" onClick={calculateStats}>
              Calculate
            </button>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
    
          {stats && (
            <div className="py-4 bg-white">
              <div className={`flex items-center flex-col ${stats.chartData.length > 5 ? "flex-col" : "md:flex-row"} gap-10`}>
                {/* Table */}
                <div className={`w-full ${stats.chartData.length > 5 ? "w-full" : "md:w-1/2"}`}>
                  <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                      <tr className="bg-gray-100 text-xs md:text-base">
                        <th className="border border-gray-300 p-1 md:p-2">Statistic</th>
                        <th className="border border-gray-300 p-1 md:p-2">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Mean (Average)</td><td className="border border-gray-300 p-1 md:p-2">{stats.mean.toFixed(6)}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Median</td><td className="border border-gray-300 p-1 md:p-2">{stats.median}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Range</td><td className="border border-gray-300 p-1 md:p-2">{stats.range}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Mode</td><td className="border border-gray-300 p-1 md:p-2">{stats.mode.join(", ")}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Geometric Mean</td><td className="border border-gray-300 p-1 md:p-2">{stats.geometricMean.toFixed(6)}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Largest</td><td className="border border-gray-300 p-1 md:p-2">{stats.max}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Smallest</td><td className="border border-gray-300 p-1 md:p-2">{stats.min}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Sum</td><td className="border border-gray-300 p-1 md:p-2">{stats.sum}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Count</td><td className="border border-gray-300 p-1 md:p-2">{stats.count}</td></tr>
                      <tr><td className="border border-gray-300 p-1 md:p-2">Sorted Values</td><td className="border border-gray-300 p-1 md:p-2">{stats.sorted.join(", ")}</td></tr>
                    </tbody>
                  </table>
                </div>
    
                {/* Chart */}
                <div className={`w-full ${stats.chartData.length > 5 ? "w-full" : "md:w-1/2"}` }>
              <div className="h-64 md:h-80"> {/* This sets a responsive height */}
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="count" label={{ value: "Count", position: "insideBottom", offset: -5 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
              </div>
            </div>
          )}
          <div className="py-4">
      <h2 className="text-[1.75rem] font-bold text-gray-800 mb-6 md:text-3xl">
        Understanding Mean, Median, Mode, and Range in Statistics
      </h2>
      
      {/* Mean Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">What is Mean?</h3>
        <p className="text-gray-600 leading-relaxed">
          The term <strong>mean</strong> is widely used in mathematics and statistics. It refers to the
          <strong> arithmetic mean</strong>, commonly known as the average. The arithmetic mean of a data set
          is calculated by summing all values and dividing by the total number of values.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          The formula for calculating the arithmetic mean is:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-gray-800 text-lg font-mono text-center my-4">
          Mean = (sum of values) / N
        </div>
        <p className="text-gray-600 leading-relaxed">
          N is the total number of values in the data set.
        </p>
      </section>
      
      {/* Median Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">What is Median?</h3>
        <p className="text-gray-600 leading-relaxed">
          The <strong>median</strong> is the middle value in a sorted data set. If the number of values is odd,
          the median is the middle value. If it is even, the median is the average of the two middle values.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          Example:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-gray-800 text-lg font-mono text-center my-4">
          Data Set:<br/> 2, 10, 21, 23, 23, 38, 38 <br/>
          Median = 23 (Middle Value)
        </div>
      </section>
      
      {/* Mode Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">What is Mode?</h3>
        <p className="text-gray-600 leading-relaxed">
          The <strong>mode</strong> represents the value that appears most frequently in a data set.
          A data set can be unimodal (one mode), bimodal (two modes), or multimodal (more than two modes).
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-gray-800 text-lg font-mono text-center my-4">
          Data Set:<br/>  2, 10, 21, 23, 23, 38, 38 <br/>
          Modes = 23 and 38 (Both appear twice)
        </div>
      </section>
      
      {/* Range Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">What is Range?</h3>
        <p className="text-gray-600 leading-relaxed">
          The <strong>range</strong> is the difference between the highest and lowest values in a data set.
          It provides insight into the spread of the values.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-gray-800 text-lg font-mono text-center my-4">
          Data Set:<br/>  2, 10, 21, 23, 23, 38, 38 <br/>
          Range = 38 - 2 = 36
        </div>
      </section>
      
      <p className="text-gray-600 leading-relaxed">
        Understanding mean, median, mode, and range helps in analyzing and interpreting statistical data
        effectively, ensuring better decision-making in various fields.
      </p>
    </div>
          </div>
            <CalculatorSidebar currentSlug="mean-median-mode-calculator" />
        
        </div>
      );
      
      
    }
