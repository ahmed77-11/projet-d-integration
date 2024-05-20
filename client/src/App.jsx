// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import EstateProfile from "./components/home/EstateProfile";
import Dashbord from "./pages/Dashbord";
import PrivateRoute from "./components/PrivateRoute";

import "./index.css";

import Unithorized from "./components/Unithorized";
import UserTypeOwner from "./components/UserTypeOwner";
import UserTypeCustomer from "./components/UserTypeCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/unithorized" element={<Unithorized />} />
        <Route element={<PrivateRoute />}>
          <Route element={<UserTypeOwner />}>
            <Route path="/dashbord/*" element={<Dashbord />} />
          </Route>
          <Route path="/profile/:id" element={<Profile />} />
          <Route element={<UserTypeCustomer />}>
            <Route path="/*" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
