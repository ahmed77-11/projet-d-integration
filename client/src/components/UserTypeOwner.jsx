import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const UserTypeOwner = () => {
  const { currentUser } = useSelector((state) => state.user);
  if (!currentUser) return <Navigate to="/sign-in" />;
  console.log(currentUser.userType.type === "owner");
  return currentUser.userType.type === "owner" ? (
    <Outlet />
  ) : (
    <Navigate to="/unithorized" />
  );
};

export default UserTypeOwner;
