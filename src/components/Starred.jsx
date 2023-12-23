import React from "react";
import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../redux/slices/app";
import Conversation from "./conversation/Conversation";
import MainChat from "./conversation/MainChat";
function Starred() {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      width={320}
      height={"100vh"}
      bgcolor={theme.palette.background.default}
    >
      <Stack width={"100%"} height={"100%"}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0 0 2px rgba(0,0,0,.25)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            p={2}
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <IconButton
              onClick={() => dispatch(updateSidebarType({ type: "CONTACT" }))}
            >
              <CaretLeft />
            </IconButton>
          </Stack>
        </Box>
        {/* Tabs */}

        {/* Body */}
        <Stack
          flexGrow={1}
          width={"100%"}
          height={"100%"}
          sx={{ overflowY: "auto" }}
          px={2}
          position="relative"
        >
          <MainChat showMenu={false} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Starred;
