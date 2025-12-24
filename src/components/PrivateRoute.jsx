import { useContext, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const alertShown = useRef(false);

  useEffect(() => {
    if (!loading && !user && !alertShown.current) {
      alertShown.current = true;
      setTimeout(() => {
        toast.error("Please log in to access this page.", {
          duration: 2000,
          position: "top-center",
        });
      }, 100);
    }
  }, [loading, user]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#fff5f5]">
        <div className="loading loading-spinner text-[#FF8F8F] loading-lg mb-4"></div>
        <p className="text-gray-600 font-medium animate-pulse">
          Loading, please wait...
        </p>
      </div>
    );

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default PrivateRoute;
