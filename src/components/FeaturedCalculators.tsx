import Link from "next/link";
import { Calculator, BarChart, Binary, ChartColumnIncreasing } from "lucide-react";

const calculators = [
  {
    name: "GPA Calculator",
    description: "Calculate your GPA easily.",
    link: "/calculators/gpa-calculator",
    icon: <BarChart size={40} className="text-green-400" />,
  },
  {
    name: "Scientific Calculator",
    description: "Perform complex calculations.",
    link: "/calculators/scientific-calculator",
    icon: <Calculator size={40} className="text-blue-400" />,
  },
  {
    name: "Binary to Decimal Converter",
    description: "Binary to Hexa, Octal and Decimal Converter.",
    link: "/calculators/binary-to-decimal-converter",
    icon: <Binary size={40} className="text-yellow-500" />,
  },
  {
    name: "Mean, Median, Mode",
    description: "Find the mean, median and modes using graphs.",
    link: "/calculators/mean-median-mode-calculator",
    icon: <ChartColumnIncreasing size={40} className="text-gray-500" />,
  },
];

const FeaturedCalculators = () => {
  return (
    <div id="featured" className="bg-gray-100 w-full">
    <section className="py-16 bg-gray-100 px-8 mx-auto max-w-[1440px]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Calculators
        </h2>
        <p className="mt-2 text-gray-600">
          Use our accurate and powerful calculators for your studies.
        </p>

        {/* Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc, index) => (
            <Link
              key={index}
              href={calc.link}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center">{calc.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {calc.name}
              </h3>
              <p className="text-gray-600">{calc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FeaturedCalculators;
