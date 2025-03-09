import Image from "next/image";
    const SeoSection = () => {
      return (
        <div className="bg-gray-50 w-full">
        <section className="py-8 px-5 bg-gray-50 mx-auto max-w-[1440px] md:py-16 px-12">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            
            {/* Left: Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Your Academic Assistant
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Student Writing Helper provides essential tools like GPA calculators, scientific 
                calculators, and paraphrasing tools to assist students in their academic journey. 
                Our goal is to make studying easier with simple and accurate tools.
              </p>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Join thousands of students who use our platform daily to improve their academic 
                performance effortlessly.
              </p>
            </div>
    
            {/* Right: Image */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/featuredImage.jpg" 
                alt="Student Writing Helper"
                width={500}
                height={400}
                className=""
              />
            </div>
    
          </div>
        </section>
        </div>
      );
    };    
  
  export default SeoSection;
  