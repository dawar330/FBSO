import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="flex-col">
        <div className="flex-row-1">
          <img
            className="logo-transparentpng-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/logo-transparentpng-1@2x.png"
          />
          <div className="text-1 dmsans-normal-white-22px">
            Ready to get started?
          </div>
          <div className="overlap-group1">
            <div className="get-started dmsans-bold-white-17px">
              Get started
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex-row">
          <div className="newsletter">
            <div className="subscribe-to-our-new dmsans-normal-white-22px">
              Subscribe to our
              <br />
              newsletter
            </div>
            <div className="form">
              <div className="overlap-group2">
                <div className="rectangle"></div>
                <div className="submit">
                  <div className="ic-keyboard-arrow-right-48px">
                    <div className="overlap-group3">
                      <img
                        className="path-2"
                        src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/shape@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-address dmsans-normal-white-15px">
                Email address
              </div>
            </div>
          </div>
          <Services
            services="Services"
            emailMarketing="Buy"
            campaigns="Pricing"
            branding="Reviews"
            offline="For Sale By Owner"
            offline2="Seller Guide"
          />
          <About
            about="About"
            ourStory="Refund and Cancellation Policy"
            benefits="Privacy Policy"
            team="Terms and Conditions"
          />
          <Help help="Help" faqs="FAQs" contactUs="Contact Us" />
        </div>
      </div>
      <div className="flex-row-2">
        <div className="terms-conditions dmsans-normal-white-14px">
          Terms &amp; Conditions
        </div>
        <div className="privacy-policy dmsans-normal-white-14px">
          Privacy Policy
        </div>
        <img
          className="path-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60662d91f625290d3b716cfb/img/path-4@2x.png"
        />
        <img
          className="path"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60662d91f625290d3b716cfb/img/path-5@2x.png"
        />
        <div className="overlap-group">
          <img
            className="shape"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60662d91f625290d3b716cfb/img/shape-3@2x.png"
          />
          <img
            className="oval"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60662d91f625290d3b716cfb/img/oval-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
}

function Services(props) {
  const {
    services,
    emailMarketing,
    campaigns,
    branding,
    offline,
    offline2,
  } = props;

  return (
    <div className="services">
      <div className="services-1 dmsans-bold-white-18px">{services}</div>
      <Link to={"/buy"}>
        {" "}
        <div className="email-marketing dmsans-normal-white-14px">
          {emailMarketing}
        </div>
      </Link>
      <Link to={"/pricing"}>
        <div className="campaigns dmsans-normal-white-14px">{campaigns}</div>
      </Link>
      <Link to={"/reviews"}>
        {" "}
        <div className="branding dmsans-normal-white-14px">{branding}</div>
      </Link>
      <Link to={"/fbso"}>
        {" "}
        <div className="offline dmsans-normal-white-14px">{offline}</div>
      </Link>
    </div>
  );
}

function About(props) {
  const { about, ourStory, benefits, team } = props;

  return (
    <div className="about">
      <div className="about-1 dmsans-bold-white-18px">{about}</div>
      <div className="our-story dmsans-normal-white-14px">{ourStory}</div>
      <div className="benefits dmsans-normal-white-14px">{benefits}</div>
      <div className="team dmsans-normal-white-14px">{team}</div>
    </div>
  );
}

function Help(props) {
  const { help, faqs, contactUs } = props;

  return (
    <div className="help">
      <div className="help-1 dmsans-bold-white-18px">{help}</div>
      <Link to={"/faqs"}>
        {" "}
        <div className="fa-qs dmsans-normal-white-14px">{faqs}</div>
      </Link>
      <div className="contact-us dmsans-normal-white-14px">{contactUs}</div>
    </div>
  );
}

export default Footer;
