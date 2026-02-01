import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [compounds, setCompounds] = useState("12");
  const [result, setResult] = useState<{
    finalAmount: number;
    interestEarned: number;
  } | null>(null);

  const calculateCompound = () => {
    const principalValue = parseFloat(principal);
    const rateValue = parseFloat(rate) / 100;
    const yearsValue = parseFloat(years);
    const compoundsValue = parseFloat(compounds);

    if (
      !Number.isFinite(principalValue) ||
      !Number.isFinite(rateValue) ||
      !Number.isFinite(yearsValue) ||
      !Number.isFinite(compoundsValue) ||
      principalValue < 0 ||
      yearsValue < 0 ||
      compoundsValue <= 0
    ) {
      setResult(null);
      return;
    }

    const finalAmount =
      principalValue *
      Math.pow(1 + rateValue / compoundsValue, compoundsValue * yearsValue);
    const interestEarned = finalAmount - principalValue;

    setResult({ finalAmount, interestEarned });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Compound Interest Calculator - Growth Over Time"
        description="Calculate how savings grow with compound interest. Adjust rate, term, and compounding frequency."
        canonicalPath="/calculators/compound-interest-calculator"
        keywords="compound interest calculator, savings growth, investment calculator"
        faqItems={[
          {
            question: "What is compound interest?",
            answer:
              "Compound interest means interest is added to the principal, so future interest is earned on a higher balance.",
          },
          {
            question: "How does compounding frequency affect growth?",
            answer:
              "More frequent compounding increases the final amount slightly over time.",
          },
          {
            question: "Does this include contributions?",
            answer:
              "No. This calculator focuses on a single starting principal without ongoing contributions.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Compound Interest Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              See how your money grows with compounding over time.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Principal
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 5000"
                />
              </label>
              <label className="text-sm text-ink-600">
                Annual rate (%)
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 4.5"
                />
              </label>
              <label className="text-sm text-ink-600">
                Years
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 10"
                />
              </label>
              <label className="text-sm text-ink-600">
                Compounds per year
                <input
                  type="number"
                  value={compounds}
                  onChange={(e) => setCompounds(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 12"
                />
              </label>
            </div>
            <button
              onClick={calculateCompound}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate growth
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Final amount:{" "}
                  <span className="font-semibold">
                    {result.finalAmount.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Interest earned:{" "}
                  <span className="font-semibold">
                    {result.interestEarned.toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="compound-interest-calculator" />
        </div>
      </div>
    </div>
  );
}
