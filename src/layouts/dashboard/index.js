import { Outlet } from "react-router-dom";
import SideBar from "../../pages/dashboard/SideBar";
import { Stack } from "@mui/material";

const DashboardLayout = () => {
  return (
    <Stack direction="row">
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
