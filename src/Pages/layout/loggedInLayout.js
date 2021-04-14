import firebase from "../../firebase/config";
import React, { useState } from "react";
import AddlistingPage from "../addlistingpage/AddlistingPage";
import "./loggedinstyle.css";

function LoggedInLayout(props) {
  const {
    sidebar,
    logoTransparentpng2,
    vector102,
    loggeginoverlapGroup4,
    title,
    ahtishamEjaz,
    vector103,
    home1,
    allProperties,
    vector106,
    logout1,
    logout,
    vector104,
    howToVideos,
    loggedintext5,
    loggedintext4,
    loggedintext3,
    loggedintext2,
    vector105,
    contactUs,
    loggedintext6,
    mail1,
    loggedintext7,
    call1,
    phone,
    yourProperties,
    registerButton,
    loggedintext1,
    propertyImage,
    loggedaddress,
    exclamationMark1,
    loggedincompleteListing,
    registerButton2,
    loggedimcompleteListing,
  } = yourPropertiesPageData;
  const [page, setpage] = useState("listing");
  function rendersellerpage() {
    switch (page) {
      case "listing":
        return (
          <>
            <div className="loggeginoverlap-group1">
              <div className="your-properties loggedinvalign-loggedintext-middle roboto-normal-black-32px">
                {yourProperties}
              </div>
              <img
                className="register-button"
                src={registerButton}
                onClick={() => {
                  setpage("addlisting");
                }}
              />
            </div>
            <div className="loggeginoverlap-group2 border-1px-black">
              <div className="loggedintext-1 loggedinvalign-loggedintext-middle ibmplexsans-normal-black-24px">
                {loggedintext1}
              </div>
            </div>
            <div className="loggeginoverlap-group border-1px-black">
              <div className="loggeninflex-row-4">
                <img className="property-image" src={propertyImage} />
                <p className="loggedaddress loggedinvalign-loggedintext-middle roboto-bold-black-15px">
                  {loggedaddress}
                </p>
                <div className="flex-col">
                  <img className="exclamation-mark-1" src={exclamationMark1} />
                  <div className="loggedincomplete-listing loggedinvalign-loggedintext-middle roboto-bold-jelly-bean-10px">
                    {loggedincompleteListing}
                  </div>
                </div>
                <img className="register-button-1" src={registerButton2} />
              </div>
            </div>
          </>
        );
      case "addlisting":
        return (
          <>
            <AddlistingPage />
          </>
        );

      default:
        break;
    }
  }
  return (
    <div className="your-properties-page">
      <div
        className="side-bar border-1px-black"
        style={{ backgroundImage: `url(${sidebar})` }}
      >
        <img className="logo-transparentpng-2" src={logoTransparentpng2} />
        <img className="vector-102" src={vector102} />
        <div className="loggeninflex-row-3">
          <div
            className="loggeginoverlap-group4"
            style={{ backgroundImage: `url(${loggeginoverlapGroup4})` }}
          >
            <h1 className="title roboto-normal-white-70px">{title}</h1>
          </div>
          <div className="ahtisham-ejaz roboto-normal-black-32px">
            {ahtishamEjaz}
          </div>
        </div>
        <img className="vector-103" src={vector103} />
        <div
          className="loggeninflex-row-2"
          onClick={() => {
            setpage("listing");
          }}
        >
          <img className="home-1" src={home1} />
          <div className="all-properties roboto-normal-black-32px">
            {allProperties}
          </div>
        </div>
        <img className="vector-106" src={vector106} />
        <div
          className="loggeninflex-row"
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          <img className="logout-1" src={logout1} />
          <div className="logout roboto-normal-black-32px">{logout}</div>
        </div>
        <img className="vector-104" src={vector104} />
        <div className="how-to-videos loggedinvalign-loggedintext-middle mulish-bold-black-25px">
          {howToVideos}
        </div>
        <div className="video-tag-4">
          <div className="rectangle-">
            <iframe
              style={{ border: 0 }}
              id="ytplayer"
              type="loggedintext/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/btPYbuw3yG0?rel=0"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <p className="loggedintext- loggedinvalign-loggedintext-middle roboto-normal-black-15px">
            {loggedintext5}
          </p>
        </div>
        <div className="loggeninflex-row-7">
          <div className="rectangle-64">
            <iframe
              style={{ border: 0 }}
              id="ytplayer"
              type="loggedintext/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/btPYbuw3yG0?rel=0"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <p className="loggedintext-4 loggedinvalign-loggedintext-middle roboto-normal-black-15px">
            {loggedintext4}
          </p>
        </div>
        <div className="loggeninflex-row-6">
          <div className="rectangle-">
            <iframe
              style={{ border: 0 }}
              id="ytplayer"
              type="loggedintext/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/btPYbuw3yG0?rel=0"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <p className="loggedintext-3 loggedinvalign-loggedintext-middle roboto-normal-black-15px">
            {loggedintext3}
          </p>
        </div>
        <div className="loggeninflex-row-5">
          <div className="rectangle-">
            <iframe
              style={{ border: 0 }}
              id="ytplayer"
              type="loggedintext/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/btPYbuw3yG0?rel=0"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <p className="loggedintext- loggedinvalign-loggedintext-middle roboto-normal-black-15px">
            {loggedintext2}
          </p>
        </div>
        <img className="vector-105" src={vector105} />
        <div className="contact-us loggedinvalign-loggedintext-middle roboto-bold-black-32px">
          {contactUs}
        </div>
        <div className="loggedintext-6 loggedinvalign-loggedintext-middle roboto-normal-black-20px">
          {loggedintext6}
        </div>
        <div className="loggeninflex-row-8">
          <img className="mail-1" src={mail1} />
          <div className="loggedintext-7 loggedinvalign-loggedintext-middle roboto-normal-black-20px">
            {loggedintext7}
          </div>
        </div>
        <div className="loggeninflex-row-1">
          <img className="call-1" src={call1} />
          <div className="phone loggedinvalign-loggedintext-middle roboto-normal-black-20px">
            {phone}
          </div>
        </div>
      </div>
      <div className="sellerbase-page">{rendersellerpage()}</div>
    </div>
  );
}

const yourPropertiesPageData = {
  sidebar:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/607550d611c6ad9a5606799e/img/sidebar@1x.png",
  logoTransparentpng2:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/logo-transparentpng-2@2x.png",
  vector102:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/vector-102@2x.png",
  loggeginoverlapGroup4:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/ellipse-10@2x.png",
  title: "A",
  ahtishamEjaz: "Ahtisham Ejaz",
  vector103:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/vector-103@2x.png",
  home1:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/home-1@2x.png",
  allProperties: "All Properties",
  vector106:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/vector-103@2x.png",
  logout1:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/logout-1@2x.png",
  logout: "Logout",
  vector104:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/vector-103@2x.png",
  howToVideos: "How To Videos",
  loggedintext5: "How to submit & Review Offer on Houzeo.com",
  loggedintext4: "How to List Your Hone on the MLS For Sale By Owner (FSBO)",
  loggedintext3:
    "How to Change Your MLSListing Including Adding Open Houses...All Online!",
  loggedintext2: "How to Select a Settlement Agent - Attorney, Escrow, Title",
  vector105:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/vector-103@2x.png",
  contactUs: "Contact Us",
  loggedintext6: "Available 9am to 6pm, Mon-Sat",
  mail1:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/mail-1@2x.png",
  loggedintext7: "shumailasarfaraz306@gmail.com",
  call1:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/call-1@2x.png",
  phone: "(888) 979-9526",
  yourProperties: "Your Properties",
  registerButton:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/register-button@2x.png",
  loggedintext1: "Click “Sell a Property” to start on your property listing",
  propertyImage:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/property-image@2x.png",
  loggedaddress: (
    <>
      2600 Connemara Dr,
      <br />
      Matthews, NC 28105
    </>
  ),
  exclamationMark1:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60755200145626949de15c8c/img/exclamation-mark-1@2x.png",
  loggedincompleteListing: "Incomplete Listing",
  registerButton2:
    "https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/register-button-1@2x.png",
  loggedimcompleteListing: "Imcomplete Listing",
};

export default LoggedInLayout;
