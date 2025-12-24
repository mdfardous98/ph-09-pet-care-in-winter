import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.serviceName}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#FF6B6B]">${service.price}</span>
          <Link
            to={`/service/${service.serviceId}`}
            className="bg-[#FF8F8F] hover:bg-[#FF6B6B] text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
