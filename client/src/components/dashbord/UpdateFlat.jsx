/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateFlat = ({ estate, toggleModal }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: estate.name,
    location: estate.location,
    price: estate.price,
    description: estate.description,
    bedrooms: estate.bedrooms,
    bathrooms: estate.bathrooms,
    buildingName: estate.flat.buildingName,
    floors: estate.flat.floors,
    parking: estate.flat.garage ? true : false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.put(
        `/api/estate/updateFlat/${estate.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate("/dashbord/estateList");
      setError("updated");
    } catch (error) {
      console.log(error);
      setError(error);
      return;
    }
  };
  return (
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
        onClick={toggleModal}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <div className="inline-block align-bottom w-full p-20 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <h1 className="logo-color mb-10 text-center font-bold text-2xl">
          Update Flat
        </h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Flat Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
                placeholder="Enter your Flat name"
                required=""
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
                placeholder="Flat Location"
                required=""
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                value={formData.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
                placeholder="Flat Price"
                required=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Number Of Bedrooms
              </label>
              <input
                type="text"
                name="bedrooms"
                value={formData.bedrooms}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
                placeholder="12"
                required=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Number Of Bathrooms
              </label>
              <input
                type="text"
                name="bathrooms"
                value={formData.bathrooms}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
                placeholder="12"
                onChange={handleChange}
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Description
              </label>
              <textarea
                id="description"
                rows="8"
                value={formData.description}
                name="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500    "
                placeholder="Your description here"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Building Name
              </label>
              <input
                type="text"
                name="buildingName"
                id="buildingName"
                onChange={handleChange}
                value={formData.buildingName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
                placeholder="Enter your Flat name"
                required=""
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Floors
              </label>
              <input
                type="text"
                name="floors"
                id="floors"
                onChange={handleChange}
                value={formData.floors}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    "
                placeholder="12"
                required=""
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Parking
              </label>
              <div className="flex items-center mb-4">
                <input
                  onChange={handleChange}
                  id="default-radio-1"
                  type="radio"
                  value="true"
                  // checked={formData.parking === "true"}
                  name="parking"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  No
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={handleChange}
                  // checked={formData.parking === "false"}
                  id="default-radio-2"
                  type="radio"
                  value="false"
                  name="parking"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Yes
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-sidebar text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add product
          </button>
        </form>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
};

export default UpdateFlat;
