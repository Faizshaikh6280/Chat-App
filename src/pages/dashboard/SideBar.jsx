import {
  Box,
  Stack,
  useTheme,
  IconButton,
  Divider,
  Avatar,
  Menu,
  Fade,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LogoImg from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data/index";
import { faker } from "@faker-js/faker";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

function SideBar() {
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const isLight = theme.palette.mode === "light";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <Avatar
          src={faker.image.avatar()}
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          {Profile_Menu.map((el) => (
            <MenuItem onClick={handleClose}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width={90}
              >
                <Typography variant="subtitle2">{el.title}</Typography>
                <span>{el.icon}</span>
              </Stack>
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </Box>
  );
}

export default SideBar;
