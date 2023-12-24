import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";
import ShorcutKeyDialog from "../../sections/settings/ShorcutKeyDialog";

function Settings() {
  const [openShorcuts, setOpenShorcuts] = React.useState(false);

  const handleOpenShortcuts = () => {
    setOpenShorcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShorcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      // onclick: handleOpenTheme,
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Stack direction="row">
      {/* left */}
      <Box
        sx={{
          border: "0 0 2px rgba(0,0,0,.5)",
          width: 320,
          height: "100vh",
          bgcolor:
            theme.palette.mode === "light"
              ? "#F8FAFF "
              : theme.palette.background,
        }}
        px={1}
        py={3}
      >
        <Stack gap={3}>
          {/* Header */}
          <Stack direction="row" gap={2}>
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="h4">Settings</Typography>
          </Stack>
          {/* profile */}

          <Stack direction="row" alignItems="center" gap={2}>
            <Avatar src={faker.image.avatar()} sx={{ width: 56, height: 56 }} />
            <Stack>
              <Typography variant="subtitle1">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">Exploring</Typography>
            </Stack>
          </Stack>

          {/* list of options */}
          <Stack gap={2}>
            {list.map((el, _, arr) => (
              <Stack key={el.key} gap={1} sx={{ cursor: "pointer" }}>
                <Stack
                  direction="row"
                  gap={1}
                  alignItems="center"
                  onClick={el.onclick}
                >
                  <IconButton>{el.icon}</IconButton>
                  <Typography variant="subtitle2">{el.title}</Typography>
                </Stack>
                {el.key < arr.length - 1 && <Divider fullwidth />}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
      {/* right */}
      <Box></Box>
      {openShorcuts && (
        <ShorcutKeyDialog open={true} handleClose={handleCloseShortcuts} />
      )}
    </Stack>
  );
}

export default Settings;
