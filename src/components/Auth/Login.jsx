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
import { LoginUser } from "../../redux/slices/auth";

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

function Login() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, getValue, formState } = useForm();
  const { errors } = formState;

  function onSumbit(data) {
    dispatch(LoginUser(data));
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <Stack gap={1}>
        <Typography variant="h4">Login to Tawk</Typography>
        <Stack direction="row" gap={0.5}>
          <Typography variant="subtitle2">New user?</Typography>
          <Link component={RouterLink} to="/auth/signup" variant="body2">
            Create an account
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
              {errors?.emai?.message && <Error err={errors.emai.message} />}
            </Stack>
            <Stack>
              <TextField
                {...register("password", {
                  required: "Password is required.",

                  min: {
                    value: 6,
                    message: "Password should be at least 6 charachters long.",
                  },
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
            {/* <Link
              variant="body2"
              alignSelf={"flex-end"}
              component={RouterLink}
              color={theme.palette.mode === "light" ? "#000" : "#fff"}
              sx={{
                textDecoration: "underline",
              }}
              to={"/auth/reset-password"}
            >
              Forget password?
            </Link> */}
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
              Login
            </button>
          </Stack>
        </form>
      </Stack>
      <SocialAuth />
    </>
  );
}

export default Login;
