import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import { useForm } from "react-hook-form";
import SocialAuth from "./SocialAuth";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../redux/slices/auth";

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Error({ err }) {
  return (
    <Typography variant="body2" color="tomato">
      {err}
    </Typography>
  );
}

function Signup() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, getValue, formState } = useForm();
  const { errors } = formState;

  function onSumbit(data) {
    console.log(data);
    dispatch(RegisterUser(data));
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <Stack gap={1}>
        <Typography variant="h4">Register to Tawk</Typography>
        <Stack direction="row" gap={0.5}>
          <Typography variant="subtitle2">Already an user?</Typography>
          <Link component={RouterLink} to="/auth/login" variant="body2">
            Login to account
          </Link>
        </Stack>
        <form
          action=""
          onSubmit={handleSubmit(onSumbit, onError)}
          method="post"
          style={{ marginTop: "16px" }}
        >
          <Stack gap={2}>
            {/* First and last name */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={1}
              width={"100%"}
            >
              <Stack width={"100%"}>
                <TextField
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  label="First Name"
                  type="text"
                />
                {errors?.firstname?.message && (
                  <Error err={errors.firstname.message} />
                )}
              </Stack>
              <Stack width={"100%"}>
                <TextField
                  fullWidth
                  {...register("lastName")}
                  label="Last Name"
                  type="text"
                />
                {errors?.lastname?.message && (
                  <Error err={errors.lastname.message} />
                )}
              </Stack>
            </Stack>
            {/* Email */}

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
            {/* Password */}
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
                placeholder="StrongPass123!"
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
              Sign up
            </button>
          </Stack>
        </form>
      </Stack>
      {/* Social Auth */}
      <SocialAuth />
    </>
  );
}

export default Signup;
