/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import BasePage from "./BasePage";

import Layout from "./Pages/layout/Layout";

export function Routes() {
  return (
    <Layout>
      <BasePage />
    </Layout>
  );
}
