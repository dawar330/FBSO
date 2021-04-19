import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar smart-layers-pointers ">
        <div className="buttons">
          <Group1
            labelI153462495="(888) 978-9526"
            spanText="9am to 6pm"
            spanText2=" "
            spanText3="EST, (Mon To Sat)"
          />
          <div className="start-listing-button smart-layers-pointers ">
            <div className="label-2 valign-text-middle mulish-bold-white-12px">
              Start Free Listing
            </div>
          </div>
        </div>
        <Link to={"/home"}>
          <img
            alt="logo"
            className="rectangle-34"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-34@2x.png"
          />
        </Link>
        <div className="links">
          <div className="buy valign-text-middle mulish-semi-bold-cape-cod-14px  ">
            <NavLink style={{ textDecoration: "none" }} to={"/buy"}>
              Buy
            </NavLink>
          </div>
          <div className="pricing valign-text-middle mulish-semi-bold-cape-cod-14px">
            <NavLink style={{ textDecoration: "none" }} to={"/pricing"}>
              Pricing
            </NavLink>
          </div>
          <div className="reviews valign-text-middle mulish-semi-bold-cape-cod-14px">
            <NavLink style={{ textDecoration: "none" }} to={"/Reviews"}>
              Reviews
            </NavLink>
          </div>
          <div className="for-sale-by-owner valign-text-middle mulish-semi-bold-cape-cod-14px">
            <NavLink style={{ textDecoration: "none" }} to={"/fbso"}>
              For Sale By Owner
            </NavLink>
          </div>
          <div className="faqs valign-text-middle mulish-semi-bold-cape-cod-14px">
            <NavLink style={{ textDecoration: "none" }} to={"/faqs"}>
              FAQS
            </NavLink>
          </div>
          <div className="sigin valign-text-middle mulish-semi-bold-cape-cod-14px ">
            <NavLink style={{ textDecoration: "none" }} to={"/signin"}>
              Sign In
            </NavLink>
          </div>
          <div className="blog valign-text-middle mulish-semi-bold-cape-cod-14px">
            <NavLink style={{ textDecoration: "none" }} to={"/blogs"}>
              Blogs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

function Group1(props) {
  const { labelI153462495, spanText, spanText2, spanText3 } = props;

  return (
    <div className="group-1">
      <div className="label-1 valign-text-middle mulish-bold-san-marino-12px">
        {labelI153462495}
      </div>
      <p className="label valign-text-middle mulish-bold-san-marino-12px">
        <span>
          <span className="span">{spanText}</span>
          <span className="span1">{spanText2}</span>
          <span className="span">{spanText3}</span>
        </span>
      </p>
    </div>
  );
}
