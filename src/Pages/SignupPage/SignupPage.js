import React from "react";
import Grid from "@material-ui/core/Grid";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./style.css";
function SignupPage() {
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

  return (
    <div className="sign-in-page">
      <div className="overlap-group">
        <Column1
          overlapGroup1="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a22a24132ee9fa0b991f9/img/column1@1x.png"
          textualAreaProps={Column1Data.textualAreaProps}
        />
        <img
          className="rectangle-85"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606993e37e488e73cfea300e/img/rectangle-85@2x.png"
        />
        <img
          className="rectangle-93"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606993e37e488e73cfea300e/img/rectangle-85@2x.png"
        />
        <img
          className="rectangle-94"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606993e37e488e73cfea300e/img/rectangle-85@2x.png"
        />
        <img
          className="rectangle-95"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606993e37e488e73cfea300e/img/rectangle-85@2x.png"
        />
        <div className="rectangle-89 border-1px-alto">
          <iframe
            style={{ border: 0 }}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/syiQmaGZFXM?rel=0"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
        <div className="rectangle-90 border-1px-alto">
          <iframe
            style={{ border: 0 }}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dhAmMXCBIcg?rel=0"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
        <div className="rectangle-91 border-1px-alto">
          <iframe
            style={{ border: 0 }}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fYAUINqHAY4?rel=0"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
        <div className="rectangle-92 border-1px-alto">
          <iframe
            style={{ border: 0 }}
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ccr8oIxDVLw?rel=0"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
        <div className="video-text-3 roboto-bold-black-28px">Video Text</div>
        <div className="video-text-1 roboto-bold-black-28px">Video Text</div>
        <div className="video-text-2 roboto-bold-black-28px">Video Text</div>
        <div className="video-text roboto-bold-black-28px">Video Text</div>
        <div className="login-form">
          {" "}
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}></Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="FirstName"
                  label="First Name"
                  type="text"
                  id="FirstName"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="LastName"
                  label="Last Name"
                  type="text"
                  id="LastName"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
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
                <Grid container>
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      {"Already have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

function NavBar(props) {
  const {
    rectangle34,
    group13Props,
    startListingButtonProps,
    linksProps,
  } = props;

  return (
    <div className="nav-bar smart-layers-pointers ">
      <div className="buttons">
        <Group13
          labelI153462495={group13Props.labelI153462495}
          spanText={group13Props.spanText}
          spanText2={group13Props.spanText2}
          spanText3={group13Props.spanText3}
        />
        <StartListingButton>
          {startListingButtonProps.children}
        </StartListingButton>
      </div>
      <img alt="" className="rectangle-34" src={rectangle34} />
      <Links
        text1={linksProps.text1}
        text2={linksProps.text2}
        text3={linksProps.text3}
        text4={linksProps.text4}
        text5={linksProps.text5}
        text6={linksProps.text6}
        text7={linksProps.text7}
      />
    </div>
  );
}

function Group13(props) {
  const { labelI153462495, spanText, spanText2, spanText3 } = props;

  return (
    <div className="group-1">
      <div className="label-i2701227495 valign-text-middle mulish-bold-san-marino-12px">
        {labelI153462495}
      </div>
      <p className="label-i2701227471 valign-text-middle mulish-bold-san-marino-12px">
        <span>
          <span className="span">{spanText}</span>
          <span className="span1">{spanText2}</span>
          <span className="span">{spanText3}</span>
        </span>
      </p>
    </div>
  );
}

function StartListingButton(props) {
  const { children } = props;

  return (
    <div className="start-listing-button smart-layers-pointers ">
      <div className="label-i2701227147 valign-text-middle mulish-bold-white-12px">
        {children}
      </div>
    </div>
  );
}

function Links(props) {
  const { text1, text2, text3, text4, text5, text6, text7 } = props;

  return (
    <div className="links">
      <div className="text-3 valign-text-middle mulish-semi-bold-cape-cod-14px smart-layers-pointers ">
        {text1}
      </div>
      <div className="text-4 valign-text-middle mulish-semi-bold-cape-cod-14px">
        {text2}
      </div>
      <div className="text-5 valign-text-middle mulish-semi-bold-cape-cod-14px">
        {text3}
      </div>
      <div className="text-6 valign-text-middle mulish-semi-bold-cape-cod-14px">
        {text4}
      </div>
      <div className="text-7 valign-text-middle mulish-semi-bold-cape-cod-14px">
        {text5}
      </div>
      <div className="text-8 valign-text-middle mulish-semi-bold-cape-cod-14px">
        {text6}
      </div>
      <div className="text-9 valign-text-middle mulish-semi-bold-cape-cod-14px smart-layers-pointers ">
        {text7}
      </div>
    </div>
  );
}

function Column1(props) {
  const { overlapGroup1, textualAreaProps } = props;

  return (
    <div className="column1">
      <div
        className="overlap-group1"
        style={{ backgroundImage: `url(${overlapGroup1})` }}
      >
        <TextualArea
          text194={textualAreaProps.text194}
          text195={textualAreaProps.text195}
        />
      </div>
    </div>
  );
}

function TextualArea(props) {
  const { text194, text195 } = props;

  return (
    <div className="textual-area">
      <h1 className="text-1 valign-text-middle mulish-bold-endeavour-57px">
        {text194}
      </h1>
      <p className="text-2 valign-text-middle mulish-normal-dove-gray-16px">
        {text195}
      </p>
    </div>
  );
}
const group13Data = {
  labelI153462495: "(888) 978-9526",
  spanText: "9am to 6pm",
  spanText2: " ",
  spanText3: "EST, (Mon To Sat)",
};

const startListingButtonData = {
  children: "Start Free Listing",
};

const linksData = {
  text1: "Buy",
  text2: "Pricing",
  text3: "Reviews",
  text4: "For Sale By Owner",
  text5: "FAQS",
  text6: "Blog",
  text7: "Sigin",
};

const NavBarData = {
  group13Props: group13Data,
  startListingButtonProps: startListingButtonData,
  linksProps: linksData,
};

const textualAreaData = {
  text194: (
    <>
      No hidden fees.
      <br />
      No commission.
      <br />
      No, really.
    </>
  ),
  text195:
    "We’ve streamlined the home listing process to digitize most documents and eliminate unnecessary steps. Our efficiency not only makes it easier to sell a home, it translates into the best savings available for home sellers.",
};

const Column1Data = {
  textualAreaProps: textualAreaData,
};
