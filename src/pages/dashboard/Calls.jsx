import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React from "react";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "../../components/Search";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogsHistory } from "../../data";
import CallLogElement from "../../components/CallLogElement";
import CreateCall from "../../components/CreateCall";
function Calls() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          width: "320px",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          {/* Header */}
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction="row"
          >
            <Typography variant="h4">Call Logs</Typography>
          </Stack>
          {/* Search bar */}
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" />
            </Search>
          </Stack>

          {/* new conversation */}
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems={"center"}
          >
            <Typography variant="subtitle2" color={theme.palette.primary.main}>
              Start new conversation
            </Typography>
            <IconButton onClick={handleClickOpen}>
              <Plus color={theme.palette.primary.main} />
            </IconButton>
          </Stack>

          <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack gap={2}>
                {CallLogsHistory.map((el) => (
                  <CallLogElement {...el} key={el.id} />
                ))}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
        {open && <CreateCall open={true} handleClose={handleClose} />}
      </Box>
    </>
  );
}

export default Calls;
