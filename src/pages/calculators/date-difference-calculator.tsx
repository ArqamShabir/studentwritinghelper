import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

type DateDiffResult = {
  totalDays: number;
  totalWeeks: number;
  totalMonthsApprox: number;
};

export default function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState<DateDiffResult | null>(null);

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setResult(null);
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      setResult(null);
      return;
    }
    const diffMs = end.getTime() - start.getTime();
    if (diffMs < 0) {
      setResult(null);
      return;
    }
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = totalDays / 7;
    const totalMonthsApprox = totalDays / 30.44;
    setResult({ totalDays, totalWeeks, totalMonthsApprox });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Date Difference Calculator - Days Between Dates"
        description="Find the number of days between two dates. Includes weeks and months estimates."
        canonicalPath="/calculators/date-difference-calculator"
        keywords="date difference calculator, days between dates, weeks between dates"
        faqItems={[
          {
            question: "How is the date difference calculated?",
            answer:
              "The calculator measures the exact number of days between the selected dates.",
          },
          {
            question: "Why are months approximate?",
            answer:
              "Months have different lengths. We show an average month length for a quick estimate.",
          },
          {
            question: "What if the end date is before the start date?",
            answer:
              "The calculator will not return a result if the end date is earlier than the start date.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Date Difference Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Compare two dates and see the time between them.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Start date
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                />
              </label>
              <label className="text-sm text-ink-600">
                End date
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                />
              </label>
            </div>
            <button
              onClick={calculateDifference}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate difference
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Total days:{" "}
                  <span className="font-semibold">{result.totalDays}</span>
                </p>
                <p className="mt-1">
                  Total weeks:{" "}
                  <span className="font-semibold">
                    {result.totalWeeks.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Total months (approx):{" "}
                  <span className="font-semibold">
                    {result.totalMonthsApprox.toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="date-difference-calculator" />
        </div>
      </div>
    </div>
  );
}
