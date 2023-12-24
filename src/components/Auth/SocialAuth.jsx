import { Divider, IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

function SocialAuth() {
  return (
    <Stack mt={3} gap={2}>
      <Divider sx={{ borderTopStyle: "dashed" }}>OR</Divider>
      <Stack direction="row" justifyContent="center" gap={2}>
        <IconButton>
          <GoogleLogo color="#DB4437" />
        </IconButton>
        <IconButton>
          <GithubLogo color={"#000"} />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#21aeff" />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default SocialAuth;
