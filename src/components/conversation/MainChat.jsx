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

function MainChat() {
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
                  return <ImageMsg el={el} />;
                case "doc":
                  return <DocumentMsg el={el} />;
                case "link":
                  return <LinkMsg el={el} />;
                case "reply":
                  return <ReplyMsg el={el} />;
                default:
                  return <TextMsg el={el} />;
              }
            default:
          }
        })}
      </Stack>
    </Box>
  );
}

export default MainChat;
