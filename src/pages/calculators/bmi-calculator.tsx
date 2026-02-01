import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

type BmiResult = {
  bmi: number;
  category: string;
};

const getBmiCategory = (bmi: number) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
};

export default function BmiCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<BmiResult | null>(null);

  const calculateBmi = () => {
    const weightValue = parseFloat(weight);
    if (!Number.isFinite(weightValue) || weightValue <= 0) {
      setResult(null);
      return;
    }

    let bmi = 0;
    if (unit === "metric") {
      const heightValue = parseFloat(heightCm) / 100;
      if (!Number.isFinite(heightValue) || heightValue <= 0) {
        setResult(null);
        return;
      }
      bmi = weightValue / (heightValue * heightValue);
    } else {
      const ft = parseFloat(heightFt);
      const inch = parseFloat(heightIn);
      if (
        !Number.isFinite(ft) ||
        !Number.isFinite(inch) ||
        ft < 0 ||
        inch < 0
      ) {
        setResult(null);
        return;
      }
      const totalInches = ft * 12 + inch;
      if (totalInches <= 0) {
        setResult(null);
        return;
      }
      bmi = (703 * weightValue) / (totalInches * totalInches);
    }

    setResult({ bmi, category: getBmiCategory(bmi) });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="BMI Calculator - Body Mass Index"
        description="Calculate Body Mass Index with metric or imperial units. Get your BMI score and category instantly."
        canonicalPath="/calculators/bmi-calculator"
        keywords="bmi calculator, body mass index, weight height calculator"
        faqItems={[
          {
            question: "What is BMI?",
            answer:
              "BMI is a measure of body weight relative to height. It is often used to classify weight categories.",
          },
          {
            question: "What units can I use?",
            answer:
              "Use metric (kg, cm) or imperial (lb, ft, in). The calculator converts automatically.",
          },
          {
            question: "Is BMI a perfect health measure?",
            answer:
              "BMI is a simple screening tool. It does not account for muscle, bone, or body composition.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">BMI Calculator</h1>
            <p className="mt-2 text-ink-600">
              Find your Body Mass Index and see the category range.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setUnit("metric")}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  unit === "metric"
                    ? "bg-ink-900 text-white"
                    : "bg-sand-100 text-ink-900"
                }`}
              >
                Metric (kg, cm)
              </button>
              <button
                onClick={() => setUnit("imperial")}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  unit === "imperial"
                    ? "bg-ink-900 text-white"
                    : "bg-sand-100 text-ink-900"
                }`}
              >
                Imperial (lb, ft, in)
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Weight ({unit === "metric" ? "kg" : "lb"})
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
                />
              </label>
              {unit === "metric" ? (
                <label className="text-sm text-ink-600">
                  Height (cm)
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                    placeholder="e.g. 175"
                  />
                </label>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <label className="text-sm text-ink-600">
                    Height (ft)
                    <input
                      type="number"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                      placeholder="e.g. 5"
                    />
                  </label>
                  <label className="text-sm text-ink-600">
                    Height (in)
                    <input
                      type="number"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                      placeholder="e.g. 9"
                    />
                  </label>
                </div>
              )}
            </div>

            <button
              onClick={calculateBmi}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate BMI
            </button>

            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  BMI: <span className="font-semibold">{result.bmi.toFixed(1)}</span>
                </p>
                <p className="mt-1">
                  Category:{" "}
                  <span className="font-semibold">{result.category}</span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="bmi-calculator" />
        </div>
      </div>
    </div>
  );
}
