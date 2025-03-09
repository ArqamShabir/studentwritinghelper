import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Student Writing Helper</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your data at Student Writing Helper."
        />
      </Head>

      <main className="max-w-6xl w-full mx-auto  p-6 md:py-18 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At <strong>Student Writing Helper</strong>, operated by{" "}
          <strong>Multishells</strong>, we respect your privacy and are
          committed to protecting your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. General</h2>
        <p className="mb-4">
          We do not sell, rent, or share collected information in ways different
          from what is stated here.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Non-Personal Information (e.g., browser type, device, pages visited)</li>
          <li>Personal Information (only when voluntarily provided, like in forms)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Google Analytics</h2>
        <p className="mb-4">
          We use Google Analytics to track website usage and improve content.
          Learn more{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Google AdSense & Ads</h2>
        <p className="mb-4">
          Third-party vendors, including Google, use cookies to serve ads based
          on users’ past visits.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Data Security & Storage</h2>
        <p className="mb-4">
          We use Cloudflare for security and performance optimization. No
          sensitive data is stored on our servers.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. User Feedback</h2>
        <p className="mb-4">
          Your feedback helps us improve. It is securely stored and never shared
          with third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Changes to Policy</h2>
        <p className="mb-4">
          This Privacy Policy may be updated periodically. Changes will be
          posted here.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
        <p>
          If you have any questions, contact us at{" "}
          <a href="mailto:support@multishells.com" className="text-blue-500">
            support@multishells.com
          </a>
        </p>
      </main>
    </>
  );
}
