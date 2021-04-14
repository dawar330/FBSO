import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = (props) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
