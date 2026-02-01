import Link from "next/link";
import type React from "react";
import {
  Calculator,
  BarChart,
  Binary,
  ChartColumnIncreasing,
  SquareRadical,
  BadgePercent,
  HandCoins,
  Landmark,
  TrendingUp,
  Paintbrush,
  Ruler,
  Hammer,
} from "lucide-react";
import { calculators, getCalculatorUrl } from "@/data/calculators";

const iconMap: Record<string, React.ReactNode> = {
  "gpa-calculator": <BarChart size={40} className="text-green-500" />,
  "scientific-calculator": <Calculator size={40} className="text-blue-500" />,
  "binary-to-decimal-converter": <Binary size={40} className="text-yellow-500" />,
  "standard-deviation-calculator": (
    <SquareRadical size={40} className="text-purple-500" />
  ),
  "mean-median-mode-calculator": (
    <ChartColumnIncreasing size={40} className="text-gray-900" />
  ),
  "percentage-calculator": <BadgePercent size={40} className="text-emerald-600" />,
  "loan-payment-calculator": <HandCoins size={40} className="text-rose-500" />,
  "mortgage-calculator": <Landmark size={40} className="text-sky-600" />,
  "compound-interest-calculator": <TrendingUp size={40} className="text-indigo-500" />,
  "paint-calculator": <Paintbrush size={40} className="text-amber-500" />,
  "flooring-calculator": <Ruler size={40} className="text-lime-600" />,
  "concrete-calculator": <Hammer size={40} className="text-orange-500" />,
  "roofing-calculator": <Landmark size={40} className="text-slate-600" />,
};

const featuredCalculators = calculators.filter((calc) => calc.featured).slice(0, 12);

const FeaturedCalculators = () => {
  return (
    <div id="featured" className="bg-sand-50 w-full">
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink-900 md:text-4xl">
              Featured Calculators
            </h2>
            <p className="mt-2 text-ink-600">
              Hand-picked tools that match the most searched topics.
            </p>
          </div>
          <Link
            href="/calculators"
            className="inline-flex w-fit rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-semibold text-ink-900"
          >
            Explore all categories
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCalculators.map((calc, index) => (
            <Link
              key={index}
              href={getCalculatorUrl(calc.slug)}
              className="group rounded-2xl border border-sand-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand-50">
                {iconMap[calc.slug] ?? (
                  <Calculator size={32} className="text-slate-600" />
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink-900">
                {calc.name}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{calc.description}</p>
              <div className="mt-4 text-sm font-semibold text-ink-900">
                Open tool
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedCalculators;
