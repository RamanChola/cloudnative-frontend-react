import React, { useContext } from "react";
import { AuthContext } from "../auth-context";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(23),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    justifyContent: "center",
  },
}));
const SignUp = ({ handleChange }) => {
  const [error, setError] = React.useState(false);
  const auth = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let history = useHistory();
  const classes = useStyles();
  const authSubmitHandler = async (event) => {
    console.log(event);
    try {
      // eslint-disable-next-line
      const responseData = await axios.post(
        `http://localhost:5000/api/users/signup`,
        {
          email: event.email,
          password: event.password,
          username: event.firstName,
          lastname: event.lastName,
        }
      );
      auth.login(responseData.data.userId, responseData.data.token);
      console.log(responseData.data);
      history.push("/");
    } catch (error) {
      error && setError(true);
    }
  };
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        {error && <p style={{ color: "red" }}>User Already Exists!</p>}
        <Typography style={{ marginBottom: "4%" }} component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(authSubmitHandler)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                {...register("firstName")}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                {...register("lastName")}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
              />
            </Grid>
          </Grid>

          <TextField
            variant="outlined"
            margin="normal"
            {...register("email")}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            {...register("password")}
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            {...register("confirmPassword")}
            type="password"
            required
            fullWidth
            name="confirmPassword"
            label="confirm password"
            id="confirmPassword"
            autoComplete="current-password"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Button
                onClick={() => {
                  handleChange(true);
                }}
              >
                Already have an account SignIn
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;
