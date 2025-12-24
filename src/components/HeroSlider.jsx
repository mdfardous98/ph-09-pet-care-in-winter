import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/3yBd3DMN/slider-1.png",
    title: "Winter Adventure Ready",
    subtitle: "Keep them warm on every snowy expedition.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/KxgGKB5R/slider-2.png",
    title: "Ultimate Cozy Comfort",
    subtitle: "Essential bedding and warmth for indoor relaxation.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/d4MX0DP5/slider-3.png",
    title: "Cold Weather Essentials",
    subtitle: "Boots, coats, and gear to brave the frost safely.",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/d4b6NFYh/slider-4.png",
    title: "Year-Round Wellness Check",
    subtitle: "Expert tips for winter skin, coat, and paw care.",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      className="h-[90vh] md:h-screen hero-swiper"
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
           
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms] ease-linear"
            />

        
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

            <div className="absolute z-20 text-center px-6 md:px-10 max-w-2xl mx-auto">
              <h2
                className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg 
                           animate-fadeInUp"
              >
                {slide.title}
              </h2>
              <p
                className="mt-4 text-lg md:text-2xl text-gray-200 font-light tracking-wide 
                           animate-fadeInUp delay-300"
              >
                {slide.subtitle}
              </p>
              <button className="mt-8 px-6 py-3 bg-[#FF8F8F] text-white text-lg font-medium rounded-full shadow-md hover:bg-[#ff7070] transition-all duration-300">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
