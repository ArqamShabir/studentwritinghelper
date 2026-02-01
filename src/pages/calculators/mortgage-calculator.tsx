import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{
    loanAmount: number;
    monthlyPayment: number;
    totalPaid: number;
    totalInterest: number;
  } | null>(null);

  const calculateMortgage = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseFloat(years) * 12;

    if (
      !Number.isFinite(price) ||
      !Number.isFinite(down) ||
      !Number.isFinite(rate) ||
      !Number.isFinite(termMonths) ||
      price <= 0 ||
      termMonths <= 0 ||
      down < 0
    ) {
      setResult(null);
      return;
    }

    const loanAmount = Math.max(price - down, 0);
    let monthlyPayment = 0;
    if (rate === 0) {
      monthlyPayment = loanAmount / termMonths;
    } else {
      monthlyPayment =
        (loanAmount * rate) / (1 - Math.pow(1 + rate, -termMonths));
    }

    const totalPaid = monthlyPayment * termMonths;
    const totalInterest = totalPaid - loanAmount;

    setResult({ loanAmount, monthlyPayment, totalPaid, totalInterest });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Mortgage Calculator - Monthly Payment Estimate"
        description="Estimate mortgage payments based on home price, down payment, rate, and term. See total interest and total cost."
        canonicalPath="/calculators/mortgage-calculator"
        keywords="mortgage calculator, home loan calculator, monthly payment"
        faqItems={[
          {
            question: "Does this include taxes and insurance?",
            answer:
              "This calculator focuses on principal and interest only. Add taxes and insurance separately.",
          },
          {
            question: "What if my down payment is zero?",
            answer:
              "The loan amount becomes the full home price, which increases the monthly payment.",
          },
          {
            question: "Can I use this for refinancing?",
            answer:
              "Yes. Enter the remaining balance as the home price and set down payment to zero.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Mortgage Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Get a quick estimate of your mortgage payment and interest costs.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Home price
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 350000"
                />
              </label>
              <label className="text-sm text-ink-600">
                Down payment
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 70000"
                />
              </label>
              <label className="text-sm text-ink-600">
                Interest rate (% APR)
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 6.25"
                />
              </label>
              <label className="text-sm text-ink-600">
                Loan term (years)
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 30"
                />
              </label>
            </div>
            <button
              onClick={calculateMortgage}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate mortgage
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Loan amount:{" "}
                  <span className="font-semibold">
                    {result.loanAmount.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Monthly payment:{" "}
                  <span className="font-semibold">
                    {result.monthlyPayment.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Total paid:{" "}
                  <span className="font-semibold">
                    {result.totalPaid.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Total interest:{" "}
                  <span className="font-semibold">
                    {result.totalInterest.toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="mortgage-calculator" />
        </div>
      </div>
    </div>
  );
}
