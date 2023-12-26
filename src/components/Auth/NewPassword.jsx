import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import { useForm } from "react-hook-form";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Error({ err }) {
  return (
    <Typography variant="body2" color="tomato">
      {err}
    </Typography>
  );
}

function NewPassword() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, formState } = useForm();
  const { errors } = formState;

  function onSumbit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Stack gap={1}>
      <Typography variant="h4">Reset password</Typography>
      <Stack direction="row" gap={0.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Please set your new password
        </Typography>
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
              {...register("password", {
                required: "Password is required.",
                pattern: {
                  value: passwordPattern,
                  message: "Please enter a strong password.",
                },
              })}
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClickCapture={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <Eye /> : <EyeSlash />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors?.password?.message && (
              <Error err={errors.password.message} />
            )}
          </Stack>
          <Stack>
            <TextField
              {...register("confirm_password", {
                required: "Password is required.",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
                pattern: {
                  value: passwordPattern,
                  message: "Please enter a strong password.",
                },
              })}
              fullWidth
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClickCapture={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <Eye /> : <EyeSlash />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors?.confirm_password?.message && (
              <Error err={errors.confirm_password.message} />
            )}
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
            Reset password
          </button>
        </Stack>
      </form>
    </Stack>
  );
}

export default NewPassword;
