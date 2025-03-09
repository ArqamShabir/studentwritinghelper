import Link from "next/link";

export default function CalculatorSidebar() {
  return (
    <aside className="w-full md:w-64 bg-gray-100 p-4 rounded-lg mb-6 md:mb-0">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Other Calculators</h2>
      <ul className="space-y-2">
        <li><Link href="/calculators/gpa" className="text-blue-500 hover:underline">GPA Calculator</Link></li>
        <li><Link href="/calculators/bmi" className="text-blue-500 hover:underline">BMI Calculator</Link></li>
        <li><Link href="/calculators/loan" className="text-blue-500 hover:underline">Loan Calculator</Link></li>
      </ul>

      {/* Placeholder for Ads */}
      <div className="mt-6 bg-gray-300 h-40 flex items-center justify-center rounded-lg">
        <p>Ad Space</p>
      </div>
    </aside>
  );
}
