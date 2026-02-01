import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
};

const daysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    if (!birthDate) {
      setResult(null);
      return;
    }
    const birth = new Date(birthDate);
    const target = targetDate ? new Date(targetDate) : new Date();

    if (Number.isNaN(birth.getTime()) || Number.isNaN(target.getTime())) {
      setResult(null);
      return;
    }

    if (target < birth) {
      setResult(null);
      return;
    }

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = target.getMonth() === 0 ? 11 : target.getMonth() - 1;
      const prevYear = prevMonth === 11 ? target.getFullYear() - 1 : target.getFullYear();
      days += daysInMonth(prevYear, prevMonth);
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalDays = Math.floor(
      (target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
    );

    setResult({ years, months, days, totalDays });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Age Calculator - Years, Months, Days"
        description="Calculate age by date of birth. See years, months, days, and total days instantly."
        canonicalPath="/calculators/age-calculator"
        keywords="age calculator, date of birth, age in years months days"
        faqItems={[
          {
            question: "Can I calculate age for a future date?",
            answer:
              "Yes. Use the target date field to calculate age at any future date.",
          },
          {
            question: "Is the result exact?",
            answer:
              "The calculator uses calendar differences for years, months, and days.",
          },
          {
            question: "What if I leave the target date empty?",
            answer:
              "The calculator uses today's date by default.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">Age Calculator</h1>
            <p className="mt-2 text-ink-600">
              Calculate age in years, months, and days.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Date of birth
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                />
              </label>
              <label className="text-sm text-ink-600">
                Target date (optional)
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                />
              </label>
            </div>
            <button
              onClick={calculateAge}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate age
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Age:{" "}
                  <span className="font-semibold">
                    {result.years} years, {result.months} months, {result.days} days
                  </span>
                </p>
                <p className="mt-1">
                  Total days:{" "}
                  <span className="font-semibold">{result.totalDays}</span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="age-calculator" />
        </div>
      </div>
    </div>
  );
}
