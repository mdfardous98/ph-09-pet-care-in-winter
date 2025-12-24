import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ForgetPassword from "../pages/ForgetPassword";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/forget-password" element={<ForgetPassword / {<ForgetPassword />} />
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