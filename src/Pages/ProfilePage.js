import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputField } from "formik-stepper";
import firebase from "../firebase/config";
function ProfilePage() {
  const uid = firebase.auth().currentUser.uid;
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name field is required"),
    lastname: Yup.string().required("Last Name is required"),
    Email: Yup.string()
      .email("The email must be a valid email address.")
      .required("The Email field is required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          Email: "",
        }}
        onSubmit={async (values) => {
          firebase
            .firestore()
            .collection("users")
            .doc(uid)
            .update({ ...values })
            .then(console.log("Done", uid));
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <InputField
            label="First Name"
            name="firstname"
            placeholder="First Name"
          />

          <InputField
            label="Last Name"
            name="lastname"
            placeholder="Last Name"
          />

          <InputField
            label="Email"
            name="Email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Update</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ProfilePage;
