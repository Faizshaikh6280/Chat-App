import { Outlet } from "react-router-dom";
import Navigation from "../../pages/dashboard/Navigation";
import { Stack } from "@mui/material";

const DashboardLayout = () => {
  return (
    <Stack direction="row">
      <Navigation />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
