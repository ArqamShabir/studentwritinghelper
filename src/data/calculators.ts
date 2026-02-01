export type Calculator = {
  slug: string;
  name: string;
  description: string;
  category: string;
  keywords: string;
  featured?: boolean;
};

export const calculators: Calculator[] = [
  {
    slug: "gpa-calculator",
    name: "GPA Calculator",
    description: "Calculate GPA with credits and grades.",
    category: "Education",
    keywords: "gpa calculator, grade point average, credit hours, cgpa",
    featured: true,
  },
  {
    slug: "scientific-calculator",
    name: "Scientific Calculator",
    description: "Advanced math functions and quick calculations.",
    category: "Math",
    keywords: "scientific calculator, sin cos tan, log, sqrt",
    featured: true,
  },
  {
    slug: "binary-to-decimal-converter",
    name: "Binary Converter",
    description: "Convert binary to decimal, hex, and octal.",
    category: "Conversion",
    keywords: "binary converter, decimal to binary, hex converter, octal",
    featured: true,
  },
  {
    slug: "mean-median-mode-calculator",
    name: "Mean Median Mode",
    description: "Find mean, median, mode, range, and more.",
    category: "Math",
    keywords: "mean median mode calculator, statistics, range",
    featured: true,
  },
  {
    slug: "standard-deviation-calculator",
    name: "Standard Deviation",
    description: "Population and sample standard deviation.",
    category: "Math",
    keywords: "standard deviation calculator, statistics, variance",
    featured: true,
  },
  {
    slug: "trigonometric-calculator",
    name: "Trigonometric Calculator",
    description: "Solve sin, cos, tan, and inverse trig values.",
    category: "Math",
    keywords: "trigonometric calculator, sin cos tan, inverse",
    featured: false,
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Percent of a number, change, and reverse percent.",
    category: "Math",
    keywords: "percentage calculator, percent change, percent of",
    featured: true,
  },
  {
    slug: "discount-calculator",
    name: "Discount Calculator",
    description: "Calculate sale price and savings instantly.",
    category: "Finance",
    keywords: "discount calculator, sale price, savings",
    featured: false,
  },
  {
    slug: "tip-calculator",
    name: "Tip Calculator",
    description: "Split bills and calculate tip per person.",
    category: "Finance",
    keywords: "tip calculator, split bill, gratuity",
    featured: false,
  },
  {
    slug: "loan-payment-calculator",
    name: "Loan Payment Calculator",
    description: "Monthly payment, total interest, and payoff.",
    category: "Finance",
    keywords: "loan payment calculator, emi, amortization",
    featured: true,
  },
  {
    slug: "mortgage-calculator",
    name: "Mortgage Calculator",
    description: "Estimate mortgage payments with down payment.",
    category: "Finance",
    keywords: "mortgage calculator, home loan, down payment",
    featured: true,
  },
  {
    slug: "compound-interest-calculator",
    name: "Compound Interest Calculator",
    description: "See how savings grow over time with compounding.",
    category: "Finance",
    keywords: "compound interest calculator, savings growth",
    featured: true,
  },
  {
    slug: "simple-interest-calculator",
    name: "Simple Interest Calculator",
    description: "Calculate interest earned without compounding.",
    category: "Finance",
    keywords: "simple interest calculator, interest earned",
    featured: false,
  },
  {
    slug: "savings-goal-calculator",
    name: "Savings Goal Calculator",
    description: "Plan monthly contributions to hit a goal.",
    category: "Finance",
    keywords: "savings goal calculator, monthly contribution",
    featured: false,
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    description: "Body Mass Index using metric or imperial units.",
    category: "Health",
    keywords: "bmi calculator, body mass index, weight height",
    featured: false,
  },
  {
    slug: "bmr-calculator",
    name: "BMR Calculator",
    description: "Basal Metabolic Rate using Mifflin-St Jeor.",
    category: "Health",
    keywords: "bmr calculator, basal metabolic rate, calories",
    featured: false,
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    description: "Calculate age in years, months, and days.",
    category: "Time",
    keywords: "age calculator, date of birth, age in years",
    featured: false,
  },
  {
    slug: "date-difference-calculator",
    name: "Date Difference Calculator",
    description: "Find the number of days between two dates.",
    category: "Time",
    keywords: "date difference calculator, days between dates",
    featured: false,
  },
  {
    slug: "paint-calculator",
    name: "Paint Calculator",
    description: "Estimate paint needed for walls or rooms.",
    category: "Home & Construction",
    keywords: "paint calculator, paint coverage, wall area",
    featured: true,
  },
  {
    slug: "flooring-calculator",
    name: "Flooring Calculator",
    description: "Calculate flooring area plus waste.",
    category: "Home & Construction",
    keywords: "flooring calculator, floor area, waste factor",
    featured: false,
  },
  {
    slug: "concrete-calculator",
    name: "Concrete Calculator",
    description: "Estimate concrete volume for slabs.",
    category: "Home & Construction",
    keywords: "concrete calculator, slab volume, cubic yards",
    featured: true,
  },
  {
    slug: "roofing-calculator",
    name: "Roofing Calculator",
    description: "Estimate roof area and squares.",
    category: "Home & Construction",
    keywords: "roofing calculator, roof area, squares",
    featured: false,
  },
];

export const calculatorsByCategory = calculators.reduce<Record<string, Calculator[]>>(
  (acc, calculator) => {
    if (!acc[calculator.category]) {
      acc[calculator.category] = [];
    }
    acc[calculator.category].push(calculator);
    return acc;
  },
  {}
);

export const getCalculatorUrl = (slug: string) => `/calculators/${slug}`;
