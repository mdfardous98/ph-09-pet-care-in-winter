import {
  FaFacebook,
  FaGithub,
  FaPaw,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FFF0F0] via-[#FFEAEA] to-[#FFF7F7] text-gray-700 mt-24 shadow-inner rounded-t-3xl border-t border-[#FFBDBD]/40">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
      
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-extrabold text-[#FF8F8F] hover:scale-105 transition-transform duration-300"
        >
          <FaPaw className="text-4xl text-[#FF8F8F]" />
          PetCare
        </Link>

       
        <div className="flex gap-6 text-2xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#1DA1F2] transition-transform transform hover:scale-110 duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#FF0000] transition-transform transform hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#1877F2] transition-transform transform hover:scale-110 duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/mdfardous98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#333] transition-transform transform hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
        </div>

       
        <p className="text-gray-600 text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="hidden sm:inline">|</span> All rights reserved by{" "}
          <a
            href="https://github.com/mdfardous98"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#FF8F8F] hover:text-[#FF6B6B] transition duration-300"
          >
            MD FARDOUS
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
