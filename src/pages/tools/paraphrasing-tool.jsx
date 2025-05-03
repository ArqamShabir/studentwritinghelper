import React, { useState, useRef } from 'react';
import Head from 'next/head';

const Paraphraser = () => {
  const [textToParaphrase, setTextToParaphrase] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef(null); // 🔸 Ref to scroll into view

  const handleInputChange = (e) => {
    setTextToParaphrase(e.target.value);
  };

  const handleSubmit = async () => {
    if (!textToParaphrase) {
      setError("Please enter text to paraphrase.");
      return;
    }

    setLoading(true);
    setError('');
    setShowResult(false);

    try {
      const response = await fetch('/api/paraphrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToParaphrase }),
      });

      const data = await response.json();

      if (data.success) {
        setParaphrasedText(data.paraphrasedText);
        setShowResult(true);
        // 🔸 Scroll to result
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Slight delay to ensure rendering
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Error while paraphrasing text.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(paraphrasedText);
  };

  return (
    <>
      <Head>
        <title>Paraphrasing Tool | No Login SignUp Required</title>
        <meta name="title" content="Paraphrasing Tool | No Login SignUp Required" />
        <meta name="description" content="Use our free AI-powered Paraphrasing Tool to rewrite text in a smarter and clearer way.No Login or Sign Up is required." />
        <meta name="keywords" content="paraphrasing tool, ai rewriter, text paraphraser, content spinner, rephrase online" />
        <link rel="canonical" href="https://studentwritinghelper.com/tools/paraphrasing-tool" />
      </Head>

      <div className="max-w-4xl p-6 mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Paraphrasing Tool</h1>

        <textarea
          value={textToParaphrase}
          onChange={handleInputChange}
          placeholder="Enter text to paraphrase"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          rows="12"
          style={{ resize: 'none' }}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-4 py-2 bg-gray-900 cursor-pointer text-white rounded-xl hover:bg-gray-800"
        >
          {loading ? 'Paraphrasing...' : 'Paraphrase'}
        </button>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        {showResult && (
          <div
            ref={resultRef} // 🔸 Attach ref here
            className="transition-all duration-500 ease-in-out transform opacity-100 translate-y-2 bg-gray-100 p-4 rounded-lg border border-gray-300 shadow"
          >
            <strong className="block mb-2 text-gray-700">Paraphrased Text:</strong>
            <p className="text-gray-800 mb-4">{paraphrasedText}</p>
            <button
              onClick={handleCopy}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Copy Text
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Paraphraser;
