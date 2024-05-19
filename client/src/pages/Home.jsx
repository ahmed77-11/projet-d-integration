import { Route, Routes } from "react-router-dom";
import Header from "../components/dashbord/Header";
import Footer from "../components/dashbord/Footer";
import MainSection from "../components/home/MainSection";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      {" "}
      {/* Make sure the container fills the height */}
      <Header />
      <div className="flex-grow">
        {" "}
        {/* Let the content area grow */}
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/estateProfile" element={<MainSection />} />{" "}
          {/* Use EstateProfile component */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
