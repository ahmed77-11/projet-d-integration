import { useState } from "react";
import "../../assets/map.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddFlat = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    buildingName: "",
    floors: "",
    parking: "true",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "name",
      "location",
      "price",
      "description",
      "bedrooms",
      "bathrooms",
      "buildingName",
      "floors",
      "parking",
      "images",
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      // Handle error when required fields are not filled
      setError("Please fill in all the fields");
      return;
    }
    const formDataToSend = new FormData();
    for (let key in formData) {
      console.log(key);
      if (key === "images") {
        formData.images.forEach((image, index) => {
          formDataToSend.append(key, image);
          console.log(index);
          console.log(image);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }
    console.log(formDataToSend);
    try {
      const response = await axios.post("/api/estate/addFlat", formDataToSend, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      });
      if (response.status === 200) navigate("/dashbord");
    } catch (error) {
      console.log(error);
      setError(error);
      return;
    }
  };
  return (
    <section className="bg-main z-30 ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Add a New Flat</h2>
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
                  checked={formData.parking === "true"}
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
                  checked={formData.parking === "false"}
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
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Images
              </label>
              <input
                type="file"
                name="images"
                id="images"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                onChange={handleImageChange}
                multiple // Allow selecting multiple images
              />
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
    </section>
  );
};

export default AddFlat;
