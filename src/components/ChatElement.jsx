import React from "react";
import { Box, Badge, Stack, Avatar, Typography, useTheme } from "@mui/material";
import { StyledBadge } from "./StyledBadge";
import { useDispatch } from "react-redux";
import { selectConversation } from "../redux/slices/app";
const ChatElement = ({ img, name, msg, time, unread, online, id }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      onClick={() => dispatch(selectConversation({ room_id: id }))}
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge
            className="unread-count"
            color="primary"
            badgeContent={unread}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatElement;
