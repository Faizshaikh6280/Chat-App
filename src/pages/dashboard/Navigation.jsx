import {
  Box,
  Stack,
  useTheme,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import LogoImg from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/index";
import { faker } from "@faker-js/faker";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

function Navigation() {
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const isLight = theme.palette.mode === "light";
  return (
    <Box
      p={2}
      py={4}
      width={100}
      height="100vh"
      sx={{
        boxShadow: "0px 0px 4px 0px #00000040",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack width="100%" justifyContent="center" spacing={3}>
        <Box
          width={64}
          height={64}
          borderRadius={1.5}
          bgcolor={theme.palette.primary.main}
        >
          <img src={LogoImg} alt="logo" />
        </Box>
        <Stack alignItems="center" spacing={3}>
          {Nav_Buttons.map((el) =>
            selected === el.index ? (
              <Box
                key={el.index}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(el.index)}
                key={el.index}
                sx={{
                  width: "max-content",
                  color: isLight ? "#000" : "#fff",
                }}
              >
                {el.icon}
              </IconButton>
            )
          )}
        </Stack>
        <Divider variant="full-width" />
        <Stack justifyContent="center" alignItems="center">
          {selected === 3 ? (
            <Box
              sx={{
                bgcolor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton
                key={3}
                sx={{
                  width: "max-content",
                  color: "#fff",
                }}
              >
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => setSelected(3)}
              key={3}
              sx={{
                width: "max-content",
                color: isLight ? "#000" : "#fff",
              }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>
        <Divider variant="full-width" />
      </Stack>
      <Stack spacing={2} alignItems={"center"}>
        <AntSwitch defaultChecked onChange={onToggleMode} />
        <Avatar src={faker.image.avatar()} />
      </Stack>
    </Box>
  );
}

export default Navigation;
