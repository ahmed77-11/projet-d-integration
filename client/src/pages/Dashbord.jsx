import { Route, Routes } from "react-router-dom";
import Footer from "../components/dashbord/Footer";
import Header from "../components/dashbord/Header";
import Sidebar from "../components/dashbord/Sidebar";
import AddEstate from "../components/dashbord/AddEstate";
import AddFlat from "../components/dashbord/AddFlat";
import AddHouse from "../components/dashbord/AddHouse";
import EstatesList from "../components/dashbord/EstatesList";
import ReservationList from "../components/dashbord/ReservationList";

const Dashbord = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        {/* <div style={{ flex: 1 }}></div> */}
        <div
          style={{ flex: 6 }}
          className="w-full overflow-x-hidden border-t flex flex-col"
        >
          <Routes>
            <Route path="/addEstate" element={<AddEstate />} />
            <Route path="/addFlat" element={<AddFlat />} />
            <Route path="/addHouse" element={<AddHouse />} />
            <Route path="/EstateList" element={<EstatesList />} />
            <Route path="/reservationWhiteList" element={<ReservationList />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashbord;
// <div className="bg-gray-100 font-family-karla flex">
//   <Header />
//   <div className="w-full flex flex-col h-screen overflow-y-hidden">
//     <Sidebar />
//     <div className="w-full overflow-x-hidden border-t flex flex-col">
//       <Routes>
//         <Route path="/" element={<MainContent />} />
//         <Route path="/main" element={<EstateProfile />} />
//       </Routes>
//     </div>
//     <Footer />
//   </div>
// </div>
