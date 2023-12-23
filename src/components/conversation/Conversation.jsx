import { Box, Stack, useTheme } from "@mui/material";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import MainChat from "./MainChat";
import { useSelector } from "react-redux";

function Conversation() {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  return (
    <Box
      sx={{
        height: "100vh",
        width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
      }}
    >
      <Stack height={"100%"}>
        {/* Header */}
        <Header />
        {/* Main Chat Area */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            bgcolor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.default,
            flexGrow: 1,
          }}
        >
          <MainChat showMenu={true} />
        </Box>
        {/* Footer */}
        <Footer />
      </Stack>
    </Box>
  );
}

export default Conversation;
