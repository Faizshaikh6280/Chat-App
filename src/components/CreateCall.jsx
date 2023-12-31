import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import { CallElements } from "../data";
import CallElement from "./CallElement";
import { Search, SearchIconWrapper, StyledInputBase } from "./Search";
import { MagnifyingGlass } from "phosphor-react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CreateCall({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="md"
    >
      <DialogTitle sx={{ mb: 2 }}>Start Call</DialogTitle>
      <DialogContent>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
        </Stack>
        <Stack gap={1} width={"100%"}>
          {CallElements.map((el) => (
            <CallElement {...el} key={el.id} />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default CreateCall;
