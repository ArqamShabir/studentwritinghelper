"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Lukas S.",
    review:
      "Student Writing Helper made my life easier. The GPA calculator is fast and the design feels professional.",
    rating: 5,
  },
  {
    name: "Felix",
    review:
      "I love the tools on this website. The UI is clean and the results are reliable.",
    rating: 5,
  },
  {
    name: "Zara K.",
    review:
      "This platform is a lifesaver. The calculators are fast, and I use them daily.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-sand-50">
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-ink-900 md:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-3 text-ink-600">
            Trusted by students, professionals, and planners.
          </p>
        </div>

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
              <div className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
                <p className="text-sm text-ink-600">"{testimonial.review}"</p>
                <div className="mt-4 flex justify-center gap-1">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map(
                    (_, i) => (
                      <Star key={i} size={18} className="text-amber-500" />
                    )
                  )}
                </div>
                <p className="mt-3 text-ink-900 font-semibold">
                  {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
