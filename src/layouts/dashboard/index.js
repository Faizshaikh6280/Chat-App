import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../../pages/dashboard/SideBar";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connectSocket, socket } from "../../socket";
import { openSnackbar } from "../../redux/slices/app";
const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const user_id = window.localStorage.getItem("user_id");
  useEffect(
    function () {
      if (isLoggedIn) {
        window.onload = function () {
          if (!window.location.hash) {
            window.location = window.location + "#load";
            window.location.reload();
          }
        };

        window.onload();
        if (!socket) {
          connectSocket(user_id);
        }

        // Ready to setup events.
        //1. new_friend_request.
        socket.on("new_friend_request", function (data) {
          dispatch(
            openSnackbar({ severity: "success", message: data.message })
          );
        });
        socket.on("request_accepted", function (data) {
          dispatch(
            openSnackbar({ severity: "success", message: data.message })
          );
        });
        socket.on("request_sent", function (data) {
          dispatch(
            openSnackbar({ severity: "success", message: data.message })
          );
        });
      }
      // Clean up function.
      return () => {
        socket?.off("new_friend_request");
        socket?.off("request_accepted");
        socket?.off("request_sent");
      };
    },
    [isLoggedIn, user_id, dispatch]
  );

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
