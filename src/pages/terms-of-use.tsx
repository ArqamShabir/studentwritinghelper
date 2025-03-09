import Head from "next/head";

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of Use | Student Writing Helper</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Student Writing Helper, operated by Multishells. Learn about our policies and disclaimers."
        />
      </Head>

      <main className="max-w-6xl w-full mx-auto  p-6 md:py-18 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
            Terms of Use</h1>

        <p className="mb-4">
          Welcome to <strong>Student Writing Helper</strong>, operated by{" "}
          <strong>Multishells</strong>. By accessing and using our website, you
          agree to comply with these Terms of Use.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. No Warranties</h2>
        <p className="mb-4">
          The information and tools on this website are provided "as is"
          without any guarantees or warranties of any kind. We do not guarantee
          accuracy, reliability, or completeness.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. Limitation of Liability
        </h2>
        <p className="mb-4">
          <strong>Multishells</strong> and its contributors shall not be held
          liable for any damage, loss, or consequences resulting from the
          use of this website or its tools.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Use of Cookies</h2>
        <p className="mb-4">
          We use cookies to improve user experience, as outlined in our{" "}
          <a href="/privacy-policy" className="text-blue-500">
            Privacy Policy
          </a>
          . By using this website, you accept our cookie usage.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Automated Access Restrictions
        </h2>
        <p className="mb-4">
          You may not access this website using automated scripts, bots, or
          applications without prior written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Agreement</h2>
        <p className="mb-4">
          By using this website, you agree to these Terms of Use. If you do
          not agree, please do not use this site.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Changes to Terms</h2>
        <p>
          These Terms of Use may be updated periodically. The latest version
          will always be available on this page.
        </p>
      </main>
    </>
  );
}
