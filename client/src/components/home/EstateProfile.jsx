import Carousel from "../dashbord/Carousel";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../../assets/map.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Calendar from "./Calender";
import PopupForm from "./PopupForm";

const EstateProfile = () => {
  const [estate, setEstate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reservation, setReservation] = useState({});
  const [open, setOpen] = useState(false);

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `/api/estate/getEstateById/${params.estateId}`
        );
        const data = res.data;
        setEstate(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        console.log(error);
        return;
      }
    };
    fetchData();
  }, [params.estateId, error]);
  useEffect(() => {
    const fetchReservation = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `/api/reservation/getReservationByEstate/${params.estateId}`
        );
        const data = res.data;

        setReservation(data);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchReservation();
  }, [params.estateId, error]);
  // console.log(reservation);

  const lan = parseFloat((Math.round(estate.lan * 100) / 100).toFixed(2)) || 0;
  const lag = parseFloat((Math.round(estate.lag * 100) / 100).toFixed(2)) || 0;
  console.log(lan, lag);

  const position = [lan, lag];

  const splitedLoc = estate.location ? estate.location.split(",") : [];

  // console.log(estate.imagesUrls[0].url)
  console.log(estate);
  const handleOpen = () => {
    setOpen(!open);
  };

  return loading ? (
    <div className="loader"></div>
  ) : (
    <div className="w-full px-12 mt-12 overflow-auto">
      <h1 className="text-4xl m-15 font-bold flex items-center">
        {estate.name}
      </h1>
      <h2 className="my-5 w-2/4 font-bold logo-color">Property Overview</h2>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Property Type</p>
            <p>{estate.estateType}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Property Address</p>
            <p>{splitedLoc[0]}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Property Price</p>
            <p>{estate.price} /Per Month</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Property Rate</p>
            <p>{estate.rate}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Property State</p>
            <p> {`${splitedLoc[1]},${splitedLoc[2]}`}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Property Description</p>
            <p>{estate.description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10">
        <div className="bg-gray-200 rounded-lg p-7 text-center">
          <h2 className="text-lg font-semibold">Bedrooms</h2>
          <p className="text-3xl font-bold">{estate.bedrooms}</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-7 text-center">
          <h2 className="text-lg font-semibold">Bathrooms</h2>
          <p className="text-3xl font-bold">{estate.bathrooms}</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-7 text-center">
          {estate.estateType === "flat" ? (
            <>
              <h2 className="text-lg font-semibold">Floor</h2>
              <p className="text-3xl font-bold">
                {estate.flat ? estate.flat.floors : "N/A"}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold">Number Of Floors</h2>
              <p className="text-3xl font-bold">
                {estate.house ? estate.house.numberOfFloor : "N/A"}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-around mt-10 ">
        {estate.estateType === "flat" ? (
          <div className="bg-gray-200 rounded-lg p-7 text-center">
            <h2 className="text-lg font-semibold">Building Name</h2>
            <p className="text-3xl font-bold">
              {estate.flat ? estate.flat.buildingName : "N/A"}
            </p>
          </div>
        ) : (
          <div className="bg-gray-200 rounded-lg p-7 text-center">
            <h2 className="text-lg font-semibold">
              {estate.house && estate.house.pool ? "Have Pool" : "No Pool"}
            </h2>
          </div>
        )}
        ;
        {estate.estateType === "flat" ? (
          <div className="bg-gray-200 rounded-lg p-7 text-center">
            {estate.flat && estate.flat.parking ? "Have Parking" : "No Parking"}
          </div>
        ) : (
          <div className="bg-gray-200 rounded-lg p-7 text-center">
            <h2 className="text-lg font-semibold">
              {estate.house && estate.house.garage
                ? "Have Garage"
                : "No Garage"}
            </h2>
          </div>
        )}
        ;
        {estate.estateType === "house" && (
          <div className="bg-gray-200 rounded-lg p-7 text-center">
            <h2 className="text-lg font-semibold">
              {estate.house && estate.house.backyard
                ? "Have Backyard"
                : "No Backyard"}
            </h2>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center my-10 p-6 shadow-black">
        {estate.imagesUrls && estate.imagesUrls.length > 0 && (
          <div className="flex justify-center items-center my-10 p-6 shadow-black">
            <div className="w-3/4">
              <Carousel images={estate.imagesUrls} />
            </div>
          </div>
        )}
      </div>
      {reservation && (
        <div className=" mt-0 py-9">
          <h1 className="text-2xl font-bold text-center my-4">
            Reservation Calendar
          </h1>
          <Calendar reservations={reservation} />
        </div>
      )}

      {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      {!open && (
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{
            height: "50vh",
            width: "100%",
            marginBottom: "100px",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </MapContainer>
      )}
      <div>
        <button
          onClick={handleOpen}
          className="w-full  mb-32 p-6 bg-sidebar text-2xl font-bold text-white text-center my-4"
        >
          Make Reservation
        </button>
      </div>
      {open && <PopupForm handleOpen={handleOpen} estateId={params.estateId} />}
    </div>
  );
};

export default EstateProfile;
