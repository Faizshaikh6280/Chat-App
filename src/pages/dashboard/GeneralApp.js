import React from "react";
import Chats from "./Chats";
import { Stack } from "@mui/material";
import Conversation from "../../components/conversation/Conversation";
const GeneralApp = () => {
  return (
    <Stack direction="row">
      {/* Chat Area*/}
      <Chats />
      {/* Conversation  */}
      <Conversation />
    </Stack>
  );
};

export default GeneralApp;
