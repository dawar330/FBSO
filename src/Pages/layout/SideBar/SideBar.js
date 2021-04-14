import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../../firebase/config";
import "./style.css";

function SideBar(props) {
  const { user, children } = props;
  return (
    <div className="your-properties-page">
      <div className="overlap-group2">
        <img
          className="vector-102"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60704a6c94514d8269637e90/img/vector-102@2x.png"
        />
        <div className="sidee-bar border-class-1">
          <img
            className="logo-transparentpng-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/logo-transparentpng-1@2x.png"
          />
          <div className="flex-row-4">
            <div className="overlap-group3-1">
              <h1 className="title roboto-regular-normal-cloud-70px">
                {user && user.firstname[0]}
              </h1>
            </div>
            <div className="ahtisham-ejaz roboto-regular-normal-black-32px">
              {user && user.firstname + " " + user.lastname}
            </div>
          </div>
          <img
            className="vector-10"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60704a6c94514d8269637e90/img/vector-103@2x.png"
          />
          <div className="flex-row">
            <img
              className="home-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60704a6c94514d8269637e90/img/home-1@2x.png"
            />
            <div className="all-properties roboto-regular-normal-black-32px">
              All Properties
            </div>
          </div>

          <Link to={"/auth/profile"}>
            <div className="flex-row">
              <img src="user.svg" />
              <div className="all-properties roboto-regular-normal-black-32px">
                Profile
              </div>
            </div>
          </Link>
          <div
            onClick={() => {
              firebase.auth().signOut();
              console.log("Logging out");
              console.log(firebase.auth.isEmpty);
            }}
            className="flex-row"
          >
            <img src="user.svg" />
            <div className="all-properties roboto-regular-normal-black-32px">
              Logout
            </div>
          </div>

          <img
            className="vector-10"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60704a6c94514d8269637e90/img/vector-103@2x.png"
          />
          <div className="how-to-videos sidebarvalign-text-middle mulish-bold-black-25px">
            How To Videos
          </div>
          <div className="video-tag-4">
            <div className="rectangle-">
              <iframe
                style={{ border: 0 }}
                id="ytplayer"
                type="text/html"
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
            <p className="text- sidebarvalign-text-middle roboto-regular-normal-black-15px">
              How to submit &amp; Review Offer on Houzeo.com
            </p>
          </div>
          <div className="flex-row-3">
            <div className="rectangle-64">
              <iframe
                style={{ border: 0 }}
                id="ytplayer"
                type="text/html"
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
            <p className="text-4 sidebarvalign-text-middle roboto-regular-normal-black-15px">
              How to List Your Hone on the MLS For Sale By Owner (FSBO)
            </p>
          </div>
          <div className="flex-row-1">
            <div className="rectangle-">
              <iframe
                style={{ border: 0 }}
                id="ytplayer"
                type="text/html"
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
            <p className="text-3 sidebarvalign-text-middle roboto-regular-normal-black-15px">
              How to Change Your MLSListing Including Adding Open Houses...All
              Online!
            </p>
          </div>
          <div className="flex-row-5">
            <div className="rectangle-">
              <iframe
                style={{ border: 0 }}
                id="ytplayer"
                type="text/html"
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
            <p className="text- sidebarvalign-text-middle roboto-regular-normal-black-15px">
              How to Select a Settlement Agent - Attorney, Escrow, Title
            </p>
          </div>
          <img
            className="vector-105"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60704a6c94514d8269637e90/img/vector-103@2x.png"
          />
          <div className="contact-us sidebarvalign-text-middle roboto-bold-black-32px">
            Contact Us
          </div>
          <div className="text-6 sidebarvalign-text-middle roboto-regular-normal-black-20px">
            Available 9am to 6pm, Mon-Sat
          </div>
          <div className="flex-row-2">
            <img
              className="mail-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60704a6c94514d8269637e90/img/mail-1@2x.png"
            />
            <div className="text-7 sidebarvalign-text-middle roboto-regular-normal-black-20px">
              shumailasarfaraz306@gmail.com
            </div>
          </div>
          <div className="flex-row-6">
            <img
              className="call-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60704a6c94514d8269637e90/img/call-1@2x.png"
            />
            <div className="phone sidebarvalign-text-middle roboto-regular-normal-black-20px">
              (888) 979-9526
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">{children && children}</div>
    </div>
  );
}

export default SideBar;
