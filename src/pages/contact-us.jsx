import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success alert
    alert("Your message has been sent!");

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Your Website Name</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or support. Contact Multishells today!"
        />
      </Head>

      <main className="max-w-2xl mx-auto p-6 md:py-16 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="mb-4">
          Have questions? Fill out the form below, and we'll get back to you
          shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md h-32"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
