import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { StyledBadge } from "./StyledBadge";
import { Phone, VideoCamera } from "phosphor-react";

function CallElement({ online, image, name }) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1.5}
      >
        {/* profile */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          {/* Avatar */}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={image} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={image} />
          )}
          <Typography variant="caption">{name}</Typography>
        </Stack>
        {/* Call */}
        <Stack direction="row">
          <IconButton>
            <Phone color="#04ac1a" />
          </IconButton>
          <IconButton>
            <VideoCamera color="#04ac1a" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CallElement;
