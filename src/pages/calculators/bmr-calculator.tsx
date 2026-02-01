import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function BmrCalculator() {
  const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState<number | null>(null);

  const calculateBmr = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const ageValue = parseFloat(age);

    if (
      !Number.isFinite(weightValue) ||
      !Number.isFinite(heightValue) ||
      !Number.isFinite(ageValue) ||
      weightValue <= 0 ||
      heightValue <= 0 ||
      ageValue <= 0
    ) {
      setBmr(null);
      return;
    }

    const base = 10 * weightValue + 6.25 * heightValue - 5 * ageValue;
    const result = sex === "male" ? base + 5 : base - 161;
    setBmr(result);
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="BMR Calculator - Basal Metabolic Rate"
        description="Estimate your Basal Metabolic Rate using the Mifflin-St Jeor equation. Enter weight, height, age, and sex."
        canonicalPath="/calculators/bmr-calculator"
        keywords="bmr calculator, basal metabolic rate, calorie calculator"
        faqItems={[
          {
            question: "What is BMR?",
            answer:
              "BMR is the number of calories your body burns at rest to keep basic functions running.",
          },
          {
            question: "Which formula is used?",
            answer:
              "This calculator uses the Mifflin-St Jeor equation for men and women.",
          },
          {
            question: "Does this show daily calorie needs?",
            answer:
              "It shows the baseline at rest. Multiply BMR by an activity factor to estimate daily needs.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">BMR Calculator</h1>
            <p className="mt-2 text-ink-600">
              Estimate your Basal Metabolic Rate using standard inputs.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Sex
                <select
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label className="text-sm text-ink-600">
                Age (years)
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 30"
                />
              </label>
              <label className="text-sm text-ink-600">
                Weight (kg)
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 70"
                />
              </label>
              <label className="text-sm text-ink-600">
                Height (cm)
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 175"
                />
              </label>
            </div>
            <button
              onClick={calculateBmr}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate BMR
            </button>
            {bmr !== null && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  BMR: <span className="font-semibold">{bmr.toFixed(0)}</span>{" "}
                  calories/day
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="bmr-calculator" />
        </div>
      </div>
    </div>
  );
}
