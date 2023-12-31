import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from "./Auth/react-hook-form/FormProvider";
import RHFTextField from "./Auth/react-hook-form/RHFTextField";
import RHFAutocomplete from "./Auth/react-hook-form/RHFAutoComplete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Members = ["Name1", "Name2", "Name3"];

const CreateGroupForm = () => {
  const NewGroupSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    members: yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("DATA", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ minWidth: "320px" }}>
        <RHFTextField name="title" label="Name" fullWidth />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={Members.map((option) => option)}
          ChipProps={{ size: "medium" }}
          fullWidth
        />
        <Stack alignItems={"flex-end"}>
          <Button variant="contained" type="subit">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

function CreateGroup({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="lg"
    >
      <DialogTitle sx={{ mb: 2 }}>Create New Group</DialogTitle>
      <DialogContent>
        <CreateGroupForm />
      </DialogContent>
    </Dialog>
  );
}

export default CreateGroup;
