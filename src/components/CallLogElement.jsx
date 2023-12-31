import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { StyledBadge } from "./StyledBadge";
import { ArrowDownLeft, ArrowUpRight, Phone } from "phosphor-react";

function CallLogElement({ online, incoming, missed, image, name }) {
  const callColor = missed ? "#e60909" : "#04ac1a";
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
          <Stack>
            <Typography variant="subtitle2">{name}</Typography>
            <Stack direction="row" gap={0.5} alignItems="center">
              {incoming ? (
                <ArrowDownLeft color={callColor} />
              ) : (
                <ArrowUpRight color={callColor} />
              )}
              <Typography variant="caption" color={"text.secondary"}>
                Yesterday 21:24
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Call */}
        <IconButton>
          <Phone color="#04ac1a" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default CallLogElement;
