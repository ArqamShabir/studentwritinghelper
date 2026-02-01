import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState<{
    discountAmount: number;
    finalPrice: number;
  } | null>(null);

  const calculateDiscount = () => {
    const priceValue = parseFloat(price);
    const discountValue = parseFloat(discount);
    if (!Number.isFinite(priceValue) || !Number.isFinite(discountValue)) {
      setResult(null);
      return;
    }
    const discountAmount = (priceValue * discountValue) / 100;
    const finalPrice = priceValue - discountAmount;
    setResult({ discountAmount, finalPrice });
  };

  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Discount Calculator - Sale Price and Savings"
        description="Calculate discount amount and final price in seconds. Great for sales, coupons, and quick budgeting."
        canonicalPath="/calculators/discount-calculator"
        keywords="discount calculator, sale price, savings calculator"
        faqItems={[
          {
            question: "How do I calculate a discount?",
            answer:
              "Multiply the original price by the discount percent and divide by 100. Subtract the result from the original price.",
          },
          {
            question: "Does this include tax?",
            answer:
              "This calculator focuses on the discount only. You can add tax after finding the final price.",
          },
          {
            question: "Can I use it for coupon codes?",
            answer:
              "Yes. Enter the original price and the percent off from the coupon.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-ink-900">
              Discount Calculator
            </h1>
            <p className="mt-2 text-ink-600">
              Find savings and final sale price with a clear breakdown.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-ink-600">
                Original price
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 199.99"
                />
              </label>
              <label className="text-sm text-ink-600">
                Discount (%)
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-sand-200 p-2 text-sm"
                  placeholder="e.g. 20"
                />
              </label>
            </div>
            <button
              onClick={calculateDiscount}
              className="mt-4 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Calculate discount
            </button>
            {result && (
              <div className="mt-4 rounded-lg bg-sand-100 p-4 text-sm text-ink-900">
                <p>
                  Discount amount:{" "}
                  <span className="font-semibold">
                    {result.discountAmount.toFixed(2)}
                  </span>
                </p>
                <p className="mt-1">
                  Final price:{" "}
                  <span className="font-semibold">
                    {result.finalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            )}
          </main>
          <CalculatorSidebar currentSlug="discount-calculator" />
        </div>
      </div>
    </div>
  );
}
