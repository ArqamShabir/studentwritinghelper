import { Calculator, PenSquare, Sparkles, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Select a Calculator",
      desc: "Choose from finance, math, health, or home tools.",
      icon: <Calculator size={28} className="text-ink-900" />,
    },
    {
      title: "Enter Your Data",
      desc: "Input values with smart validation and guidance.",
      icon: <PenSquare size={28} className="text-ink-900" />,
    },
    {
      title: "Get Instant Results",
      desc: "Accurate results with explanations and formulas.",
      icon: <Sparkles size={28} className="text-ink-900" />,
    },
    {
      title: "Save & Share",
      desc: "Use outputs in assignments or planning.",
      icon: <Share2 size={28} className="text-ink-900" />,
    },
  ];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-ink-900 md:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-ink-600">
            Built to be clear, quick, and trustworthy in every step.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-sand-200 bg-sand-50 p-6 text-left shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                {step.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
