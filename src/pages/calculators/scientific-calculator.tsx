import React from "react";
import ScientificCal from "@/components/ScientificCal";
import SeoHead from "@/components/SeoHead";
import CalculatorSidebar from "@/components/CalculatorSidebar";

function ScientificCalculator() {
  return (
    <div className="bg-sand-50">
      <SeoHead
        title="Scientific Calculator - Advanced Math Online"
        description="Use the free scientific calculator for trigonometry, logarithms, exponents, and more."
        canonicalPath="/calculators/scientific-calculator"
        keywords="scientific calculator, trig calculator, log calculator"
        faqItems={[
          {
            question: "What functions are available?",
            answer:
              "Use trigonometric, logarithmic, and power functions along with standard arithmetic.",
          },
          {
            question: "Does it work on mobile?",
            answer:
              "Yes. The layout adapts to mobile screens for quick calculations.",
          },
          {
            question: "Is it free to use?",
            answer: "Yes. The calculator is free and does not require sign-up.",
          },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
            <ScientificCal />
          </main>
          <CalculatorSidebar currentSlug="scientific-calculator" />
        </div>
      </div>
    </div>
  );
}

export default ScientificCalculator;
