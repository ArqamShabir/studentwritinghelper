const JoinCommunity = () => {
    return (
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left - Text Section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-extrabold">Join Our Community</h2>
            <p className="text-lg mt-4">
              Get the latest updates, new tools, and exclusive content delivered to your inbox.  
            </p>
          </div>
  
          {/* Right - Signup Form */}
          <div className="w-full md:w-1/3">
            <form className="flex flex-col md:flex-row bg-white p-2 rounded-xl shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 text-gray-800 w-full rounded-lg md:rounded-l-xl md:rounded-r-none focus:outline-none"
              />
              <button className="bg-gray-900 text-white px-6 py-3 mt-2 md:mt-0 md:rounded-r-xl hover:bg-gray-700 transition">
                Subscribe
              </button>
            </form>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default JoinCommunity;
  