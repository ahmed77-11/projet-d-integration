import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const UserTypeCustomer = () => {
  const { currentUser } = useSelector((state) => state.user);
  if (!currentUser) return <Navigate to="/sign-in" />;

  console.log(
    currentUser.userType.type === "customer",
    currentUser.userType.type
  );
  return currentUser.userType.type === "customer" ? (
    <Outlet />
  ) : (
    <Navigate to="/unithorized" />
  );
};

export default UserTypeCustomer;
