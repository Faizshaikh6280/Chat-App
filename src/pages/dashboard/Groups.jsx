import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";

function Groups() {
  return (
    <Stack>
      <Chats type="group" />
      <Box></Box>
    </Stack>
  );
}

export default Groups;
