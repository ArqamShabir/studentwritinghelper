import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function PercentageCalculator() {
  const [baseValue, setBaseValue] = useState("");
  const [percentValue, setPercentValue] = useState("");
  const [percentOfResult, setPercentOfResult] = useState<number | null>(null);

  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [percentChangeResult, setPercentChangeResult] = useState<number | null>(null);

  const [partValue, setPartValue] = useState("");
  const [percentValue2, setPercentValue2] = useState("");
  const [reversePercentResult, setReversePercentResult] = useState<number | null>(
    null
  );

  const calculatePercentOf = () => {
    const base = parseFloat(baseValue);
    const percent = parseFloat(percentValue);
    if (Number.isFinite(base) && Number.isFinite(percent)) {
      setPercentOfResult((base * percent) / 100);
    } else {
      setPercentOfResult(null);
    }
  };

  const calculatePercentChange = () => {
    const oldNum = parseFloat(oldValue);
    const newNum = parseFloat(newValue);
    if (Number.isFinite(oldNum) && Number.isFinite(newNum) && oldNum !== 0) {
      setPercentChangeResult(((newNum - oldNum) / oldNum) * 100);
    } else {
      setPercentChangeResult(null);
    }
  };

  const calculateReversePercent = () => {
    const part = parseFloat(partValue);
    const percent = parseFloat(percentValue2);
    if (Number.isFinite(part) && Number.isFinite(percent) && percent !== 0) {
      setReversePercentResult((part * 100) / percent);
    } else {
      setReversePercentResult(null);
    }
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Percentage Calculator - Percent of, Change, and Reverse"
        description="Calculate percent of a number, percent change, and reverse percentages. Fast, accurate, and mobile-friendly."
        canonicalPath="/calculators/percentage-calculator"
        keywords="percentage calculator, percent of a number, percent change, reverse percentage"
        faqItems={[
          {
            question: "How do I calculate percent of a number?",
            answer:
              "Multiply the number by the percent and divide by 100. Example: 25% of 80 is 20.",
          },
          {
            question: "What is percent change?",
            answer:
              "Percent change compares a new value to an old value. It is (new - old) / old * 100.",
          },
          {
            question: "How do I find the original number from a percent?",
            answer:
              "Divide the part by the percent and multiply by 100 to get the original number.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Percentage Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Solve three common percent problems in seconds. Each section works
              independently.
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-ink-900">
                Percent of a Number
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-ink-600">
                  Number
                  <input
                    type="number"
                    value={baseValue}
                    onChange={(e) => setBaseValue(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                    placeholder="e.g. 250"
                  />
                </label>
                <label className="text-sm text-ink-600">
                  Percent (%)
                  <input
                    type="number"
                    value={percentValue}
                    onChange={(e) => setPercentValue(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                    placeholder="e.g. 15"
                  />
                </label>
              </div>
              <button
                onClick={calculatePercentOf}
                className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Calculate
              </button>
              {percentOfResult !== null && (
                <p className="mt-3 rounded-lg bg-sand-100 p-3 text-sm font-semibold text-ink-900">
                  Result: {percentOfResult.toFixed(2)}
                </p>
              )}
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">
                Percent Change
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-ink-600">
                  Old value
                  <input
                    type="number"
                    value={oldValue}
                    onChange={(e) => setOldValue(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                    placeholder="e.g. 120"
                  />
                </label>
                <label className="text-sm text-ink-600">
                  New value
                  <input
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                    placeholder="e.g. 150"
                  />
                </label>
              </div>
              <button
                onClick={calculatePercentChange}
                className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Calculate
              </button>
              {percentChangeResult !== null && (
                <p className="mt-3 rounded-lg bg-sand-100 p-3 text-sm font-semibold text-ink-900">
                  Result: {percentChangeResult.toFixed(2)}%
                </p>
              )}
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-ink-900">
                Reverse Percentage
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-ink-600">
                  Part value
                  <input
                    type="number"
                    value={partValue}
                    onChange={(e) => setPartValue(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                    placeholder="e.g. 45"
                  />
                </label>
                <label className="text-sm text-ink-600">
                  Percent (%)
                  <input
                    type="number"
                    value={percentValue2}
                    onChange={(e) => setPercentValue2(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                    placeholder="e.g. 15"
                  />
                </label>
              </div>
              <button
                onClick={calculateReversePercent}
                className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Calculate
              </button>
              {reversePercentResult !== null && (
                <p className="mt-3 rounded-lg bg-sand-100 p-3 text-sm font-semibold text-ink-900">
                  Result: {reversePercentResult.toFixed(2)}
                </p>
              )}
            </section>
          </main>
          <CalculatorSidebar currentSlug="percentage-calculator" />
        </div>
      </div>
    </div>
  );
}
