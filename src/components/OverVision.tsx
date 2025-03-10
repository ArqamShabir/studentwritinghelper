import Image from "next/image";

const OurVision = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 flex justify-center hidden">
      <div className="container mx-auto text-white flex flex-col gap-8 md:flex-row justify-center items-center max-w-6xl">
                <div className="w-full flex justify-center md:w-1/3">
          <Image
            src="/ceo.jpg" 
            alt="CEO"
            width={300}
            height={300}
            style={{width:'300px', height:'300px', objectFit:'cover'}}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <p className="text-lg mt-4 opacity-80 leading-relaxed">
            At <span className="text-blue-400 font-semibold">Student Writing Helper</span>, we believe in making education 
            smarter and more efficient. Our mission is to empower students with advanced AI tools.
          </p>
          <p className="text-md mt-6 italic text-gray-300">
            "Technology should simplify, not complicate."  
            <br /> - CEO, M. ARQAM
          </p>
          <a href="https://multishells.com" className="mt-6 inline-block text-blue-300 hover:underline flex items-center gap-2">
            <span>Learn More About Our Mission</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurVision;
