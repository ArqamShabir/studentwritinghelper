import Image from "next/image";

const SeoSection = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ink-600">
              Built for SEO
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink-900 md:text-4xl">
              Content depth that ranks, design that converts.
            </h2>
            <p className="mt-4 text-ink-600">
              Each calculator is structured for search engines with clean
              metadata, internal links, and FAQ schema, while staying lightweight
              and fast for users.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sand-200 bg-sand-50 p-4">
                <p className="text-lg font-semibold text-ink-900">Structured</p>
                <p className="text-sm text-ink-600">
                  Metadata and schema on every calculator page.
                </p>
              </div>
              <div className="rounded-2xl border border-sand-200 bg-sand-50 p-4">
                <p className="text-lg font-semibold text-ink-900">Readable</p>
                <p className="text-sm text-ink-600">
                  Clean UI that keeps users engaged longer.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 left-6 h-16 w-16 rounded-full bg-[#f3c48d]" />
            <div className="absolute -bottom-8 right-8 h-24 w-24 rounded-full bg-[#c7b6ff]" />
            <div className="relative overflow-hidden rounded-[28px] border border-sand-200 bg-white p-3 shadow-card">
              <Image
                src="/featuredImage.jpg"
                alt="Student Writing Helper"
                width={500}
                height={400}
                className="rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoSection;
  
