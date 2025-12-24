import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";
import Loading from "../components/Loading";

const ServicesPage = () => {
  const { user, authLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const alertShown = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!authLoading && !alertShown.current) {
      if (!user) {
        alertShown.current = true;

        setTimeout(() => {
          toast.error("Please log in to access our services.", {
            duration: 2000,
            position: "top-center",
          });
        }, 100);

        const navTimer = setTimeout(() => {
          navigate("/login", { state: { from: location } });
        }, 2100);

        return () => clearTimeout(navTimer);
      } else {
        setServices(servicesData);
      }
    }
  }, [user, authLoading, navigate, location]);

  if (loading || authLoading) return <Loading />;
  if (!user) return null;

  return (
    <div className="container mx-auto px-4 mt-24 mb-16">
      <h2 className="text-4xl font-extrabold text-[#FF8F8F] mb-8 text-center">
        Our Winter Care Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
