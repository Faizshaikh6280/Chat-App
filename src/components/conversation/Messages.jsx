import {
  Box,
  Divider,
  Fade,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DotsThreeVertical, DownloadSimple, ImageSquare } from "phosphor-react";
import useSettings from "../../hooks/useSettings";
import { useState } from "react";
import { Message_options } from "../../data";

function StyledDivider({ el }) {
  return (
    <Stack>
      <Divider>Today</Divider>
    </Stack>
  );
}

function TextMsg({ el, showMenu }) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "flex-start" : "flex-end"}
      alignItems="flex-start"
    >
      <Box
        sx={{
          bgcolor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          width: "max-content",
          borderRadius: 1.5,
          padding: 1.5,
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
      {showMenu && <MessageMenu />}
    </Stack>
  );
}
function ImageMsg({ el, showMenu }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "flex-start" : "flex-end"}
      alignItems="flex-start"
    >
      <Box
        sx={{
          bgcolor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          width: "max-content",
          borderRadius: 1.5,
          padding: 1.5,
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            style={{ maxWidth: 210, borderRadius: "8px" }}
            alt={el.msg}
          />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {showMenu && <MessageMenu />}
    </Stack>
  );
}
function DocumentMsg({ el, showMenu }) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "flex-start" : "flex-end"}
      alignItems="flex-start"
    >
      <Box
        sx={{
          bgcolor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          width: "max-content",
          borderRadius: 1.5,
          padding: 1.3,
        }}
      >
        <Stack spacing={1.5}>
          <Stack
            direction="row"
            gap={1.5}
            alignItems="center"
            sx={{
              bgcolor: el.incoming
                ? theme.palette.background.default
                : theme.palette.primary.main,
            }}
            p={1.2}
            borderRadius={1}
          >
            <ImageSquare size={28} />
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              Abstract.png
            </Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {showMenu && <MessageMenu />}
    </Stack>
  );
}
function LinkMsg({ el, showMenu }) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "flex-start" : "flex-end"}
      alignItems="flex-start"
    >
      <Box
        sx={{
          bgcolor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          width: "max-content",
          borderRadius: 1.5,
          padding: 1.5,
        }}
      >
        <Stack spacing={1}>
          <Stack spacing={0.5}>
            <img
              src={el.preview}
              style={{ maxWidth: 210, borderRadius: "8px" }}
              alt={el.msg}
            />
            <Typography
              variant="body2"
              component={Link}
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener"
              sx={{ cursor: "pointer" }}
            >
              www.youtube.com
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {showMenu && <MessageMenu />}
    </Stack>
  );
}

function ReplyMsg({ el, showMenu }) {
  const theme = useTheme();
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  return (
    <Stack
      direction="row"
      position="relative"
      alignItems="flex-start"
      justifyContent={el.incoming ? "flex-start" : "flex-end"}
    >
      <Box
        sx={{
          bgcolor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          width: "max-content",
          borderRadius: 1.5,
          padding: 1.5,
        }}
      >
        <Stack gap={1.2}>
          <Stack
            sx={{
              bgcolor: theme.palette.background.default,
              padding: 1.2,
              borderRadius: 1,
            }}
          >
            <Typography
              variant="body2"
              color={
                el.incoming ? theme.palette.text : isLight ? "#000" : "#fff"
              }
            >
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      {showMenu && <MessageMenu />}
    </Stack>
  );
}

function MessageMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DotsThreeVertical />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {Message_options.map((el, key) => (
          <MenuItem onClick={handleClose} key={key}>
            {el.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export { StyledDivider, ReplyMsg, LinkMsg, DocumentMsg, TextMsg, ImageMsg };
