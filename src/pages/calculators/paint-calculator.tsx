import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function PaintCalculator() {
  const [area, setArea] = useState("");
  const [coats, setCoats] = useState("2");
  const [coverage, setCoverage] = useState("350");
  const [result, setResult] = useState<number | null>(null);

  const calculatePaint = () => {
    const areaValue = parseFloat(area);
    const coatsValue = parseFloat(coats);
    const coverageValue = parseFloat(coverage);
    if (
      !Number.isFinite(areaValue) ||
      !Number.isFinite(coatsValue) ||
      !Number.isFinite(coverageValue) ||
      areaValue <= 0 ||
      coatsValue <= 0 ||
      coverageValue <= 0
    ) {
      setResult(null);
      return;
    }
    const gallons = (areaValue * coatsValue) / coverageValue;
    setResult(gallons);
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Paint Calculator - Estimate Paint Needed"
        description="Estimate how many gallons of paint you need based on wall area, coats, and coverage."
        canonicalPath="/calculators/paint-calculator"
        keywords="paint calculator, paint coverage, wall area"
        faqItems={[
          {
            question: "How do I calculate paint needed?",
            answer:
              "Multiply wall area by the number of coats and divide by coverage per gallon.",
          },
          {
            question: "What is typical paint coverage?",
            answer:
              "Many paints cover about 350 square feet per gallon, but check the can.",
          },
          {
            question: "Should I add extra?",
            answer:
              "Yes. Add 5-10% to account for texture, trim, or touch-ups.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
            <h1 className="text-3xl font-semibold text-ink-900">
              Paint Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Estimate gallons of paint based on area and coats.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Total wall area (sq ft)
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 800"
                />
              </label>
              <label className="text-sm text-ink-600">
                Number of coats
                <input
                  type="number"
                  value={coats}
                  onChange={(e) => setCoats(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 2"
                />
              </label>
              <label className="text-sm text-ink-600 sm:col-span-2">
                Coverage per gallon (sq ft)
                <input
                  type="number"
                  value={coverage}
                  onChange={(e) => setCoverage(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 350"
                />
              </label>
            </div>
            <button
              onClick={calculatePaint}
              className="mt-4 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate paint
            </button>
            {result !== null && (
              <div className="mt-4 rounded-xl bg-sand-100 p-4 text-sm text-ink-900">
                Estimated gallons:{" "}
                <span className="font-semibold">{result.toFixed(2)}</span>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="paint-calculator" />
        </div>
      </div>
    </div>
  );
}
