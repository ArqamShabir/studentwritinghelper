import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function RoofingCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [waste, setWaste] = useState("10");
  const [result, setResult] = useState<{
    area: number;
    squares: number;
  } | null>(null);

  const calculateRoof = () => {
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    const wasteValue = parseFloat(waste);
    if (
      !Number.isFinite(lengthValue) ||
      !Number.isFinite(widthValue) ||
      !Number.isFinite(wasteValue) ||
      lengthValue <= 0 ||
      widthValue <= 0 ||
      wasteValue < 0
    ) {
      setResult(null);
      return;
    }
    const area = lengthValue * widthValue;
    const total = area * (1 + wasteValue / 100);
    const squares = total / 100;
    setResult({ area: total, squares });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Roofing Calculator - Roof Area and Squares"
        description="Estimate roof area and squares with a waste factor for cuts."
        canonicalPath="/calculators/roofing-calculator"
        keywords="roofing calculator, roof area, roofing squares"
        faqItems={[
          {
            question: "What is a roofing square?",
            answer: "One roofing square equals 100 square feet of roofing area.",
          },
          {
            question: "How much waste should I add?",
            answer:
              "Typical waste ranges from 5-15% depending on roof complexity.",
          },
          {
            question: "Does this include pitch?",
            answer:
              "No. This calculator uses flat area. Multiply by a pitch factor if needed.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
            <h1 className="text-3xl font-semibold text-ink-900">
              Roofing Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Estimate roof area and squares with waste included.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Roof length (ft)
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 40"
                />
              </label>
              <label className="text-sm text-ink-600">
                Roof width (ft)
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 30"
                />
              </label>
              <label className="text-sm text-ink-600 sm:col-span-2">
                Waste (%)
                <input
                  type="number"
                  value={waste}
                  onChange={(e) => setWaste(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 10"
                />
              </label>
            </div>
            <button
              onClick={calculateRoof}
              className="mt-4 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate roofing
            </button>
            {result && (
              <div className="mt-4 rounded-xl bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Total area:{" "}
                  <span className="font-semibold">{result.area.toFixed(2)}</span>{" "}
                  sq ft
                </p>
                <p className="mt-1">
                  Roofing squares:{" "}
                  <span className="font-semibold">{result.squares.toFixed(2)}</span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="roofing-calculator" />
        </div>
      </div>
    </div>
  );
}
