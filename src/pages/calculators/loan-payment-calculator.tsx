import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function LoanPaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPaid: number;
    totalInterest: number;
  } | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseFloat(years) * 12;

    if (
      !Number.isFinite(principal) ||
      !Number.isFinite(rate) ||
      !Number.isFinite(termMonths) ||
      principal <= 0 ||
      termMonths <= 0
    ) {
      setResult(null);
      return;
    }

    let monthlyPayment = 0;
    if (rate === 0) {
      monthlyPayment = principal / termMonths;
    } else {
      monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -termMonths));
    }

    const totalPaid = monthlyPayment * termMonths;
    const totalInterest = totalPaid - principal;

    setResult({ monthlyPayment, totalPaid, totalInterest });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Loan Payment Calculator - Monthly Payment and Interest"
        description="Estimate monthly loan payments, total interest, and total cost. Perfect for personal, auto, and student loans."
        canonicalPath="/calculators/loan-payment-calculator"
        keywords="loan payment calculator, monthly payment, loan interest, emi calculator"
        faqItems={[
          {
            question: "How is the monthly payment calculated?",
            answer:
              "The calculator uses the standard amortization formula with principal, rate, and term in months.",
          },
          {
            question: "Does this include fees?",
            answer:
              "No. It focuses on principal and interest only. Add fees to the loan amount if needed.",
          },
          {
            question: "What if the interest rate is 0%?",
            answer:
              "The monthly payment is simply the principal divided by the number of months.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Loan Payment Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Estimate your monthly payment and total interest with a quick
              calculation.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Loan amount
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 25000"
                />
              </label>
              <label className="text-sm text-ink-600">
                Interest rate (% APR)
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 6.5"
                />
              </label>
              <label className="text-sm text-ink-600 sm:col-span-2">
                Loan term (years)
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 5"
                />
              </label>
            </div>
            <button
              onClick={calculateLoan}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate payment
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
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
          <CalculatorSidebar currentSlug="loan-payment-calculator" />
        </div>
      </div>
    </div>
  );
}
