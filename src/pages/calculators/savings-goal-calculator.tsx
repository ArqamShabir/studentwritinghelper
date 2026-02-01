import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function SavingsGoalCalculator() {
  const [goal, setGoal] = useState("");
  const [initial, setInitial] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{
    finalAmount: number;
    shortfall: number;
  } | null>(null);

  const calculateSavings = () => {
    const goalValue = parseFloat(goal);
    const initialValue = parseFloat(initial);
    const monthlyValue = parseFloat(monthly);
    const rateValue = parseFloat(rate) / 100 / 12;
    const yearsValue = parseFloat(years);
    const months = yearsValue * 12;

    if (
      !Number.isFinite(goalValue) ||
      !Number.isFinite(initialValue) ||
      !Number.isFinite(monthlyValue) ||
      !Number.isFinite(rateValue) ||
      !Number.isFinite(months) ||
      months <= 0
    ) {
      setResult(null);
      return;
    }

    let finalAmount = 0;
    if (rateValue === 0) {
      finalAmount = initialValue + monthlyValue * months;
    } else {
      const growth = Math.pow(1 + rateValue, months);
      finalAmount =
        initialValue * growth +
        monthlyValue * ((growth - 1) / rateValue);
    }

    const shortfall = Math.max(goalValue - finalAmount, 0);
    setResult({ finalAmount, shortfall });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Savings Goal Calculator - Plan Monthly Contributions"
        description="Estimate how much you will save with monthly contributions and interest. See if you reach your savings goal."
        canonicalPath="/calculators/savings-goal-calculator"
        keywords="savings goal calculator, monthly contribution, savings plan"
        faqItems={[
          {
            question: "Does this include interest?",
            answer:
              "Yes. Enter an annual interest rate to see how compounding affects your savings.",
          },
          {
            question: "What if I have no interest rate?",
            answer:
              "Use 0% to calculate savings with contributions only.",
          },
          {
            question: "Can I plan a goal date?",
            answer:
              "Yes. Enter the number of years until your goal date.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Savings Goal Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Plan contributions and see whether you will hit your savings goal.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Savings goal
                <input
                  type="number"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 20000"
                />
              </label>
              <label className="text-sm text-ink-600">
                Initial amount
                <input
                  type="number"
                  value={initial}
                  onChange={(e) => setInitial(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 2500"
                />
              </label>
              <label className="text-sm text-ink-600">
                Monthly contribution
                <input
                  type="number"
                  value={monthly}
                  onChange={(e) => setMonthly(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 300"
                />
              </label>
              <label className="text-sm text-ink-600">
                Annual rate (%)
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 4"
                />
              </label>
              <label className="text-sm text-ink-600 sm:col-span-2">
                Time to goal (years)
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 5"
                />
              </label>
            </div>
            <button
              onClick={calculateSavings}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate savings
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Projected balance:{" "}
                  <span className="font-semibold">
                    {result.finalAmount.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Remaining shortfall:{" "}
                  <span className="font-semibold">
                    {result.shortfall.toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="savings-goal-calculator" />
        </div>
      </div>
    </div>
  );
}
