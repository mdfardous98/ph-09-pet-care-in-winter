import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle, user, authLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!authLoading && user) navigate(from, { replace: true });
  }, [user, authLoading, from, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success("Login successful!");
    } catch (err) {
      const error = err; 
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Password is incorrect!");
          break;
        case "auth/user-not-found":
          toast.error("User not found!");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email!");
          break;
        default:
          toast.error(error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google login successful!");
    } catch (err) {
      const error = err; 
      console.log(error);
      toast.error("Google login failed!");
    }
  };

  if (authLoading) return <Loading />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-pink-200 via-pink-300 to-pink-400 p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-sm border border-white/30"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
          Login
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-400"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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

          <Link
            to="/forget-password"
            state={{ email }}
            className="text-sm text-pink-500 underline mb-2 inline-block"
          >
            Forget Password?
          </Link>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold shadow-md hover:scale-105 transform transition"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-700 hover:text-white transition"
          >
            <FaGoogle /> Login with Google
          </button>

          <p className="text-center text-sm text-gray-700 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-pink-500 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
