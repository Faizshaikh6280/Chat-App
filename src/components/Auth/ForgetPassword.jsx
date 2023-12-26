import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, TextField, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { CaretLeft } from "phosphor-react";

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;

function Error({ err }) {
  return (
    <Typography variant="body2" color="tomato">
      {err}
    </Typography>
  );
}

function ForgetPassword() {
  const theme = useTheme();
  const { register, handleSubmit, reset, getValue, formState } = useForm();
  const { errors } = formState;

  function onSumbit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Stack gap={1}>
      <Typography variant="h4">Foget Password?</Typography>
      <Stack direction="column" gap={0.5}>
        <Typography variant="caption" color="text.secondary">
          Please enter a email address associated with your account and we will
          email you a link to reset your password.
        </Typography>
        <Link
          component={RouterLink}
          to="/auth/login"
          variant="body2"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", mt: 1 }}
        >
          <CaretLeft /> <span> Return to login</span>
        </Link>
      </Stack>
      <form
        action=""
        onSubmit={handleSubmit(onSumbit, onError)}
        method="post"
        style={{ marginTop: "16px" }}
      >
        <Stack gap={2}>
          <Stack>
            <TextField
              {...register("email", {
                required: "Email is mandatory.",
                pattern: {
                  value: emailPattern,
                  message: "Invalid email address.",
                },
              })}
              fullWidth
              label="Email"
              placeholder="example@gmail.com"
              type="email"
            />
            {errors?.email?.message && <Error err={errors.email.message} />}
          </Stack>
          <button
            style={{
              background: theme.palette.mode === "light" ? "#000" : "#fff",
              color: theme.palette.mode === "dark" ? "#000" : "#fff",
              cursor: "pointer",
              padding: "7px 0",
              fontSize: "16px",
              borderRadius: "8px",
            }}
          >
            Submit
          </button>
        </Stack>
      </form>
    </Stack>
  );
}

export default ForgetPassword;
