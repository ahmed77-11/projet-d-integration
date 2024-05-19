import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

import img from "C:/Users/mghir/Pictures/Screenshots/Capture d'écran 2024-03-05 190204.png";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="w-full items-center bg-white py-2 px-6  sm:flex">
      <div className="w-1/2 ">
        <h1 className="logo-color">ARK HOMES</h1>
      </div>
      <div className="relative w-1/2 flex items-center justify-end">
        <div className="mr-4 w-15 h-15 flex items-center justify-center gap-5">
          <IoIosNotifications />
          <FaEnvelope />
        </div>
        <button
          onClick={handleOpen}
          className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        >
          <img src={img} />
        </button>
        {open && (
          <div className="absolute w-32 z-60 bg-white rounded-lg shadow-lg py-2 mt-16">
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Account
            </a>
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Sign Out
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
