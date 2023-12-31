import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import CreateGroup from "../../components/CreateGroup";

function Groups() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Chats type="group" handleCreateGroupDialog={handleClickOpen} />
      <Box></Box>
      {open && <CreateGroup open={open} handleClose={handleClose} />}
    </Stack>
  );
}

export default Groups;
