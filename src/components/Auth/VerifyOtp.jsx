import { Stack, TextField, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slices/auth";

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;

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
  const { register, handleSubmit, formState } = useForm();
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
        <Typography variant="h4">Verify Otp</Typography>
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
            <Stack>
              <TextField
                {...register("otp", {
                  required: "otp is required.",
                  min: {
                    value: 6,
                    message: "Otp must be 6 characters longs.",
                  },
                })}
                fullWidth
                label="OTP"
                type="number"
              />
              {errors?.otp?.message && <Error err={errors.otp.message} />}
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
    </>
  );
}

export default Login;
