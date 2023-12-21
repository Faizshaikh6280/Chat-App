import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { StyledBadge } from "../StyledBadge";
import { faker } from "@faker-js/faker";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";

function Header() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        padding: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* Left part */}
        <Stack direction="row" spacing={2} alignItems="center">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
          </StyledBadge>
          <Stack>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Typography variant="caption">online</Typography>
          </Stack>
        </Stack>

        {/* Right part */}

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <IconButton>
            <VideoCamera />
          </IconButton>

          <IconButton>
            <Phone />
          </IconButton>

          <IconButton>
            <MagnifyingGlass />
          </IconButton>

          <Divider orientation="vertical" flexItem />

          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
