import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../assets/map.css";
import { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios for fetching data
import { Link } from "react-router-dom";

const getValidUrl = (url) => {
  const Imageurl = url.split("\\");
  let validUrl = Imageurl[1];
  validUrl = `http://localhost:5173/uploads/${validUrl}`;
  return validUrl;
};

const MainSection = () => {
  const [allEstates, setAllEstates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/estate/getAllEstates");
      const data = res.data;
      setAllEstates(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };
  const fetchSearchData = async () => {
    try {
      setLoading(true);
      console.log(searchParams);

      // Construct query parameters dynamically
      const queryParams = new URLSearchParams();
      if (searchParams.name) queryParams.append("name", searchParams.name);
      if (searchParams.location)
        queryParams.append("location", searchParams.location);
      if (searchParams.priceMax)
        queryParams.append("priceMax", searchParams.priceMax);
      if (searchParams.priceMin)
        queryParams.append("priceMin", searchParams.priceMin);

      const res = await axios.get(
        `/api/estate/findByNaLocPr?${queryParams.toString()}`
      );
      const data = res.data;

      setAllEstates(data.length > 0 ? data : []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchData();
  };
  return (
    <div className="w-full h-full bg-main z-50">
      <div
        className="w-full h-screen flex justify-center items-center"
        // style={{ height: "800px" }}
      >
        <div className="flex justify-center items-center flex-col  bg-search">
          <div className="py-8">
            <h1 className="text-4xl font-extrabold text-slate-50">
              Rent the House of your dreams with Us
            </h1>
          </div>
          <div className="form-container">
            <form
              onSubmit={handleSubmit}
              className="flex flex-row items-center justify-center"
            >
              <input
                type="search"
                name="name"
                placeholder="Name..."
                className="p-4 outline-none border-5 border-l-0 rounded-l-[25px] border-light-grey text-base font-bold text-gray-800"
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location..."
                className="p-4 outline-none border-5 border-light-grey text-base font-bold text-gray-800"
                onChange={handleChange}
              />
              <input
                type="text"
                name="priceMin"
                placeholder="Price minium..."
                className="p-4 outline-none border-5 border-light-grey text-base font-bold text-gray-800"
                onChange={handleChange}
              />
              <input
                type="text"
                name="priceMax"
                placeholder="Price maximum..."
                className="p-4 outline-none border-5 border-light-grey text-base font-bold text-gray-800"
                onChange={handleChange}
              />
              <button className="p-4 outline-none border-5 border-r-0 rounded-r-[25px] border-light-grey bg-green-400 text-base font-bold text-slate-50">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Failed to load estates. Please try again later.</p>
      ) : (
        <div className="flex flex-col gap-10 items-center justify-center">
          {allEstates.map((estate, index) => (
            <Link to={`/estateProfile/${estate.id}`} key={index}>
              <div
                key={index}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {estate.imagesUrls.length > 0 ? (
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={getValidUrl(estate.imagesUrls[0].url)}
                    alt="Property Image"
                  />
                ) : (
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="/public/home.png"
                    alt="Property Image"
                  />
                )}
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {estate.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {estate.location}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {estate.description}
                  </p>
                  <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    ${estate.price} / per Month
                  </p>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {Array(estate.rate)
                        .fill(0)
                        .map((_, idx) => (
                          <svg
                            key={idx}
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {estate.rate}.0
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <MapContainer
            center={[37.42, -122.084614]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "50vh", width: "50%", marginBottom: "100px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {allEstates.map((estate, index) => (
              <Marker key={index} position={[estate.lan, estate.lag]}>
                <Popup>{estate.title}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default MainSection;
