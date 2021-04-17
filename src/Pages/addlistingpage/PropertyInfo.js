import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MuiPhoneNumber from "material-ui-phone-number";
import { MenuItem, Select } from "@material-ui/core";
export default function PropertyInfo() {
  const [phone, setphone] = useState();
  function handleOnChange(value) {
    setphone(value);
  }
  const [Images, setImages] = useState([]);
  function onChangeHandler(event) {
    setImages(event.target.files);
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Property Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="propertytype"
            name="propertytype"
            label="Home Type"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="year"
            name="year"
            label="Built Year"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stories"
            name="stories"
            label="No. of Stories"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="beds"
            name="beds"
            label="Bedrooms"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bath"
            name="bath"
            label="Baths"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="area"
            name="area"
            label="Finised Area (sq ft)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lotsize"
            name="lotsize"
            label="Lot Size"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lotunit"
            name="lotunit"
            label="Lot Unit"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="basement"
            name="basement"
            label="Basement Size"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="hoafee"
            name="hoafee"
            label="HOA Fee(Per Month)"
            fullWidth
            autoComplete
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom gutterTop>
        Primary Contact Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="FirstName"
            name="FirstName"
            label="First Name"
            fullWidth
            autoComplete
          />
        </Grid>{" "}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="LastName"
            name="LastName"
            label="Last Name"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPhoneNumber
            fullWidth
            defaultCountry={"pk"}
            onChange={handleOnChange}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom gutterTop>
        Deed Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="deedowner"
            name="deedowner"
            label="Deed Title Holder Name"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id=""
            name="AskingPrice"
            label="Asking Price"
            fullWidth
            autoComplete
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <input
            type="file"
            class="form-control"
            multiple
            fullWidth
            onChange={onChangeHandler}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
