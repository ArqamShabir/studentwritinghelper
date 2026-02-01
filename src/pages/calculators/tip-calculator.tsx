import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("15");
  const [people, setPeople] = useState("1");
  const [result, setResult] = useState<{
    tipAmount: number;
    total: number;
    perPerson: number;
  } | null>(null);

  const calculateTip = () => {
    const billValue = parseFloat(bill);
    const tipValue = parseFloat(tipPercent);
    const peopleValue = parseInt(people, 10);
    if (
      !Number.isFinite(billValue) ||
      !Number.isFinite(tipValue) ||
      !Number.isFinite(peopleValue) ||
      peopleValue <= 0
    ) {
      setResult(null);
      return;
    }
    const tipAmount = (billValue * tipValue) / 100;
    const total = billValue + tipAmount;
    const perPerson = total / peopleValue;
    setResult({ tipAmount, total, perPerson });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Tip Calculator - Split Bills and Tips"
        description="Calculate tip, total, and per-person split in seconds. Works for restaurants, delivery, and services."
        canonicalPath="/calculators/tip-calculator"
        keywords="tip calculator, split bill, gratuity calculator"
        faqItems={[
          {
            question: "What is a typical tip percentage?",
            answer:
              "Many people tip 15% to 20%, but you can enter any percentage that fits your situation.",
          },
          {
            question: "Can I split the bill?",
            answer:
              "Yes. Enter the number of people to see a per-person total.",
          },
          {
            question: "Does the tip include tax?",
            answer:
              "This calculator uses the bill amount you enter. Add tax to the bill if you want to tip on tax.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">Tip Calculator</h1>
            <p className="mt-2 text-ink-600">
              Quickly calculate tip, total, and how much each person pays.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Bill amount
                <input
                  type="number"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 86.50"
                />
              </label>
              <label className="text-sm text-ink-600">
                Tip (%)
                <input
                  type="number"
                  value={tipPercent}
                  onChange={(e) => setTipPercent(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 18"
                />
              </label>
              <label className="text-sm text-ink-600 sm:col-span-2">
                Number of people
                <input
                  type="number"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 3"
                  min="1"
                />
              </label>
            </div>
            <button
              onClick={calculateTip}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate tip
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Tip amount:{" "}
                  <span className="font-semibold">
                    {result.tipAmount.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Total bill:{" "}
                  <span className="font-semibold">{result.total.toFixed(2)}</span>
                </p>
                <p className="mt-1">
                  Per person:{" "}
                  <span className="font-semibold">
                    {result.perPerson.toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="tip-calculator" />
        </div>
      </div>
    </div>
  );
}
