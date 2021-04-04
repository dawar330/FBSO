import React from "react";

import "./style.css";

export default ReviewPage;

function ReviewPage(props) {
  const {
    x11,
    vector15,
    rectangle63,
    rectangle62,
    whatCustomerLike,
    number,
    vector20,
    fastListing,
    address,
    vector21,
    number2,
    text12,
    address2,
    number3,
    vector22,
    fastListing2,
    address3,
    number4,
    vector23,
    fastListing3,
    address4,
    number5,
    vector24,
    fastListing4,
    address5,
    text13,
    vector25,
    rectangle29,
    text14,
    vector26,
    text15,
    reviewHeaderProps,
    reveiwProps,
    reveiw2Props,
    reveiw2Props2,
    howToVideosProps,
  } = ReviewsData;

  return (
    <div className="reviewspage">
      <div className="overlap-group">
        <img alt="" className="x1-1" src={x11} />
        <img alt="" className="vector-15" src={vector15} />
        <ReviewHeader {...reviewHeaderProps} />
      </div>
      <div className="flex-row-4">
        <div className="review-container">
          <Reveiw {...reveiwProps} />
          <div className="overlap-group6-1">
            <Reveiw2 {...reveiw2Props} />
            <img alt="" className="rectangle-63" src={rectangle63} />
          </div>
          <div className="overlap-group7">
            <Reveiw3 {...reveiw2Props2} />
            <img alt="" className="rectangle-62-1" src={rectangle62} />
          </div>
        </div>
        <div className="side-bar">
          <div className="what-customer-like-1">
            <div className="what-customer-like valign-text-middle">
              {whatCustomerLike}
            </div>
            <div className="overlap-group1-1 border-1px-silver">
              <div className="number-1 valign-text-middle mulish-bold-black-25px">
                {number}
              </div>
              <img alt="" className="vector-2" src={vector20} />
              <div className="fast-listing valign-text-middle mulish-normal-black-25px">
                {fastListing}
              </div>
              <div className="address-3 valign-text-middle mulish-bold-gunsmoke-15px">
                {address}
              </div>
            </div>
            <div className="overlap-group3">
              <div className="rectangle-24 border-1px-silver"></div>
              <img alt="" className="vector-21" src={vector21} />
              <div className="number valign-text-middle mulish-bold-black-25px">
                {number2}
              </div>
              <div className="text-12 valign-text-middle">{text12}</div>
              <div className="address-4 valign-text-middle mulish-bold-gunsmoke-15px">
                {address2}
              </div>
            </div>
            <div className="overlap-group5-1 border-1px-silver">
              <div className="number-1 valign-text-middle mulish-bold-black-25px">
                {number3}
              </div>
              <img alt="" className="vector-2" src={vector22} />
              <div className="fast-listing valign-text-middle mulish-normal-black-25px">
                {fastListing2}
              </div>
              <div className="address-3 valign-text-middle mulish-bold-gunsmoke-15px">
                {address3}
              </div>
            </div>
            <div className="overlap-group2 border-1px-silver">
              <div className="number-1 valign-text-middle mulish-bold-black-25px">
                {number4}
              </div>
              <img alt="" className="vector-2" src={vector23} />
              <div className="fast-listing valign-text-middle mulish-normal-black-25px">
                {fastListing3}
              </div>
              <div className="address-3 valign-text-middle mulish-bold-gunsmoke-15px">
                {address4}
              </div>
            </div>
            <div className="overlap-group4 border-1px-silver">
              <div className="number-1 valign-text-middle mulish-bold-black-25px">
                {number5}
              </div>
              <img alt="" className="vector-2" src={vector24} />
              <div className="fast-listing valign-text-middle mulish-normal-black-25px">
                {fastListing4}
              </div>
              <div className="address-3 valign-text-middle mulish-bold-gunsmoke-15px">
                {address5}
              </div>
            </div>
          </div>
          <div className="business-transparency">
            <div className="overlap-group6 border-class-1">
              <div className="text-13 valign-text-middle mulish-bold-black-25px">
                {text13}
              </div>
              <img alt="" className="vector-25" src={vector25} />
              <div className="flex-row-5">
                <img alt="" className="rectangle-29" src={rectangle29} />
                <div className="text-14 valign-text-middle">{text14}</div>
              </div>
              <img alt="" className="vector-26" src={vector26} />
              <div className="text-15 valign-text-middle">{text15}</div>
            </div>
          </div>
          <div className="how-to-videos">
            <HowToVideos
              text16={howToVideosProps.text16}
              text18={howToVideosProps.text18}
              text19={howToVideosProps.text19}
              text20={howToVideosProps.text20}
              videoTag2Props={howToVideosProps.videoTag2Props}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewHeader(props) {
  const {
    text1,
    text2,
    star1,
    star2,
    star3,
    star4,
    star5,
    vector17,
    address,
  } = props;

  return (
    <div className="review-header">
      <h1 className="text-1 valign-text-middle">{text1}</h1>
      <div className="text-2 valign-text-middle">{text2}</div>
      <div className="flex-row-8">
        <div className="overlap-group2-1">
          <img alt="" className="star-" src={star1} />
        </div>
        <div className="overlap-group3-1">
          <img alt="" className="star-" src={star2} />
        </div>
        <div className="overlap-group5">
          <img alt="" className="star-" src={star3} />
        </div>
        <div className="overlap-group4-1">
          <img alt="" className="star-" src={star4} />
        </div>
        <div className="overlap-group1">
          <img alt="" className="star-5" src={star5} />
        </div>
        <img alt="" className="vector-17" src={vector17} />
        <div className="address valign-text-middle">{address}</div>
      </div>
    </div>
  );
}

function Reveiw(props) {
  const {
    rectangle62,
    afaqAhmed,
    homeSeller,
    rectangle22,
    address,
    address2,
    text3,
    vector19,
    star6,
    star7,
    star8,
    star9,
    star10,
    text5,
    spanText,
    spanText2,
    spanText3,
  } = props;

  return (
    <div className="reveiw border-1px-boulder">
      <div className="flex-col">
        <div className="flex-row-7">
          <img alt="" className="rectangle-62" src={rectangle62} />
          <div className="frame-6">
            <div className="afaq-ahmed valign-text-middle roboto-bold-black-14px">
              {afaqAhmed}
            </div>
            <div className="home-seller valign-text-middle mulish-normal-granite-gray-12px">
              {homeSeller}
            </div>
          </div>
          <img alt="" className="rectangle-22" src={rectangle22} />
          <div className="overlap-group-1">
            <div className="address-1 valign-text-middle mulish-normal-black-12px">
              {address}
            </div>
            <div className="address-2 valign-text-middle mulish-normal-black-12px">
              {address2}
            </div>
            <p className="text- valign-text-middle mulish-normal-granite-gray-10px">
              {text3}
            </p>
          </div>
        </div>
        <img alt="" className="vector-19" src={vector19} />
      </div>
      <div className="flex-row-1">
        <div className="overlap-group-2">
          <img alt="" className="star-6" src={star6} />
        </div>
        <div className="overlap-group-3">
          <img alt="" className="star--1" src={star7} />
        </div>
        <div className="overlap-group-4">
          <img alt="" className="star--1" src={star8} />
        </div>
        <div className="overlap-group-5">
          <img alt="" className="star--1" src={star9} />
        </div>
        <div className="overlap-group-4">
          <img alt="" className="star--1" src={star10} />
        </div>
        <p className="text--1 valign-text-middle mulish-normal-boulder-10px">
          {text5}
        </p>
      </div>
      <p className="text-4 valign-text-middle roboto-bold-white-14px">
        <span>
          <span className="span">{spanText}</span>
          <span className="span-1">{spanText2}</span>
          <span className="span2">{spanText3}</span>
        </span>
      </p>
    </div>
  );
}

function Reveiw2(props) {
  const {
    afaqAhmedI169549,
    text6,
    rectangle22,
    address,
    address2,
    text7,
    vector19,
    star6,
    star7,
    star8,
    star9,
    star10,
    text8,
    spanText,
    spanText2,
  } = props;

  return (
    <div className="reveiw-1 border-1px-boulder">
      <div className="flex-col-1">
        <div className="flex-row-2">
          <div className="frame-6-2">
            <div className="afaq-ahmed-i169549 valign-text-middle roboto-bold-black-14px">
              {afaqAhmedI169549}
            </div>
            <div className="text-6 valign-text-middle mulish-normal-granite-gray-12px">
              {text6}
            </div>
          </div>
          <img alt="" className="rectangle-22-1" src={rectangle22} />
          <div className="overlap-group-1">
            <div className="address-1 valign-text-middle mulish-normal-black-12px">
              {address}
            </div>
            <div className="address-2 valign-text-middle mulish-normal-black-12px">
              {address2}
            </div>
            <p className="text- valign-text-middle mulish-normal-granite-gray-10px">
              {text7}
            </p>
          </div>
        </div>
        <img alt="" className="vector-19-1" src={vector19} />
      </div>
      <div className="flex-row-1">
        <div className="overlap-group-2">
          <img alt="" className="star-6" src={star6} />
        </div>
        <div className="overlap-group-3">
          <img alt="" className="star--1" src={star7} />
        </div>
        <div className="overlap-group-4">
          <img alt="" className="star--1" src={star8} />
        </div>
        <div className="overlap-group-5">
          <img alt="" className="star--1" src={star9} />
        </div>
        <div className="overlap-group-4">
          <img alt="" className="star--1" src={star10} />
        </div>
        <p className="text--1 valign-text-middle mulish-normal-boulder-10px">
          {text8}
        </p>
      </div>
      <p className="fsbopk-was-very-sim valign-text-middle roboto-bold-white-14px">
        <span>
          <span className="span">{spanText}</span>
          <span className="span-1">{spanText2}</span>
        </span>
      </p>
    </div>
  );
}

function Reveiw3(props) {
  const {
    afaqAhmedI169573,
    text9,
    rectangle22,
    address,
    address2,
    text10,
    vector19,
    star6,
    star7,
    star8,
    star9,
    star10,
    text11,
    spanText,
    spanText2,
    spanText3,
    spanText4,
  } = props;

  return (
    <div className="reveiw-1 border-1px-boulder">
      <div className="flex-col-1">
        <div className="flex-row-2">
          <div className="frame-6-1">
            <div className="afaq-ahmed-i169573 valign-text-middle roboto-bold-black-14px">
              {afaqAhmedI169573}
            </div>
            <div className="text-9 valign-text-middle mulish-normal-granite-gray-12px">
              {text9}
            </div>
          </div>
          <img alt="" className="rectangle-22-2" src={rectangle22} />
          <div className="overlap-group-1">
            <div className="address-1 valign-text-middle mulish-normal-black-12px">
              {address}
            </div>
            <div className="address-2 valign-text-middle mulish-normal-black-12px">
              {address2}
            </div>
            <p className="text- valign-text-middle mulish-normal-granite-gray-10px">
              {text10}
            </p>
          </div>
        </div>
        <img alt="" className="vector-19-1" src={vector19} />
      </div>
      <div className="flex-row-1">
        <div className="overlap-group-2">
          <img alt="" className="star-6" src={star6} />
        </div>
        <div className="overlap-group-3">
          <img alt="" className="star--1" src={star7} />
        </div>
        <div className="overlap-group-4">
          <img alt="" className="star--1" src={star8} />
        </div>
        <div className="overlap-group-5">
          <img alt="" className="star--1" src={star9} />
        </div>
        <div className="overlap-group-4">
          <img alt="" className="star--1" src={star10} />
        </div>
        <p className="text--1 valign-text-middle mulish-normal-boulder-10px">
          {text11}
        </p>
      </div>
      <p className="fsbopk-was-very-sim valign-text-middle roboto-bold-white-14px">
        <span>
          <span className="span">{spanText}</span>
          <span className="span-1">{spanText2}</span>
          <span className="span">{spanText3}</span>
          <span className="span-1">{spanText4}</span>
        </span>
      </p>
    </div>
  );
}

function HowToVideos(props) {
  const { text16, text18, text19, text20, videoTag2Props } = props;

  return (
    <div className="how-to-videos-1">
      <div className="text-16 valign-text-middle mulish-bold-black-25px">
        {text16}
      </div>
      <VideoTag2>{videoTag2Props.children}</VideoTag2>
      <div className="flex-row-3">
        <div className="rectangle-3"></div>
        <p className="text-18 valign-text-middle roboto-normal-black-15px">
          {text18}
        </p>
      </div>
      <div className="flex-row-6">
        <div className="rectangle-3"></div>
        <p className="text-19 valign-text-middle roboto-normal-black-15px">
          {text19}
        </p>
      </div>
      <div className="flex-row">
        <div className="rectangle-3"></div>
        <p className="text--2 valign-text-middle roboto-normal-black-15px">
          {text20}
        </p>
      </div>
    </div>
  );
}

function VideoTag2(props) {
  const { children } = props;

  return (
    <div className="video-tag-2">
      <div className="rectangle-3"></div>
      <p className="text--2 valign-text-middle roboto-normal-black-15px">
        {children}
      </p>
    </div>
  );
}
const reviewHeaderData = {
  text1: "Houzeo Reviews & Testimonials",
  text2: "Overall Satisfaction Rating",
  star1:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-1@2x.png",
  star2:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-1@2x.png",
  star3:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-1@2x.png",
  star4:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-1@2x.png",
  star5:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-5@2x.png",
  vector17:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-17-1@2x.png",
  address: "500 Reviews",
};

const reveiwData = {
  rectangle62:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606998b6ab2c12180fafb74a/img/rectangle-62@2x.png",
  afaqAhmed: "Afaq Ahmed",
  homeSeller: "Home Seller",
  rectangle22:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-22@2x.png",
  address: "121 McMurray Cir,",
  address2: "Nashville, TN 37211",
  text3: "Listed on Feb 22, 2021",
  vector19:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-19@1x.png",
  star6:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-6@2x.png",
  star7:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star8:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star9:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star10:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  text5: "Original review: Mar 1, 2021",
  spanText: "FSBO.pk",
  spanText2: " ",
  spanText3: (
    <>
      was very simple to use and highly affordable.
      <br />I had the option of choosing the buyer&#x27;s agent commission I
      chose to pay. I was able to list my property right away after uploading my
      photos. Excellent web page.
      <br />
    </>
  ),
};

const reveiw2Data = {
  afaqAhmedI169549: "Kinza wali",
  text6: "Home Seller",
  rectangle22:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-22@2x.png",
  address: "121 McMurray Cir,",
  address2: "Nashville, TN 37211",
  text7: "Listed on Feb 22, 2021",
  vector19:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-19@1x.png",
  star6:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-6@2x.png",
  star7:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star8:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star9:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star10:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  text8: "Original review: Mar 1, 2021",
  spanText: "FSBO.pk",
  spanText2: (
    <>
      {" "}
      was one of our strongest choices to sell our home ever.
      <br />
      Their creative approach to real estate made it possible for us to sell our
      home within days of putting it on the market. Their agents were swift to
      meet their demands and still ready to take the extra mile. The greatest
      part of it was that we had to keep all of our own profits on our offer.
    </>
  ),
};

const reveiw3Data = {
  afaqAhmedI169573: "Badar Khawar",
  text9: "Home Seller",
  rectangle22:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-22@2x.png",
  address: "121 McMurray Cir,",
  address2: "Nashville, TN 37211",
  text10: "Listed on Feb 22, 2021",
  vector19:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-19@1x.png",
  star6:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-6@2x.png",
  star7:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star8:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star9:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  star10:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/star-7@2x.png",
  text11: "Original review: Mar 1, 2021",
  spanText: "FSBO.pk",
  spanText2: (
    <>
      {" "}
      was a great way for me to try to sell my own house.
      <br />
      It was incredibly easy to set up and post pictures of our house. It easily
      led me through the whole process. If you&#x27;re trying to sell your home
      by yourself, <br />I would highly consider using{" "}
    </>
  ),
  spanText3: "FSBO.pk",
  spanText4: (
    <>
      . <br />
    </>
  ),
};

const videoTag2Data = {
  children: "How to submit & Review Offer on Houzeo.com",
};

const howToVideosData = {
  text16: "How To Videos",
  text18: "How to List Your Hone on the MLS For Sale By Owner (FSBO)",
  text19:
    "How to Change Your MLSListing Including Adding Open Houses...All Online!",
  text20: "How to Select a Settlement Agent - Attorney, Escrow, Title",
  videoTag2Props: videoTag2Data,
};

const ReviewsData = {
  x11:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/1-1@2x.png",
  vector15:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-15-1@1x.png",
  rectangle63:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6069d3e5b1a8ab69d61ae44b/img/rectangle-63@2x.png",
  rectangle62:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6069d3e5b1a8ab69d61ae44b/img/rectangle-62@2x.png",
  whatCustomerLike: "What customer like",
  number: "1",
  vector20:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-20@2x.png",
  fastListing: "Fast Listing",
  address: "102 votes",
  vector21:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-20@2x.png",
  number2: "2",
  text12: "Easy To Complete Documents",
  address2: "102 votes",
  number3: "3",
  vector22:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-20@2x.png",
  fastListing2: "Fast Listing",
  address3: "102 votes",
  number4: "4",
  vector23:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-20@2x.png",
  fastListing3: "Fast Listing",
  address4: "102 votes",
  number5: "5",
  vector24:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-20@2x.png",
  fastListing4: "Fast Listing",
  address5: "102 votes",
  text13: "Business Transparency",
  vector25:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-25@2x.png",
  rectangle29:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-29@2x.png",
  text14:
    "Starting October 2020, Houzeo asks all of their customers to rate their experience.",
  vector26:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-25@2x.png",
  text15:
    "To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and analyzes reviews to verify trustworthiness.",
  reviewHeaderProps: reviewHeaderData,
  reveiwProps: reveiwData,
  reveiw2Props: reveiw2Data,
  reveiw2Props2: reveiw3Data,
  howToVideosProps: howToVideosData,
};
