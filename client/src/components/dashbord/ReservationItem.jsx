/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
const ReservationItem = ({ reservation, navigate }) => {
  const makeDescion = async (status) => {
    try {
      const res = await axios.post(
        `/api/reservation/reservationDescion/${reservation.id}`,
        { status },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      if (res.status === 200) {
        console.log(res.data);
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td className="px-5 z-50 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div>{reservation.id}</div>
          <div className="ml-3">
            <p className="text-gray-900 text-center whitespace-no-wrap">
              {reservation.estateName}
            </p>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {reservation.customerName}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {reservation.startDate}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {reservation.endDate}
        </p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <button
            onClick={() => makeDescion("accepted")}
            className="bg-green-500 mr-2 hover:bg-grenn-700  z-50 text-white font-bold py-2 px-4 rounded"
          >
            <TiTick />
          </button>
          <button
            onClick={() => makeDescion("refused")}
            className="bg-red-500 mr-2 hover:bg-green-700  z-50 text-white font-bold py-2 px-4 rounded"
          >
            <ImCross />
          </button>
        </span>
      </td>
    </tr>
  );
};

export default ReservationItem;
