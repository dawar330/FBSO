import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import FaqsPage from "./Pages/faqspage/FaqsPage";
import SigninPage from "./Pages/SigninPage/SigninPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import ReviewsPage from "./Pages/ReveiwsPage/ReveiwPage";
import pricingpage from "./Pages/PricingPage/pricingpage";
import Blogbasepage from "./Pages/blogs/Blogbasepage";
import blog1 from "./Pages/blogs/blogpages/blog1";
import blog3 from "./Pages/blogs/blogpages/blog3";
import blog2 from "./Pages/blogs/blogpages/blog2";
import ForSaleOwnerPage from "./Pages/fbsopage/ForSaleOwnerPage";
import ForgotpassPage from "./Pages/Forgotpass/ForgotpassPage";
export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/homepage" />
        }
        <Route path="/homepage" component={HomePage} />
        <Route path="/faqs" component={FaqsPage} />
        <Route path="/fbso" component={ForSaleOwnerPage} />
        <Route path="/siginup" component={SignupPage} />
        <Route path="/forgotpass" component={ForgotpassPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/faqs" component={FaqsPage} />
        <Route path="/Reviews" component={ReviewsPage} />
        <Route path="/pricing" component={pricingpage} />
        <Route exact path="/blogs/1" component={blog1} />
        <Route exact path="/blogs/2" component={blog2} />
        <Route exact path="/blogs/3" component={blog3} />
        <Route path="/blogs" component={Blogbasepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
