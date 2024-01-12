import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Plus,
  Users,
} from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "../../components/Search";
import Friends from "../../components/Friends";
import { socket } from "../../socket";
import { useSelector } from "react-redux";

const user_id = window.localStorage.getItem("user_id");
const Chats = ({ type, handleCreateGroupDialog }) => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const { conversations } = useSelector(
    (store) => store.conversation.direct_chat
  );
  console.log(conversations);
  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      //data => list of conversation
    });
  }, []);

  function handleCloseDialog() {
    setOpenDialog(false);
  }
  function handleOpenDialog() {
    setOpenDialog(true);
  }

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
            <Typography variant="h5">
              {type === "personal"
                ? "Chats"
                : type === "group"
                ? "Group"
                : null}
            </Typography>
            {type === "personal" && (
              <Stack direction={"row"}>
                <IconButton onClick={handleOpenDialog}>
                  <Users />
                </IconButton>
                <IconButton sx={{ width: "max-content" }}>
                  <CircleDashed />
                </IconButton>
              </Stack>
            )}
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
          {type === "personal" && (
            <Stack spacing={1}>
              <Stack direction={"row"} spacing={1.5} alignItems="center">
                <ArchiveBox size={24} />
                <Button variant="text">Archive</Button>
              </Stack>
              <Divider />
            </Stack>
          )}

          {type === "group" && (
            <Stack
              direction="row"
              justifyContent="space-between"
              width="100%"
              alignItems={"center"}
            >
              <Typography
                variant="subtitle2"
                color={theme.palette.primary.main}
              >
                Create new Group
              </Typography>
              <IconButton onClick={handleCreateGroupDialog}>
                <Plus color={theme.palette.primary.main} />
              </IconButton>
            </Stack>
          )}

          <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              {/* <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el, idx) => {
                  return <ChatElement {...el} key={idx} />;
                })}
              </Stack> */}
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All {type === "personal" ? "Chats" : "Groups"}
                </Typography>
                {conversations
                  .filter((el) => !el.pinned)
                  .map((el, idx) => {
                    return <ChatElement {...el} key={idx} />;
                  })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
