import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import { FormikStepper, FormikStep, InputField } from "formik-stepper";
import MuiPhoneNumber from "material-ui-phone-number";
import { Card, MenuItem, Select } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const validationSchema = Yup.object().shape({
  address1: Yup.string().required("Address field is required"),
  address2: Yup.string().required("Address field is required"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  password: Yup.string()
    .required("The Password field is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
      `Must Contain 8 Characters, One Uppercase, One Lowercase,
      One Number and one special case Character [@$!%*#?&-_]`
    ),
  privacy: Yup.boolean()
    .isTrue()
    .oneOf([true], "The terms and conditions must be accepted."),
});

function MakeOfferPage() {
  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false); //// Important
  };
  const [Images, setImages] = useState([]);
  const [phone, setphone] = useState();
  function onChangeHandler(event) {
    setImages(event.target.files);
  }
  function handleOnChange(value) {
    setphone(value);
  }

  return (
    <div
      style={{
        width: "1500px",

        paddingLeft: "400px",
      }}
    >
      <Typography variant="h4" style={{ align: "left" }}>
        Submit an Offer
      </Typography>
      <FormikStepper
        /// Accept all Formik props
        onSubmit={onSubmit} /// onSubmit Function
        initialValues={{
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
          country: "",
        }}
        // validationSchema={validationSchema}
        labelsColor="secondary" /// The text label color can be root variables or css => #fff
        withStepperLine /// false as default and If it is false, it hides stepper line
        nextBtnLabel="Next" /// Next as default
        prevBtnLabel="return" /// Prev as default
        submitBtnLabel="Submit" /// Submit as default
        nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
        prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
        submitBtnColor="success" /// as default and The color can be root variables or css => #fff
      >
        {/*  First Step */}
        <FormikStep
          label="Offer Instructions" /// The text label of Step
          withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
          withNumbers /// If true, it hides the icon and shows the step number
          iconColor="white" /// The color can be root variables or css => #fff
          circleColor="danger" /// The color can be root variables or css => #fff
        >
          <Typography variant="h6" style={{ align: "left" }}>
            1. Offer Instructions
          </Typography>

          <Typography variant="h7" style={{ align: "left" }}>
            Submitting the Offer:
            <Typography variant="h8">
              When submitting the offer, please include the following:
            </Typography>
          </Typography>
          <Typography variant="h8" style={{ align: "left" }}>
            <br />
            1) The offer contract signed by the buyer <br />
            2) All disclosures attached to the listing signed by the buyer
            <br />
            3) Buyer pre-approval letter or proof of funds, if it’s a cash offer
          </Typography>
        </FormikStep>
        {/* Second Step */}
        <FormikStep
          label="Property Info"
          withIcons="fa fa-lock"
          iconColor="white"
          circleColor="danger"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <InputField
                name="propertytype"
                label="Property Type"
                type="Text"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="year" label="Year Bulit" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="stories" label="No. of Stories" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="beds" label="No. of Beds" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="bath" label="No. of Baths" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField
                name="area"
                label="Finised Area (sq ft)"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="lotsize" label="Lot Size" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="lotunit" label="Lot Unit" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField
                name="basement"
                label="Basement Size (sq ft)"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="hoafee" label="HOA Fee" type="number" />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom gutterTop>
            Primary Contact Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <InputField name="FirstName" label="First Name" type="text" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="LastName" label="Last Name" type="text" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField name="email" label="Email" type="email" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <MuiPhoneNumber defaultCountry={"pk"} onChange={handleOnChange} />
            </Grid>{" "}
          </Grid>
          <Typography variant="h6" gutterBottom gutterTop>
            Deed Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <InputField name="deedowner" label="Deed Onwer" type="text" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField
                name="AskingPrice"
                label="Asking Price"
                type="Number"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={0}>A single Individual</MenuItem>
                <MenuItem value={1}>Multiple Individuals</MenuItem>
                <MenuItem value={2}>A Corporation, LLC, or Trust</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <input
                type="file"
                class="form-control"
                multiple
                fullWidth
                onChange={onChangeHandler}
              />
            </Grid>
          </Grid>
        </FormikStep>
        {/*third Step*/}
        <FormikStep
          label="MlsPlan" /// The text label of Step
          withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
          withNumbers /// If true, it hides the icon and shows the step number
          iconColor="white" /// The color can be root variables or css => #fff
          circleColor="danger" /// The color can be root variables or css => #fff
        >
          <Grid container spacing={3}>
            <div className="pricing-page-header">
              <img
                className="fbsorectangle-45"
                src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606c005ba1930fabf8ba64b6/img/fbsorectangle-45@2x.png"
              />
              <div className="fbsooverlap-group6-1">
                <img
                  className="fbsorectangle-44"
                  src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606c005ba1930fabf8ba64b6/img/fbsorectangle-44@2x.png"
                />
                <img
                  className="vector-31"
                  src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606c005ba1930fabf8ba64b6/img/vector-31@1x.png"
                />
                <div className="fbsorectangle-46 border-1px-congress-blue"></div>
                <div className="ready-to-list"> READY TO LIST?</div>
              </div>
              <h1 className="fbsotext-1">
                Pakistan&#39;s Most Magnificent For Sale By Owner Platfom
              </h1>
              <div className="fbsotext-2 roboto-normal-black-24px">
                Enjoy maximum exposure with plans starting. from pkr 5000/-
              </div>
            </div>
            <div className="fbsotext-3">
              Bring maximum exposure to YOUR&nbsp;&nbsp;Listing and Sell Fast.
            </div>
            <div className="fbsotext-4 roboto-normal-black-24px">
              Plans designed with YOU in mind
            </div>
            <div className="flex-row-1">
              <div className="fbsooverlap-group3 border-1px-acapulco">
                <div className="surname roboto-normal-white-20px">
                  Best Value
                </div>
              </div>
              <div className="fbsooverlap-group4 border-1px-twine">
                <div className="most-popular roboto-normal-white-20px">
                  Most Popular
                </div>
              </div>
            </div>
            <div className="fbsooverlap-group1">
              <div className="fbsorectangle-79 border-class-1"></div>
              <img
                className="vector-93"
                src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60510ccf7ab711553918bd10/img/vector-32@2x.png"
              />
              <img
                className="vector-94"
                src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60510ccf7ab711553918bd10/img/vector-33@2x.png"
              />
              <p className="address roboto-normal-black-14px">
                Most Advanced FSBO Package
                <br />
                PKR 21000/-+No hidden costs at closing Select Plan Everything’s
                included! <br />
                Max photos, virtual tours, pricing assistance, and contract
                review. Unlimited term and changes
              </p>
              <p className="fbsotext-5 roboto-normal-black-14px">
                Pkr 6,000/- +No hidden costs at closing Plan Max photos, virtual
                3D/2D tours, 3 month listing. pre filled disclosures. All
                changes free. Ideal for the savvy home-seller
              </p>
              <p className="fbsotext-6 roboto-normal-black-14px">
                <span className="fbsospan">No hidden costs at closing </span>
                <span className="fbsospan1">
                  Select Plan <br />
                </span>
                <span className="fbsospan">
                  6 photos, 3 month listing.
                  <br /> All changes included
                  <br /> Rs.00/- Best for land and lots
                  <br />
                </span>
              </p>
              <div className="basic-fsbo-package roboto-bold-black-20px">
                Basic FSBO Package
              </div>
              <div className="fbsotext-7 roboto-bold-black-20px">
                Stress Free FSBO Package
              </div>
              <div className="color-1 roboto-bold-black-20px">GOLD</div>
              <div className="free roboto-bold-black-18px">FREE+</div>
              <div className="color roboto-bold-black-18px">SILVER</div>
              <div className="bronze roboto-bold-black-18px">BRONZE</div>
              <div className="bronze roboto-bold-black-18px">BRONZE</div>
              <div className="fbsotext-8 roboto-bold-black-18px">
                Most Advanced FSBO Package
              </div>
            </div>
            <div className="flex-row">
              <div className="fbsooverlap-group border-class-2">
                <div className="select-plan roboto-normal-white-15px">
                  Select Plan
                </div>
              </div>
              <div className="fbsooverlap-group5 border-class-3">
                <div className="select-plan roboto-normal-white-15px">
                  Select Plan
                </div>
              </div>
              <div className="fbsooverlap-group2 border-1px-twine">
                <div className="select-plan roboto-normal-white-15px">
                  Select Plan
                </div>
              </div>
            </div>
          </Grid>
        </FormikStep>
      </FormikStepper>
    </div>
  );
}
export default MakeOfferPage;
