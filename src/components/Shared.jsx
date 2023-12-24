import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocumentMsg, LinkMsg } from "./conversation/Messages";

function Shared() {
  const [value, setValue] = React.useState("one");
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      width={320}
      height={"100vh"}
      bgcolor={
        theme.palette.mode === "light"
          ? "#F8FAFF"
          : theme.palette.background.default
      }
    >
      <Stack width={"100%"} height={"100%"}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0 0 2px rgba(0,0,0,.25)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            p={2}
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <IconButton
              onClick={() => dispatch(updateSidebarType({ type: "CONTACT" }))}
            >
              <CaretLeft />
            </IconButton>
          </Stack>
        </Box>
        {/* Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          centered
        >
          <Tab value="one" label="Media" />
          <Tab value="two" label="Links" />
          <Tab value="three" label="Docs" />
        </Tabs>
        {/* Body */}
        <Stack
          flexGrow={1}
          width={"100%"}
          height={"100%"}
          sx={{ overflowY: "auto" }}
          px={2}
          position="relative"
        >
          {(() => {
            switch (value) {
              case "one":
                return (
                  <Stack gap={1}>
                    <Typography variant="overline">23 Dec 2023</Typography>
                    <Grid container spacing={2}>
                      {Array.from({ length: 10 }).map((el) => (
                        <Grid item xs={4}>
                          <Box
                            sx={{
                              boxShadow: `0px 0px 3px rgba(0,0,0,.2)`,
                              borderRadius: 0.5,
                            }}
                            p={0.5}
                          >
                            <img
                              src={faker.image.avatar()}
                              alt={faker.name.fullName()}
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                );
              case "two":
                return (
                  <Stack gap={1}>
                    <Typography variant="overline">23 Dec 2023</Typography>
                    {SHARED_LINKS.map((el) => (
                      <LinkMsg el={el} showMenu={false} />
                    ))}
                  </Stack>
                );
              case "three":
                return (
                  <Stack gap={1} width={"100%"}>
                    <Typography variant="overline">23 Dec 2023</Typography>
                    {SHARED_DOCS.map((el) => (
                      <DocumentMsg el={el} showMenu={false} />
                    ))}
                  </Stack>
                );
              default:
                return null;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Shared;
