import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const alertShownRef = useRef(false);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!user && !alertShownRef.current) {
        toast.error("You need to login first to access your profile.");
        alertShownRef.current = true;
        navigate("/login");
      } else if (user) {
        setName(user.displayName || "");
        setPhoto(user.photoURL || "");
      }
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [user, navigate]);

  const handleUpdate = async () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty!");
      return;
    }

    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) return <Loading />;
  if (!user) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-6 border border-gray-200 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#FF8F8F]">
          My Profile
        </h2>

        <div className="flex justify-center mb-6">
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-28 h-28 rounded-full object-cover border-2 border-[#FF8F8F]"
            />
          ) : (
            <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gray-200 text-gray-400 text-5xl border-2 border-[#FF8F8F]">
              <FaUser />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 w-full p-2 rounded focus:ring-2 focus:ring-[#FF8F8F] outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="border border-gray-300 w-full p-2 rounded focus:ring-2 focus:ring-[#FF8F8F] outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="border border-gray-300 w-full p-2 rounded bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        <button
          onClick={handleUpdate}
          className="mt-6 w-full py-2 bg-[#FF8F8F] text-white rounded-lg hover:bg-[#FF6B6B] transition duration-300 font-medium"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
