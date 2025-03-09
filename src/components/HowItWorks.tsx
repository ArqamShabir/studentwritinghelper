const HowItWorks = () => {
    const steps = [
      { title: "Select a Calculator", desc: "Choose from a variety of student tools.", icon: "📌" },
      { title: "Enter Your Data", desc: "Fill in the required details accurately.", icon: "✏️" },
      { title: "Get Instant Results", desc: "See the calculated results in seconds.", icon: "⚡" },
      { title: "Save & Share", desc: "Download or share your results easily.", icon: "📤" },
    ];
  
    return (
        <div className="bg-gray-100">
      <section className="py-16 px-6 bg-gray-100 mx-auto max-w-[1440px]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-xl">
                <div className="text-4xl">{step.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    );
  };
  
  export default HowItWorks;
  