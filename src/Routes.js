/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useState, shallowEqual } from "react";
import { Switch } from "react-router";
import BasePage from "./BasePage";
import firebase, { db } from "./firebase/config";
import Layout from "./Pages/layout/Layout";
import LoggedInLayout from "./Pages/layout/loggedInLayout";

export function Routes() {
  const [isAuth, setisAuth] = useState(false);
  const [user, setuser] = useState();
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          setuser(doc.data());
        });

      setisAuth(true);
    } else {
      setisAuth(false);
    }
  });
  return (
    <Switch>
      {!isAuth ? (
        <Layout>
          <BasePage />
        </Layout>
      ) : (
        <LoggedInLayout user={user} />
      )}
    </Switch>
  );
}
