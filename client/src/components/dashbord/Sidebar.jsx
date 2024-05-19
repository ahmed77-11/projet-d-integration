import { IoIosAddCircle } from "react-icons/io";
import { IoSpeedometerSharp } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      className=" sticky top-5 left-0 bg-sidebar h-screen w-64  sm:block shadow-xl"
      style={{ zIndex: 40 }}
    >
      <div className="p-6">
        <Link
          to="/dashbord"
          className="text-white text-1xl font-semibold uppercase hover:text-gray-300"
        >
          Owner Dashboard
        </Link>
        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <IoIosAddCircle className="mr-3" /> New Report
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link
          to="/dashbord"
          className="flex items-center text-white py-4 pl-6 nav-item"
        >
          <IoSpeedometerSharp className="mr-3" style={{ fontSize: "1.5rem" }} />{" "}
          Dashboard
        </Link>

        <Link
          to="/dashbord/addEstate"
          className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item"
        >
          <IoIosAddCircle className="mr-3" style={{ fontSize: "1.5rem" }} /> Add
          Home
        </Link>

        <Link
          to="/dashbord/EstateList" // Assuming you have this route defined
          className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item"
        >
          <CiBoxList className="mr-3" style={{ fontSize: "1.5rem" }} /> Home
          List
        </Link>

        <Link
          to="/reservation-waitlist" // Assuming you have this route defined
          className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item"
        >
          <FaClipboardList className="mr-3" style={{ fontSize: "1.5rem" }} />{" "}
          Reservation Waitlist
        </Link>

        <Link
          to="/clients" // Assuming you have this route defined
          className="flex items-center text-white hover:opacity-100 py-4 pl-6 nav-item"
        >
          <FaUsers className="mr-3" style={{ fontSize: "1.5rem" }} /> Clients
          List
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
