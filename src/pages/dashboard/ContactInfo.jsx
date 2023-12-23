import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
  DialogActions,
  Slide,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideber, updateSidebarType } from "../../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block user</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this user ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeleteModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete user</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete all chats?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

function ContactInfo() {
  const [openBlockModal, setOpenBlockModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
            <Typography variant="subtitle1">Contact Info</Typography>
            <IconButton onClick={() => dispatch(toggleSideber())}>
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          flexGrow={1}
          width={"100%"}
          height={"100%"}
          sx={{ overflowY: "auto" }}
          px={2}
          position="relative"
        >
          <Stack gap={2} py={2}>
            <Stack direction="row" gap={1} alignItems="center">
              <Avatar
                src={faker.image.avatar()}
                sx={{ width: 64, height: 64 }}
              />
              <Stack>
                <Typography variant="subtitle2">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="caption">+91 628 0465 951</Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              gap={6}
              justifyContent="center"
              alignItems="center"
            >
              <Stack>
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="overline">Voice</Typography>
              </Stack>
              <Stack>
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="overline">Vedio</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Divider />
          {/* About */}
          <Stack py={2}>
            <Typography variant="subtitle2">About</Typography>
            <Typography variant="body2">
              Simple living ♥❤ high thinking 🔥👊
            </Typography>
          </Stack>

          <Divider />

          <Stack py={2} gap={1}>
            {/* media  */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2">Media Links & Docs</Typography>
              <Button
                onClick={() => dispatch(updateSidebarType({ type: "SHARED" }))}
                endIcon={<CaretRight />}
              >
                401
              </Button>
            </Stack>
            {/* images */}
            <Stack direction="row" gap={1}>
              {Array.from({ length: 3 }).map((el) => (
                <img
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                  width={"32%"}
                ></img>
              ))}
            </Stack>
            <Divider />
            {/* Starred msgs */}
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" gap={1} alignItems="center">
                <IconButton>
                  <Star size={20} />
                </IconButton>
                <Typography variant="subtitle2">Starred Messages</Typography>
              </Stack>
              <IconButton
                onClick={() => dispatch(updateSidebarType({ type: "STARRED" }))}
              >
                <CaretRight />
              </IconButton>
            </Stack>
            <Divider />
            {/* Mutated */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" gap={1} alignItems="center">
                <IconButton>
                  <Bell size={20} />
                </IconButton>
                <Typography variant="subtitle2">
                  Mutate Notifications
                </Typography>
              </Stack>
              <AntSwitch />
            </Stack>
            <Divider />
          </Stack>
          {/* footer */}
          <Stack gap={2}>
            <Typography variant="subtitle2">1 group in common</Typography>
            <Stack direction="row" gap={1} alignItems="center">
              <Avatar
                src={faker.image.avatar()}
                sx={{ width: 40, height: 40 }}
              />
              <Stack>
                <Typography variant="subtitle2">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="caption">Owl_Parrpt_Rabbit</Typography>
              </Stack>
            </Stack>
            {/* btns */}
            <Stack direction="row" gap={2} justifyContent={"center"} py={2}>
              <Button
                sx={{
                  padding: "4px 8px",
                }}
                startIcon={<Prohibit color={theme.palette.primary.main} />}
                variant="outlined"
                fullWidth
                onClick={() => setOpenBlockModal(true)}
              >
                Block
              </Button>
              <Button
                sx={{
                  padding: "4px 8px",
                }}
                startIcon={<Trash color={theme.palette.primary.main} />}
                variant="outlined"
                fullWidth
                onClick={() => setOpenDeleteModal(true)}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {openBlockModal && (
        <BlockModal open={true} handleClose={() => setOpenBlockModal(false)} />
      )}
      {openDeleteModal && (
        <DeleteModal
          open={true}
          handleClose={() => setOpenDeleteModal(false)}
        />
      )}
    </Box>
  );
}

export default ContactInfo;
