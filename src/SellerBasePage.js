import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import AddlistingPage from "./Pages/addlistingpage/AddlistingPage";
import ProfilePage from "./Pages/ProfilePage";

export default function SellerBasePage(props) {
  return (
    <Switch>
      {
        /* Redirect from root URL to /dashboard. */
        <Redirect from="/" to="/auth/dashboard" />
      }
      <Route
        render={() => <ProfilePage user={props.user} />}
        path={`/auth/dashboard`}
      />

      <Redirect to="error/error-v1" />
    </Switch>
  );
}
