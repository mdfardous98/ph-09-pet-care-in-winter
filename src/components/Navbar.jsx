import { useContext, useState } from "react";
import { FaBars, FaPaw, FaTimes, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-[#FF8F8F]/20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-[#FF8F8F] hover:scale-105 transition-transform duration-300"
        >
          <FaPaw className="text-3xl" /> PetCare
        </Link>

        <button
          className="md:hidden text-2xl text-[#FF8F8F]"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`absolute md:static left-0 top-full w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:items-center gap-6 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible md:visible md:opacity-100"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block md:inline-block px-6 py-3 text-sm font-medium ${
                isActive
                  ? "text-[#FF8F8F] border-b-2 border-[#FF8F8F]"
                  : "text-gray-700 hover:text-[#FF8F8F] hover:border-b-2 hover:border-[#FF8F8F]/70"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block md:inline-block px-6 py-3 text-sm font-medium ${
                isActive
                  ? "text-[#FF8F8F] border-b-2 border-[#FF8F8F]"
                  : "text-gray-700 hover:text-[#FF8F8F] hover:border-b-2 hover:border-[#FF8F8F]/70"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block md:inline-block px-6 py-3 text-sm font-medium ${
                isActive
                  ? "text-[#FF8F8F] border-b-2 border-[#FF8F8F]"
                  : "text-gray-700 hover:text-[#FF8F8F] hover:border-b-2 hover:border-[#FF8F8F]/70"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </NavLink>

          {user ? (
            <div className="flex flex-row md:items-center gap-4 mt-3 md:mt-0 px-6 md:px-0">
              <div className="relative group">
                <Link
                  to="/profile"
                  className="flex items-center justify-center"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      className="w-10 h-10 object-cover rounded-full cursor-pointer border-2 border-[#FF8F8F] hover:scale-105 transition"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400 text-xl cursor-pointer border-2 border-[#FF8F8F]">
                      <FaUser />
                    </div>
                  )}
                </Link>
                <span className="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                  {user.displayName || "User"}
                </span>
              </div>

              <button
                onClick={() => {
                  logOut();
                  setIsOpen(false);
                }}
                className="bg-[#FF8F8F] hover:bg-[#ff6b6b] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-row md:items-center gap-3 mt-3 md:mt-0 px-6 md:px-0">
              <Link
                to="/login"
                className="px-5 py-2 rounded-full text-sm font-medium border border-[#FF8F8F] text-[#FF8F8F] hover:bg-[#FF8F8F] hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 rounded-full text-sm font-medium border border-green-400 text-green-500 hover:bg-green-500 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
