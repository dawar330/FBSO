import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import { FormikStepper, FormikStep, InputField } from "formik-stepper";
import MuiPhoneNumber from "material-ui-phone-number";
import { MenuItem, Select } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import firebase, { storage } from "../../firebase/config";

const validationSchema = Yup.object().shape({
  address1: Yup.string().required("Address field is required"),
  address2: Yup.string().required("Address field is required"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),

  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.number().required("Address field is required"),
  country: Yup.string().required("Country is required"),
  propertytype: Yup.string().required("Property Type is required"),
  year: Yup.number().required("Bulit Year is required"),
  stories: Yup.number().required("No. of Stories is required"),
  beds: Yup.number().required("No. of Beds is required"),
  bath: Yup.number().required("No. of Baths is required"),
  area: Yup.number().required("Total Area is required"),
  lotsize: Yup.number().required("Lot Size is required"),
  lotunit: Yup.number().required("Lot Unit is required"),
  basement: Yup.number().required("Basement Size is required"),
  hoafee: Yup.number().required("HOA fee is required"),
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  Description: Yup.string()
    .required("Description is required")
    .min(15, "Minimum of 15 Charaters"),
  deedowner: Yup.string().required("Deed Owner is required"),
  AskingPrice: Yup.number().required("Asking Price is required"),
});

function AddlistingPage(props) {
  const uid = firebase.auth().currentUser.uid;
  const onSubmit = async (values, { setSubmitting }) => {
    firebase
      .firestore()
      .collection("Listings")
      .add({
        ...values,
        phoneNo: phone,
        uid: uid,
        Images: imageurls,
      })
      .then(props.setpage("listing"))
      .catch(console.error());
    console.log(values);
    setSubmitting(false); //// Important
  };
  const [Images, setImages] = useState([]);
  const [imageurls, setimageurls] = useState("");
  const [phone, setphone] = useState();
  function onChangeHandler(event) {
    setImages(event.target.files[0]);
  }
  function handleupload() {
    let bucketName = "images";
    let file = Images;
    let storageref = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadtask = storageref.put(file);
    uploadtask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let downladurl = uploadtask.getDownloadURL;
      console.log(downladurl);
    });
  }
  function handleOnChange(value) {
    setphone(value);
  }

  return (
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
        propertytype: "",
        year: "",
        stories: "",
        beds: "",
        bath: "",
        area: "",
        lotsize: "",
        lotunit: "",
        basement: "",
        hoafee: "",
        FirstName: "",
        LastName: "",
        email: "",
        deedowner: "",
        AskingPrice: "",
        Description: "",
      }}
      validationSchema={validationSchema}
      labelsColor="secondary" /// The text label color can be root variables or css => #fff
      withStepperLine /// false as default and If it is false, it hides stepper line
      nextBtnLabel="Next" /// Next as default
      prevBtnLabel="Return" /// Prev as default
      submitBtnLabel="Done" /// Submit as default
      nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
      prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
      submitBtnColor="success" /// as default and The color can be root variables or css => #fff
    >
      {/*  First Step */}
      <FormikStep
        label="Property Info Info" /// The text label of Step
        withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
        withNumbers /// If true, it hides the icon and shows the step number
        iconColor="white" /// The color can be root variables or css => #fff
        circleColor="danger" /// The color can be root variables or css => #fff
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <InputField name="address1" label="Address Line 1" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InputField name="address2" label="Address Line 2" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InputField name="city" label="City" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InputField name="state" label="State" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InputField name="zip" label="Zip" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InputField name="country" label="Country" />
          </Grid>
        </Grid>
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
            <InputField name="propertytype" label="Property Type" type="Text" />
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
            <InputField name="Description" label="Description" type="text" />
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
            <InputField name="AskingPrice" label="Asking Price" type="Number" />
          </Grid>
          {/* <Grid item xs={12} sm={3}>
            <Select
              fullWidth
              required={true}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={0}>A single Individual</MenuItem>
              <MenuItem value={1}>Multiple Individuals</MenuItem>
              <MenuItem value={2}>A Corporation, LLC, or Trust</MenuItem>
            </Select>
          </Grid> */}
          <Grid item xs={12} sm={3}>
            <input
              type="file"
              class="form-control"
              multiple
              onChange={onChangeHandler}
            />
            <button type={"button"} onClick={handleupload}>
              upload
            </button>
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
          <div className="flex-row-1">
            <div className="fbsooverlap-group3 border-1px-acapulco">
              <div className="surname roboto-normal-white-20px">Best Value</div>
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
              3D/2D tours, 3 month listing. pre filled disclosures. All changes
              free. Ideal for the savvy home-seller
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
  );
}
export default AddlistingPage;
