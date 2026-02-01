import { GetServerSideProps } from "next";
import { calculators, getCalculatorUrl } from "@/data/calculators";

const BASE_URL = "https://studentwritinghelper.com";

const buildSitemap = () => {
  const staticPaths = [
    "/",
    "/calculators",
    "/privacy-policy",
    "/terms-of-use",
    "/contact-us",
  ];

  const urls = [
    ...staticPaths.map((path) => `${BASE_URL}${path}`),
    ...calculators.map((calc) => `${BASE_URL}${getCalculatorUrl(calc.slug)}`),
  ];

  const now = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (url) =>
          `  <url>\n` +
          `    <loc>${url}</loc>\n` +
          `    <lastmod>${now}</lastmod>\n` +
          `    <changefreq>weekly</changefreq>\n` +
          `    <priority>${url.endsWith("/calculators") || url === BASE_URL + "/" ? "0.9" : "0.7"}</priority>\n` +
          `  </url>`
      )
      .join("\n") +
    `\n</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = buildSitemap();
  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
