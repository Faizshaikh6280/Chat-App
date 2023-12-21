import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  styled,
  useTheme,
} from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import React from "react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

function Footer() {
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
              <InputAdornment>
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

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
