import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import { calculatorsByCategory, getCalculatorUrl } from "@/data/calculators";

const categoryOrder = [
  "Finance",
  "Math",
  "Education",
  "Health",
  "Home & Construction",
  "Time",
  "Conversion",
];

export default function CalculatorDirectory() {
  return (
    <div className="bg-sand-50">
      <SeoHead
        title="All Calculators - Finance, Math, Health, and More"
        description="Browse all online calculators by category. Finance, math, health, time, and conversion tools designed for fast and accurate results."
        canonicalPath="/calculators"
        keywords="online calculators, finance calculators, math calculators, health calculators, time calculators"
      />
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-ink-900">
            All Calculators
          </h1>
          <p className="mt-3 text-ink-600 text-base md:text-lg">
            Find the right calculator for your task. Each tool is focused, fast,
            and optimized for mobile and desktop.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {categoryOrder.map((category) => {
            const items = calculatorsByCategory[category] ?? [];
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-ink-900">
                    {category}
                  </h2>
                  <span className="text-sm text-ink-600">
                    {items.length} tools
                  </span>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((calc) => (
                    <Link
                      key={calc.slug}
                      href={getCalculatorUrl(calc.slug)}
                      className="group rounded-2xl border border-sand-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"
                    >
                      <h3 className="text-lg font-semibold text-ink-900 group-hover:text-ink-600">
                        {calc.name}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600">
                        {calc.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                        Open calculator
                        <ArrowUpRight size={16} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
