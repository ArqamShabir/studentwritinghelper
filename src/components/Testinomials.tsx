"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Lukas S.",
    review:
      "Student Writing Helper made my life easier! The GPA calculator is so accurate and easy to use and pleasent design.",
    rating: 5,
  },
  {
    name: "Felix",
    review:
      "I love the tools on this website. The UI is very clean, and the tools work flawlessly! Highly Recommended",
    rating: 5,
  },
  {
    name: "Zara K.",
    review:
      "This platform is a lifesaver! The calculators are fast, and I use them daily for my studies and other works.",
    rating: 4.5,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100">
    <section className="py-16 px-6 bg-gray-100 mx-auto max-w-[1440px]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          What Our Users Say
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
                <div className="mt-4 flex justify-center">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <span className="text-yellow-500 text-xl">☆</span>
                  )}
                </div>
                <p className="mt-2 text-gray-900 font-semibold">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
