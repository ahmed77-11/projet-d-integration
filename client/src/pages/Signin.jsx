import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Please fill in all the fields"));
      return;
    }

    try {
      dispatch(signInStart());
      const res = await axios.post("/api/auth/signin/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.data) {
        throw new Error("Sign-in failed");
      }

      setFormData({});
      dispatch(signInSuccess(res.data));
      console.log(res.data.userType.type);
      if (res.data.userType.type === "customer") {
        navigate("/");
      }
      if (res.data.userType.type === "owner") {
        navigate("/dashbord");
      }
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <div className="flex justify-center items-center flex-col p-3 max-w-lg mx-auto">
      <h1 className="text-5xl text-center font-bold my-9">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 my-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="border px-4 py-2 rounded-xl bg-gray-200"
          onChange={handleChange}
          value={formData.email || ""}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          className="border px-4 py-2 rounded-xl bg-gray-200"
          onChange={handleChange} // Corrected: handleChange for password field
          value={formData.password || ""}
        />
        <button
          disabled={loading}
          className="bg-black text-white border rounded-xl py-2 px-4 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signup;
