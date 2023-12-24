import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import LogoImg from "../../assets/Images/logo.ico";
import SocialAuth from "../../components/Auth/SocialAuth";

const Auth = () => {
  return (
    <Container maxWidth="sm">
      <Stack gap={2} width="100%">
        <Stack width={"100%"} justifyContent="center" alignItems="center">
          <img src={LogoImg} alt="logo" style={{ maxWidth: 170 }} />
        </Stack>
      </Stack>
      {/* Login or signup form */}
      <Outlet />
      {/* Auth Social. */}
      <SocialAuth />
    </Container>
  );
};

export default Auth;
