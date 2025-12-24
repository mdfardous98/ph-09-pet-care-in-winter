import { FaStethoscope } from "react-icons/fa";

const experts = [
  {
    id: 1,
    name: "Dr. Abdul Kalam",
    title: "Medical check-up ",
    image: "https://i.ibb.co.com/wv3xPzv/doc-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Saleha Islam",
    title: " Nutritionist",
    image: "https://i.ibb.co.com/zVQS4m08/doc-2.jpg",
  },
  {
    id: 3,
    name: "Dr. Nahrin Islam",
    title: "Grooming & hygiene",
    image: "https://i.ibb.co.com/pjdK2FrL/doc-3.jpg",
  },
  {
    id: 4,
    name: "Dr. Samia",
    title: "Diet & nutrition plan",
    image: "https://i.ibb.co.com/hxXBDzT1/doc-4.jpg",
  },
];

const ExpertsSection = () => {
  return (
    <section className="my-20 container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-[#FF8F8F] mb-12 tracking-wide">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-[#FF8F8F]/30 mb-5"
              />
              <span className="absolute top-1 right-1 bg-[#FF8F8F] text-white text-xs px-2 py-1 rounded-full shadow-md">
                Vet
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2 mb-1">
              <FaStethoscope className="text-[#FF8F8F]" /> {expert.name}
            </h3>
            <p className="text-sm text-[#FF8F8F] font-medium tracking-wide uppercase">
              {expert.title}
            </p>

            <div className="mt-5">
              <button className="px-4 py-2 text-sm font-medium bg-[#FF8F8F] text-white rounded-full hover:bg-[#ff7070] transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;
