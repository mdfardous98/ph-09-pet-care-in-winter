import React, { useState } from "react";
import { FaTemperatureHigh, FaPaw, FaCut } from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Keep Them Warm",
    description:
      "Use pet sweaters or blankets to keep your pets warm during winter.",
    icon: <FaTemperatureHigh size={24} color="#FF8F8F" />,
    image:
      "https://i.ibb.co.com/4ncDhmSS/Gemini-Generated-Image-1r0m9f1r0m9f1r0m.png",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description:
      "Apply paw balm or pet booties to protect paws from ice and snow.",
    icon: <FaPaw size={24} color="#FF8F8F" />,
    image:
      "https://i.ibb.co.com/RT92CHFd/Gemini-Generated-Image-dyzgnzdyzgnzdyzg.png",
  },
  {
    id: 3,
    title: "Regular Grooming",
    description:
      "Keep fur clean and trimmed to avoid matting and cold-related issues.",
    icon: <FaCut size={24} color="#FF8F8F" />,
    image:
      "https://i.ibb.co.com/qM4ZTLjr/Gemini-Generated-Image-p76jtpp76jtpp76j.png",
  },
];

const TipsSection = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="my-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF8F8F] mb-3">
          Essential Winter Care Tips for Your Pets
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Make sure your pets stay warm, healthy, and happy during the chilly
          winter months with these expert-recommended tips.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              {!loadedImages[tip.id] && (
                <div className="w-full h-56 bg-gray-200 animate-pulse rounded-t-2xl" />
              )}
              <img
                src={tip.image}
                alt={tip.title}
                loading="lazy"
                onLoad={() => handleImageLoad(tip.id)}
                className={`w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 ${
                  loadedImages[tip.id] ? "opacity-100" : "opacity-0"
                } hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl"></div>
            </div>

            <div className="p-6 text-center">
              <div className="flex justify-center mb-4 bg-[#FFEAEA] w-16 h-16 rounded-full items-center mx-auto">
                {tip.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;
