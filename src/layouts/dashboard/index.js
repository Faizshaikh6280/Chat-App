import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../../pages/dashboard/SideBar";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((store) => store.auth);

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <Stack direction="row">
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
