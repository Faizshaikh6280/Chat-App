import React from "react";
import Chats from "./Chats";
import { Stack, Typography } from "@mui/material";
import Conversation from "../../components/conversation/Conversation";
import ContactInfo from "./ContactInfo";
import { useSelector } from "react-redux";
import Shared from "../../components/Shared";
import Starred from "../../components/Starred";
import NoChatSvg from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const { sidebar, room_id, chat_type } = useSelector((store) => store.app);

  return (
    <Stack direction="row">
      {/* Chat Area*/}
      <Chats type="personal" />
      {/* Conversation  */}
      {room_id !== null && chat_type === "individual" ? (
        <Conversation />
      ) : (
        <Stack
          spacing={2}
          sx={{
            height: "100vh",
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <NoChatSvg />
          <Typography variant="subtitle2">
            Select a conversation or start a new one.
          </Typography>
        </Stack>
      )}
      {/* Contact Info */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <ContactInfo />;
            case "SHARED":
              return <Shared />;
            case "STARRED":
              return <Starred />;
            default:
              return null;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
