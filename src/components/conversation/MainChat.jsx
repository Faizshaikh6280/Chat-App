import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  StyledDivider,
  ReplyMsg,
  LinkMsg,
  DocumentMsg,
  TextMsg,
  ImageMsg,
} from "./Messages";

function MainChat({ showMenu }) {
  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={2}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <StyledDivider el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <ImageMsg el={el} showMenu={showMenu} />;
                case "doc":
                  return <DocumentMsg el={el} showMenu={showMenu} />;
                case "link":
                  return <LinkMsg el={el} showMenu={showMenu} />;
                case "reply":
                  return <ReplyMsg el={el} showMenu={showMenu} />;
                default:
                  return <TextMsg el={el} showMenu={showMenu} />;
              }
            default:
          }
        })}
      </Stack>
    </Box>
  );
}

export default MainChat;
