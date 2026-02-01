import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function ConcreteCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [result, setResult] = useState<{
    cubicFeet: number;
    cubicYards: number;
  } | null>(null);

  const calculateConcrete = () => {
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    const depthValue = parseFloat(depth);
    if (
      !Number.isFinite(lengthValue) ||
      !Number.isFinite(widthValue) ||
      !Number.isFinite(depthValue) ||
      lengthValue <= 0 ||
      widthValue <= 0 ||
      depthValue <= 0
    ) {
      setResult(null);
      return;
    }
    const cubicFeet = lengthValue * widthValue * depthValue;
    const cubicYards = cubicFeet / 27;
    setResult({ cubicFeet, cubicYards });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Concrete Calculator - Slab Volume"
        description="Estimate concrete needed for slabs. Get cubic feet and cubic yards instantly."
        canonicalPath="/calculators/concrete-calculator"
        keywords="concrete calculator, slab volume, cubic yards"
        faqItems={[
          {
            question: "What units should I use?",
            answer:
              "Use feet for length, width, and depth to get cubic feet and cubic yards.",
          },
          {
            question: "How many cubic feet are in a cubic yard?",
            answer: "There are 27 cubic feet in one cubic yard.",
          },
          {
            question: "Should I add extra?",
            answer:
              "Add 5-10% extra for waste or uneven subgrade.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
            <h1 className="text-3xl font-semibold text-ink-900">
              Concrete Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Calculate slab volume for concrete pours.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Length (ft)
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 12"
                />
              </label>
              <label className="text-sm text-ink-600">
                Width (ft)
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 10"
                />
              </label>
              <label className="text-sm text-ink-600 sm:col-span-2">
                Depth (ft)
                <input
                  type="number"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 bg-sand-50 p-2 text-sm"
                  placeholder="e.g. 0.33"
                />
              </label>
            </div>
            <button
              onClick={calculateConcrete}
              className="mt-4 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate concrete
            </button>
            {result && (
              <div className="mt-4 rounded-xl bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Cubic feet:{" "}
                  <span className="font-semibold">
                    {result.cubicFeet.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Cubic yards:{" "}
                  <span className="font-semibold">
                    {result.cubicYards.toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="concrete-calculator" />
        </div>
      </div>
    </div>
  );
}
