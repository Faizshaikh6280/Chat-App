import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DownloadSimple, ImageSquare } from "phosphor-react";
import useSettings from "../../hooks/useSettings";
function MainChat() {
  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={2}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <StyledDivider el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <ImageMsg el={el} />;
                case "doc":
                  return <DocumentMsg el={el} />;
                case "link":
                  return <LinkMsg el={el} />;
                case "reply":
                  return <ReplyMsg el={el} />;
                default:
                  return <TextMsg el={el} />;
              }
            default:
          }
        })}
      </Stack>
    </Box>
  );
}

function StyledDivider({ el }) {
  return (
    <Stack>
      <Divider>{el.text}</Divider>
    </Stack>
  );
}

function TextMsg({ el }) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
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
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
    </Stack>
  );
}

function ImageMsg({ el }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
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
        <Stack spacing={1}>
          <img src={el.img} style={{ maxWidth: 210 }} alt={el.msg} />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
function DocumentMsg({ el }) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "flex-start" : "flex-end"}
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
    </Stack>
  );
}
function LinkMsg({ el }) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
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
        <Stack spacing={1}>
          <Stack spacing={0.5}>
            <img src={el.preview} style={{ maxWidth: 210 }} alt={el.msg} />
            <Typography
              variant="body2"
              component={Link}
              to="https://www.youtube.com/"
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
    </Stack>
  );
}

function ReplyMsg({ el }) {
  const theme = useTheme();
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  return (
    <Stack
      direction="row"
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
    </Stack>
  );
}

export default MainChat;
