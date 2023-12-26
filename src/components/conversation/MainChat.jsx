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
        {Chat_History.map((el, key) => {
          switch (el.type) {
            case "divider":
              return <StyledDivider el={el} key={key} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <ImageMsg el={el} key={key} showMenu={showMenu} />;
                case "doc":
                  return <DocumentMsg el={el} key={key} showMenu={showMenu} />;
                case "link":
                  return <LinkMsg el={el} key={key} showMenu={showMenu} />;
                case "reply":
                  return <ReplyMsg el={el} key={key} showMenu={showMenu} />;
                default:
                  return <TextMsg el={el} key={key} showMenu={showMenu} />;
              }
            default:
          }
        })}
      </Stack>
    </Box>
  );
}

export default MainChat;
