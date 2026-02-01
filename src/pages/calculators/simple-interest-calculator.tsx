import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{
    interest: number;
    total: number;
  } | null>(null);

  const calculateSimpleInterest = () => {
    const principalValue = parseFloat(principal);
    const rateValue = parseFloat(rate) / 100;
    const yearsValue = parseFloat(years);

    if (
      !Number.isFinite(principalValue) ||
      !Number.isFinite(rateValue) ||
      !Number.isFinite(yearsValue)
    ) {
      setResult(null);
      return;
    }

    const interest = principalValue * rateValue * yearsValue;
    const total = principalValue + interest;
    setResult({ interest, total });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Simple Interest Calculator - Interest and Total"
        description="Calculate simple interest earned over time with a clear breakdown of interest and total amount."
        canonicalPath="/calculators/simple-interest-calculator"
        keywords="simple interest calculator, interest earned, principal rate time"
        faqItems={[
          {
            question: "What is simple interest?",
            answer:
              "Simple interest is calculated only on the original principal, not on accumulated interest.",
          },
          {
            question: "What formula is used?",
            answer:
              "Simple interest is calculated as Principal x Rate x Time.",
          },
          {
            question: "Does this include compounding?",
            answer:
              "No. For compounding, use the compound interest calculator.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Simple Interest Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Quickly find interest earned using the simple interest formula.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Principal
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 1500"
                />
              </label>
              <label className="text-sm text-ink-600">
                Annual rate (%)
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 5"
                />
              </label>
              <label className="text-sm text-ink-600 sm:col-span-2">
                Time (years)
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 3"
                />
              </label>
            </div>
            <button
              onClick={calculateSimpleInterest}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate interest
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Interest earned:{" "}
                  <span className="font-semibold">{result.interest.toFixed(2)}</span>
                </p>
                <p className="mt-1">
                  Total amount:{" "}
                  <span className="font-semibold">{result.total.toFixed(2)}</span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="simple-interest-calculator" />
        </div>
      </div>
    </div>
  );
}
