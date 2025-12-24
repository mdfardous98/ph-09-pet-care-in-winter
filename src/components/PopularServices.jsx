import { useContext } from "react";
import toast from "react-hot-toast";
import { FaStethoscope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import servicesData from "../data/services.json";
import { AuthContext } from "../provider/AuthProvider";

const PopularServices = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const popularServices = servicesData
    .filter((service) => service.rating >= 4.5)
    .slice(0, 6);

  const handleServiceClick = (id) => {
    if (!user) {
      toast.error("Please login or sign up to access this service.");
      navigate("/login");
    } else {
      navigate(`/service/${id}`);
    }
  };

  const handleAllServicesClick = () => {
    if (!user) {
      toast.error("Please login or sign up to view all services.");
      navigate("/login");
    } else {
      navigate("/services");
    }
  };

  return (
    <section className="container mx-auto px-4 mt-24 mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF8F8F] mb-4">
        Popular Winter Care Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
        Give your pet the best this winter with our expert care services,
        trusted by hundreds of loving pet owners.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {popularServices.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 p-6 flex flex-col"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={service.image}
                alt={service.serviceName}
                className="h-64 w-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <div className="bg-[#FFEAEA] p-3 rounded-full">
                <FaStethoscope className="w-6 h-6 text-[#FF8F8F]" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-xl text-[#333]">
                  {service.serviceName}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleServiceClick(service.serviceId)}
              className="btn bg-[#FF8F8F] hover:bg-[#ff6b6b] text-white font-semibold mt-6 rounded-full transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAllServicesClick}
        className="inline-block bg-[#FF8F8F] hover:bg-[#ff6b6b] text-white font-semibold px-10 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
      >
        View All Services
      </button>
    </section>
  );
};

export default PopularServices;
