import React from "react";
import Chats from "./Chats";
import { Stack } from "@mui/material";
import Conversation from "../../components/conversation/Conversation";
import ContactInfo from "./ContactInfo";
import { useSelector } from "react-redux";
import Shared from "../../components/Shared";
import Starred from "../../components/Starred";
const GeneralApp = () => {
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction="row">
      {/* Chat Area*/}
      <Chats type="personal" />
      {/* Conversation  */}
      <Conversation />
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
