import {
  Box,
  Dialog,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";

import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useOuterClick } from "../../hooks/useOuterClick";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const ChatInput = ({ onToggleEmoji }) => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  return (
    <StyledInput
      sx={{
        bgcolor: "transparent",
      }}
      autoFocus
      fullWidth
      placeholder="write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack
            width="max-content"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              position="relative"
              left={-20}
              // alignItems="center"
              display={isActionsOpen ? "inline-block" : "none"}
            >
              {Actions.map((el, key) => (
                <Tooltip title={el.title} placement="right" key={key}>
                  <Fab
                    sx={{ position: "absolute", top: -el.y }}
                    color="primary"
                    aria-label="add"
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment>
              <IconButton onClick={() => setIsActionsOpen((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={() => onToggleEmoji((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

function Footer() {
  const [isOpenEmoji, setIsOpenEmoji] = useState(false);
  const close = () => setIsOpenEmoji(false);
  const ref = useOuterClick(close);
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        padding: 2,
      }}
    >
      <Stack spacing={1.5} direction="row">
        <Stack width="100%" position="relative">
          <Box
            sx={{
              position: "absolute",
              bottom: 55,
              right: 0,
              display: isOpenEmoji ? "inline-block" : "none",
            }}
            ref={ref}
          >
            <Picker
              data={data}
              onEmojiSelect={console.log}
              theme={theme.palette.mode}
            />
          </Box>
          <ChatInput onToggleEmoji={setIsOpenEmoji} />
        </Stack>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: 1.5,
            bgcolor: theme.palette.primary.main,
          }}
        >
          <Stack alignItems="center" justifyContent="center">
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
