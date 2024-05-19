import axios from "axios";
import { useEffect, useState } from "react";
import EstateItem from "./estateItem"; // Corrected the import and component name
import { useNavigate } from "react-router-dom";

const EstatesList = () => {
  const navigate = useNavigate();
  const [estates, setEstates] = useState([]);
  console.log(estates);

  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/estate/getEstatesByOwner");
        const data = res.data;
        setEstates(data);
      } catch (error) {
        console.log(error);
        setError(error);
        return;
      }
    };
    fetchData();
  }, []);
  console.log(error);
  return (
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
                Estate Type
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created at
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {estates.length ? (
              estates.map((estate, index) => (
                <EstateItem navigate={navigate} estate={estate} key={index} /> // Corrected component name and props
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

export default EstatesList;
