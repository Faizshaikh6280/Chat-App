import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LogoImg from "../../assets/Images/logo.ico";
import { useSelector } from "react-redux";

const Auth = () => {
  const { isLoggedIn } = useSelector((store) => store.auth);
  if (isLoggedIn) {
    return <Navigate to={"/app"} />;
  }
  return (
    <Container maxWidth="sm">
      <Stack gap={2} width="100%">
        <Stack width={"100%"} justifyContent="center" alignItems="center">
          <img src={LogoImg} alt="logo" style={{ maxWidth: 170 }} />
        </Stack>
      </Stack>
      {/* Login or signup form */}
      <Outlet />
    </Container>
  );
};

export default Auth;
