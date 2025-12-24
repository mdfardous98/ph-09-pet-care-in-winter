import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const preEmail = location.state?.email || "";

  const [email, setEmail] = useState(preEmail);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
      window.open("https://mail.google.com/", "_blank");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md p-6 border border-gray-200 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#FF8F8F]">
          Reset Password
        </h2>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 w-full p-2 rounded mb-4 focus:ring-2 focus:ring-[#FF8F8F] outline-none transition"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FF8F8F] text-white w-full py-2 rounded mt-2
             hover:bg-[#FF6F91] hover:shadow-lg hover:-translate-y-0.5
             transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
