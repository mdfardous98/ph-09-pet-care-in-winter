import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ServicesPage from "../pages/ServicesPage";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPassword from "../pages/ForgetPassword";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/services"
        element={
          <PrivateRoute>
            <ServicesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/service/:id"
        element={
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesWrapper;
