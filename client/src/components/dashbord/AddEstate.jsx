import { LuHotel } from "react-icons/lu";
import { GiFamilyHouse } from "react-icons/gi";
import { Link } from "react-router-dom";

const AddEstate = () => {
  return (
    <div className="z-50 bg-main h-screen w-full  border-0">
      <div className="flex  items-center justify-center flex-row gap-36 m-0">
        <Link to="/dashbord/addFlat">
          <div className="flex items-center justify-center  my-48 h-60 w-60 bg-sidebar  rounded-2xl">
            <div className="flex flex-col py-24 justify-center items-center gap-3">
              <LuHotel style={{ fontSize: "4.5rem", color: "whitesmoke" }} />
              <span className=" text-slate-100 text-xl font-bold">
                Add Flat
              </span>
            </div>
          </div>
        </Link>
        <Link to="/dashbord/addHouse">
          <div className="flex items-center justify-center  my-48  h-60  w-60  bg-sidebar rounded-2xl">
            <div className="flex flex-col py-24 justify-center items-center gap-3">
              <GiFamilyHouse
                style={{ fontSize: "4.5rem", color: "whitesmoke" }}
              />
              <span className=" text-slate-100 text-xl font-bold">
                Add House
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddEstate;
