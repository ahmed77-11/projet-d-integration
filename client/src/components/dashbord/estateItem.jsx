/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import UpdateHouse from "./UpdateHouse";
import UpdateFlat from "./UpdateFlat";

const EstateItem = ({ estate, navigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const deleteEstate = async (estateId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this estate?"
    );
    if (isConfirmed) {
      try {
        const res = await axios.delete(`/api/estate/deleteEstate/${estateId}`);
        if (res.status === 200) {
          console.log("deleted");
          navigate("/dashbord/estateList");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };
  const transformDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const elapsedMilliseconds = now - date;

    // Convert milliseconds to seconds
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} seconds ago`;
    } else if (elapsedSeconds < 3600) {
      const minutes = Math.floor(elapsedSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (elapsedSeconds < 86400) {
      const hours = Math.floor(elapsedSeconds / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(elapsedSeconds / 86400);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };
  return (
    <tr>
      <td className="px-5 z-50 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div>{estate.id}</div>
          <div className="ml-3">
            <p className="text-gray-900 text-center whitespace-no-wrap">
              {estate.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{estate.estateType}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {transformDate(estate.createdAt)}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <Link to={`/dashbord/estateProfile/${estate.id}`}>
            <button className="bg-blue-500 mr-2 hover:bg-blue-700  z-50 text-white font-bold py-2 px-4 rounded">
              <FaEye />
            </button>
          </Link>
          <button
            onClick={toggleModal}
            className="bg-green-500 mr-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaPenAlt />
          </button>
          <Link to="/">
            <button
              onClick={() => deleteEstate(estate.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              <MdDelete />
            </button>
          </Link>
        </span>
        {isModalOpen && (
          <div className="fixed z-50 inset-0  overflow-y-auto">
            {estate.estateType === "house" ? (
              <UpdateHouse
                estate={estate}
                setIsModalOpen={setIsModalOpen}
                toggleModal={toggleModal}
              />
            ) : (
              <UpdateFlat estate={estate} toggleModal={toggleModal} />
            )}
          </div>
        )}
      </td>
    </tr>
  );
};

export default EstateItem;
