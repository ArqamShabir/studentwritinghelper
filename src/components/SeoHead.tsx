import Head from "next/head";

type FaqItem = {
  question: string;
  answer: string;
};

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
  faqItems?: FaqItem[];
};

const BASE_URL = "https://studentwritinghelper.com";

const SeoHead = ({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = "/logo.png",
  noIndex = false,
  faqItems = [],
}: SeoHeadProps) => {
  const canonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : BASE_URL;

  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:site_name" content="Student Writing Helper" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          // JSON-LD must be a raw string for search engines.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </Head>
  );
};

export default SeoHead;
