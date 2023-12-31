import React, { useCallback } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/Auth/react-hook-form/FormProvider";
import RHFTextField from "../../components/Auth/react-hook-form/RHFTextField";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";

const ProfileForm = () => {
  const NewGroupSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    about: yup.string().required("About is required"),
    avatarUrl: yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
    avatarUrl: null,
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFile) => {
      const file = acceptedFile[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      console.log("DATA", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField
          name="name"
          label="Name"
          helperText="This name is visible to your contacts"
          sx={{ maxWidth: "100%" }}
        />
        <RHFTextField
          multiline
          rows={3}
          maxRows={5}
          name="about"
          label="About"
        />

        <Stack alignItems={"flex-end"}>
          <Button color="primary" variant="outlined" size="large" type="submit">
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

function Profile() {
  const theme = useTheme();
  return (
    <Stack direction="row">
      {/* left */}
      <Box
        sx={{
          position: "relative",
          height: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          width: "320px",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
        p={2}
      >
        <Stack gap={2}>
          {/* Header */}
          <Stack direction="row" width="100%" alignItems="center" gap={1.5}>
            <IconButton>
              <CaretLeft />
            </IconButton>
            <Typography variant="h4">Profile</Typography>
          </Stack>
          <ProfileForm />
        </Stack>
      </Box>
      {/* right  */}
    </Stack>
  );
}

export default Profile;
