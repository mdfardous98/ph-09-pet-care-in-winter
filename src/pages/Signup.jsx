import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {
  const { createUser, signInWithGoogle, user, authLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [hasLength, setHasLength] = useState(false);

  useEffect(() => {
    setHasUpper(/[A-Z]/.test(password));
    setHasLower(/[a-z]/.test(password));
    setHasLength(password.length >= 6);
  }, [password]);

  useEffect(() => {
    if (!authLoading && user) {
      navigate("/", { replace: true });
    }
  }, [user, authLoading, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!acceptedTerms)
      return toast.error("You must accept the Terms and Conditions!");
    if (!hasUpper || !hasLower || !hasLength)
      return toast.error("Password requirements not met!");

    try {
      await createUser(email, password, name, photo);
      toast.success("Signup successful! Redirecting...");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google login successful! Redirecting...");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (authLoading) return <Loading />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-pink-200 via-pink-300 to-pink-400 p-6">
      <form
        className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-sm border border-white/30"
        onSubmit={handleSignup}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
          Sign Up
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-400"
            required
          />

          <input
            type="text"
            placeholder="Photo URL (optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-400"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-400"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <ul className="text-sm space-y-1">
            <li className={hasUpper ? "text-green-500" : "text-red-500"}>
              • At least one uppercase letter
            </li>
            <li className={hasLower ? "text-green-500" : "text-red-500"}>
              • At least one lowercase letter
            </li>
            <li className={hasLength ? "text-green-500" : "text-red-500"}>
              • Minimum 6 characters
            </li>
          </ul>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mr-2 accent-pink-500"
            />
            <label className="text-sm">
              I accept the{" "}
              <Link to="#" className="text-pink-500 underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold shadow-md hover:scale-105 transform transition"
          >
            Register
          </button>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-700 hover:text-white transition"
          >
            <FaGoogle /> Sign Up with Google
          </button>

          <p className="text-center text-sm text-gray-700 mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
