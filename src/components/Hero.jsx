const Hero = () => {
    return (
      <div className=" bg-gray-900 w-full">
      <section style={{maxHeight:'700px'}} className="relative h-screen flex items-center justify-center text-center px-6 bg-gray-900 mx-auto max-w-[1440px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
        ></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Powerful Calculators for Students
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Get instant and accurate calculations for GPA, Math, and more.
          </p>
          <div className="mt-6">
            <a
              href="#featured"
              className="px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Explore Calculators
            </a>
          </div>
        </div>
      </section>
      </div>
    );
  };
  
  export default Hero;
  