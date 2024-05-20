// src/components/PopupForm.js
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";

// eslint-disable-next-line react/prop-types
const PopupForm = ({ handleOpen, estateId }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState();
  const params = useParams();

  console.log(estateId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/api/reservation/addReservation/${params.estateId}`,
        {
          startDate,
          endDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      setError("added");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
    // handlePopup();
  };

  return (
    <div className="flex z-50 justify-center items-center h-screen">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <button className="text-red-500 float-right" onClick={handleOpen}>
            &#10005;
          </button>
          <h2 className="text-2xl mb-4">Fill the Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Start Date:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">End Date:</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-sidebar text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
