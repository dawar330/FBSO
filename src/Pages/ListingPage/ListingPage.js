import React, { useState } from "react";
import "./style.css";
import firebase from "../../firebase/config";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ListingPage() {
  let { id } = useParams();
  const [listing, setlisting] = useState([]);
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Listings")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setlisting(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  console.log(listing);

  return (
    <div className="property-listing">
      <div className="flex-col-5">
        <h1 className="property-address roboto-bold-black-32px">
          {listing.address1}
          <br />
          {listing.address2}
        </h1>
        <div className="property-images">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/property-image@2x.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/property-image@2x.png"
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/property-image@2x.png"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="property-discription roboto-normal-black-28px">
          {listing.Description}
        </div>
      </div>
      <div className="flex-col-3">
        <div className="flex-row-5">
          <div className="flex-col-2">
            <img
              className="dollar-tag-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/dollar-tag-1@2x.png"
            />
            <div className="price roboto-normal-black-25px">
              ${listing.AskingPrice}
            </div>
          </div>
          <div className="flex-col-4">
            <img
              className="bed-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/bed-1@2x.png"
            />
            <div className="address-3 roboto-normal-black-25px">
              {listing.beds} Beds
            </div>
          </div>
          <div className="flex-col">
            <img
              className="bathing-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/bathing-1@2x.png"
            />
            <div className="listaddress roboto-normal-black-25px">
              {listing.bath} Baths
            </div>
          </div>
          <div className="flex-col-6">
            <img
              className="square-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/square-1@2x.png"
            />
            <div className="address-2 roboto-normal-black-25px">
              {listing.area} sq.ft.
            </div>
          </div>
        </div>
        <NavLink to={`/listing/${id}/offer`}>
          <div className="overlap-group border-1px-bdazzled-blue">
            <div className="make-an-offer roboto-normal-white-20px">
              Make an Offer
            </div>
          </div>
        </NavLink>

        <div className="property-info">
          <div className="flex-row-12">
            <div className="status roboto-normal-black-25px">Status</div>
            <div className="text-1 roboto-normal-black-25px">
              Listing Docs Pending
            </div>
          </div>
          <img
            className="vector-106"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-13">
            <div className="country roboto-normal-black-25px">Country</div>
            <div className="place roboto-normal-black-25px">
              {listing.country}
            </div>
          </div>
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-9">
            <div className="mls-name roboto-normal-black-25px">MLS Name</div>
            <div className="middlesex-mls-cjmls roboto-normal-black-25px">
              -
            </div>
          </div>
          <img
            className="vector-1-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-6">
            <div className="days-on-market roboto-normal-black-25px">
              Days on Market
            </div>
            <div className="text-2 roboto-normal-black-25px">-</div>
          </div>
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-16">
            <div className="type roboto-normal-black-25px">Type</div>
            <div className="single-family roboto-normal-black-25px">
              {listing.propertytype}
            </div>
          </div>
          <img
            className="vector-110"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-4">
            <div className="year-build roboto-normal-black-25px">
              Year Build
            </div>
            <div className="number-1 roboto-normal-black-25px">
              {listing.year}
            </div>
          </div>
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-15">
            <div className="finished-area roboto-normal-black-25px">
              Finished Area
            </div>
            <div className="x2013-sqft roboto-normal-black-25px">
              {listing.area} sq.ft.
            </div>
          </div>
          <img
            className="vector-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-3">
            <div className="lot-size roboto-normal-black-25px">Lot Size</div>
            <div className="x744200-sqft roboto-normal-black-25px">
              {listing.lotsize} sq.ft.
            </div>
          </div>
          <img
            className="vector-113"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-11">
            <div className="basement roboto-normal-black-25px">Basement</div>
            <div className="address-1 roboto-normal-black-25px">
              {listing.basement} sq.ft.
            </div>
          </div>
          <img
            className="vector-1-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-10">
            <div className="no-of-stories roboto-normal-black-25px">
              No. of Stories
            </div>
            <div className="number roboto-normal-black-25px">
              {listing.stories}
            </div>
          </div>
          <img
            className="vector-115"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-14">
            <div className="hoa-fees roboto-normal-black-25px">HOA Fees</div>
            <div className="price-1 roboto-normal-black-25px">
              ${listing.hoafee}
            </div>
          </div>
          <img
            className="vector-1-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/vector-106@2x.png"
          />
          <div className="flex-row-7">
            <div className="open-house roboto-normal-black-25px">
              Open House
            </div>
            <div className="not-scheduled roboto-normal-black-25px">
              Not Scheduled
            </div>
          </div>
        </div>
        <div className="seller-info">
          <div className="flex-col-1">
            <div className="seller-info-1 roboto-normal-black-32px">
              Seller Info
            </div>
            <img
              className="seller-image"
              src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/seller-image@2x.png"
            />
          </div>
          <div className="flex-col-7">
            <div className="text-3 roboto-normal-black-25px">
              {listing.FirstName} {listing.LastName}
            </div>
            <div className="flex-row-8">
              <img
                className="mail-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/mail-1@2x.png"
              />
              <div className="text-4 valign-text-middle roboto-normal-black-14px">
                {listing.email}
              </div>
            </div>
            <div className="flex-row-17">
              <img
                className="call-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/6075502c2ab063fdc7dd207e/img/call-1@2x.png"
              />
              <div className="phone valign-text-middle roboto-normal-black-14px">
                {listing.phoneNo}
              </div>
            </div>
            <div className="overlap-group1 border-1px-fun-blue">
              <div className="message-me valign-text-middle roboto-normal-black-14px">
                Message Me
              </div>
              <img
                className="send-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/6075501c2ab063fdc7dd207d/releases/60780a4ab2522d11528cee52/img/send-1@2x.png"
              />
            </div>
          </div>
        </div>
        <HowToVideos
          text5="How To Videos"
          text6="How to submit & Review Offer on Houzeo.com"
          text7="How to List Your Hone on the MLS For Sale By Owner (FSBO)"
          text8="How to Change Your MLSListing Including Adding Open Houses...All Online!"
          text9="How to Select a Settlement Agent - Attorney, Escrow, Title"
        />
      </div>
    </div>
  );
}

export default ListingPage;

function HowToVideos(props) {
  const { text5, text6, text7, text8, text9 } = props;

  return (
    <div className="how-to-videos">
      <div className="text-5 valign-text-middle mulish-bold-black-25px">
        {text5}
      </div>
      <div className="video-tag-2">
        <div className="rectangle-3"></div>
        <p className="text- valign-text-middle roboto-normal-black-15px">
          {text6}
        </p>
      </div>
      <div className="flex-row">
        <div className="rectangle-3"></div>
        <p className="text-7 valign-text-middle roboto-normal-black-15px">
          {text7}
        </p>
      </div>
      <div className="flex-row-2">
        <div className="rectangle-3"></div>
        <p className="text-8 valign-text-middle roboto-normal-black-15px">
          {text8}
        </p>
      </div>
      <div className="flex-row-1">
        <div className="rectangle-3"></div>
        <p className="text- valign-text-middle roboto-normal-black-15px">
          {text9}
        </p>
      </div>
    </div>
  );
}
