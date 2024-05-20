import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservationItem from "./ReservationItem";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/reservation/getReservationByOwner");
        const data = res.data;
        setReservations(data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchReservation();
  }, []);

  return loading ? (
    <div>Loading...</div> // Add a loading indicator
  ) : reservations.length < 0 ? (
    <div>No Data Found</div>
  ) : (
    <div className="w-full px-12 mt-12">
      <p className="text-2xl pb-3 flex items-center">Estates List</p>
      <div className="bg-white overflow-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Estate Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                customer Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                end Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.length ? (
              reservations.map((reservation, index) => (
                <ReservationItem
                  navigate={navigate}
                  reservation={reservation}
                  key={index}
                /> // Corrected component name and props
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-5 py-5 bg-white text-center">
                  No estates found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ReservationList;
