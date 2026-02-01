const Hero = () => {
  return (
    <div className="bg-aurora bg-grid w-full">
      <section className="mx-auto flex min-h-[720px] max-w-[1440px] flex-col items-start justify-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-20">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.4em] text-ink-600">
            Smart Student Toolkit
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink-900 md:text-6xl">
            Calculators that feel premium, not complicated.
          </h1>
          <p className="mt-4 text-base text-ink-600 md:text-lg">
            Launch fast with professional-grade tools for finance, math, health,
            and home projects. Built for speed, clarity, and SEO growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#featured"
              className="rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Explore Calculators
            </a>
            <a
              href="/calculators"
              className="rounded-full border border-sand-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900"
            >
              View All Categories
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-ink-600 md:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-ink-900">40+</p>
              <p>Targeted calculators</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-ink-900">1 min</p>
              <p>Average time saved</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-ink-900">SEO-ready</p>
              <p>Structured metadata</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg rounded-[32px] border border-sand-200 bg-white p-8 shadow-card">
          <div className="flex items-center justify-between text-sm text-ink-600">
            <span>Calculator Spotlight</span>
            <span>Updated weekly</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-ink-900">
            Mortgage + Savings Planner
          </h2>
          <p className="mt-3 text-sm text-ink-600">
            Compare monthly payments, interest, and long-term savings in one
            workflow. Perfect for the top finance searches.
          </p>
          <div className="mt-6 rounded-2xl bg-sand-50 p-4 text-sm text-ink-600">
            <p className="flex items-center justify-between">
              <span>Average users per day</span>
              <span className="font-semibold text-ink-900">3,200</span>
            </p>
            <p className="mt-3 flex items-center justify-between">
              <span>Conversion intent</span>
              <span className="font-semibold text-ink-900">High</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
  
