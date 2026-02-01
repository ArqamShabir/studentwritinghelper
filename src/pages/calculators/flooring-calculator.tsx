import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function FlooringCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [waste, setWaste] = useState("10");
  const [result, setResult] = useState<number | null>(null);

  const calculateFlooring = () => {
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
    setResult(total);
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Flooring Calculator - Area and Waste"
        description="Calculate flooring square footage with waste factor for cuts and mistakes."
        canonicalPath="/calculators/flooring-calculator"
        keywords="flooring calculator, floor area, waste factor"
        faqItems={[
          {
            question: "How much waste should I add?",
            answer:
              "A common range is 5-15%, depending on the room shape and plank layout.",
          },
          {
            question: "What units should I use?",
            answer:
              "Use the same unit for length and width to get square units.",
          },
          {
            question: "Can I use this for tile?",
            answer:
              "Yes. The same area calculation applies to tile and other flooring.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
            <h1 className="text-3xl font-semibold text-ink-900">
              Flooring Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Estimate flooring area with a built-in waste factor.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Length
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 20"
                />
              </label>
              <label className="text-sm text-ink-600">
                Width
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 15"
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
              onClick={calculateFlooring}
              className="mt-4 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate flooring
            </button>
            {result !== null && (
              <div className="mt-4 rounded-xl bg-sand-100 p-4 text-sm text-ink-900">
                Total area needed:{" "}
                <span className="font-semibold">{result.toFixed(2)}</span>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="flooring-calculator" />
        </div>
      </div>
    </div>
  );
}
