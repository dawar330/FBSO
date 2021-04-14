import React from "react";
import Grid from "@material-ui/core/Grid";
import firebase from "../firebase/config";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function ProfilePage(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const { user } = props;
  return (
    <>
      {user ? (
        <>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={Pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              /> */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={() => {
                //   firebase
                //     .auth()
                //     .signInWithEmailAndPassword(Email, Pass)
                //     .then((userCredential) => {
                //       // Signed in
                //       var user = userCredential.user;
                //       // ...
                //     })
                //     .catch((error) => {
                //       var errorCode = error.code;
                //       var errorMessage = error.message;
                //       // ..
                //     });
                // }}
              >
                Sign In
              </Button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default ProfilePage;
