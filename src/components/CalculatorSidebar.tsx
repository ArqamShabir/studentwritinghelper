import Link from "next/link";
import { calculators, getCalculatorUrl } from "@/data/calculators";

type CalculatorSidebarProps = {
  currentSlug?: string;
  title?: string;
  limit?: number;
};

const CalculatorSidebar = ({
  currentSlug,
  title = "Popular Calculators",
  limit = 6,
}: CalculatorSidebarProps) => {
  const items = calculators
    .filter((calc) => calc.slug !== currentSlug)
    .slice(0, limit);

  return (
    <aside className="w-full rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((calc) => (
          <li key={calc.slug}>
            <Link
              href={getCalculatorUrl(calc.slug)}
              className="font-medium text-ink-900 hover:text-ink-600 hover:underline"
            >
              {calc.name}
            </Link>
            <p className="text-xs text-ink-600">{calc.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl bg-sand-100 px-4 py-6 text-center text-xs text-ink-600">
        Ad space
      </div>
    </aside>
  );
};

export default CalculatorSidebar;
