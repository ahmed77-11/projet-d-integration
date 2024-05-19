import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(formData.userType);
    e.preventDefault();
    setLoading(true); // Set loading to true before making the request
    setError(null); // Reset error state

    // Validation check
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmpassword ||
      !formData.address ||
      !formData.telephone ||
      formData.userType === "default"
    ) {
      setError("Please fill all the fields");
      setLoading(false); // Set loading to false
      return;
    }

    try {
      const res = await axios.post("/api/auth/signup/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.ok);

      if (!res.data) {
        throw new Error("Sign-up failed");
      }

      console.log(res.data); // Response data
      setFormData({});
      setLoading(false); // Set loading to false
      navigate("/sign-in");
    } catch (error) {
      setLoading(false); // Set loading to false
      setError(error.message || "Something went wrong");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col p-3 max-w-lg mx-auto">
      <h1 className="text-5xl text-center font-bold my-9">Create An Account</h1>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-4 w-80 my-4"
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Your username"
          className="border px-4 py-2 rounded-xl w-full min-w-lg bg-gray-200"
          onChange={handleChange}
          value={formData.username || ""}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="border px-4 py-2  rounded-xl bg-gray-200"
          onChange={handleChange}
          value={formData.email || ""}
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter Your Address"
          className="border px-4 py-2 rounded-xl bg-gray-200"
          value={formData.address || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telephone"
          id="telephone"
          placeholder="Enter Your Phone Number"
          onChange={handleChange}
          className="border px-4 py-2  rounded-xl bg-gray-200"
          value={formData.telephone || ""}
        />
        <select
          className="border px-4 py-2 text-gray-400 rounded-xl bg-gray-200"
          name="userType"
          id="userType"
          // defaultValue="default"
          onChange={handleChange}
          value={formData.userType || "default"}
        >
          <option className="text-black" value="default">
            choose your user Type
          </option>
          <option className="text-black" value="owner">
            Owner
          </option>
          <option className="text-black" value="customer">
            Customer
          </option>
        </select>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          className="border px-4 py-2  rounded-xl bg-gray-200"
          value={formData.password || ""}
          onChange={handleChange}
        />
        <input
          type="password"
          onChange={handleChange}
          name="confirmpassword"
          id="confirmpassword"
          className="border px-4 py-2  rounded-xl bg-gray-200"
          placeholder="Confirm Your Password"
          value={formData.confirmpassword || ""}
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-black text-white border rounded-xl py-2 px-4 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do you Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signup;
