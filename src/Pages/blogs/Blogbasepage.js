import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

export default function Blogbasepage(props) {
  const {
    howToVideos,
    text6,
    text5,
    text4,
    recentBlogs,
    rectangle54,
    text1,
    rectangle55,
    text2,
    rectangle56,
    text3,
    text8,
    text9,
    address,
    rectangle542,
    rectangle60,
    rectangle61,
    text10,
    text11,
    text12,
    readMore,
    readMore2,
    readMore3,
    text13,
    overlapGroup1,
    text14,
    vector96,
    vector98,
    vector99,
    vector97,
    videoTag2Props,
  } = BlogsbasepageData;
  const history = useHistory();
  function routeChange(path) {
    history.push(path);
  }

  return (
    <div className="blogsbasepage">
      <div className="blogflex-col">
        <div className="how-to-videos valign-text-middle mulish-bold-black-25px">
          {howToVideos}
        </div>
        <VideoTag2>{videoTag2Props.children}</VideoTag2>
        <div className="blogflex-row">
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
          <p className="text-6 valign-text-middle roboto-regular-normal-black-15px">
            {text6}
          </p>
        </div>
        <div className="blogflex-row-1">
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
          <p className="text-5 valign-text-middle roboto-regular-normal-black-15px">
            {text5}
          </p>
        </div>
        <div className="blogflex-row-3">
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
          <p className="text- valign-text-middle roboto-regular-normal-black-15px">
            {text4}
          </p>
        </div>
        <div className="recent-blogs valign-text-middle mulish-bold-black-25px">
          {recentBlogs}
        </div>
        <div className="blogflex-row-2">
          <img className="rectangle-5" src={rectangle54} />
          <p className="text-1 valign-text-middle mulish-regular-normal-black-14px">
            {text1}
          </p>
        </div>
      </div>
      <div className="blogflex-row-4">
        <img className="rectangle-5" src={rectangle55} />
        <p className="text-2 valign-text-middle mulish-regular-normal-black-14px">
          {text2}
        </p>
      </div>
      <img className="rectangle-56" src={rectangle56} />
      <p className="text-3 valign-text-middle mulish-regular-normal-black-14px">
        {text3}
      </p>
      <h1 className="text-8 valign-text-middle roboto-bold-black-32px">
        {text8}
      </h1>
      <div className="text-9 valign-text-middle mulish-bold-black-32px">
        {text9}
      </div>
      <div className="address valign-text-middle roboto-bold-black-32px">
        {address}
      </div>
      <img className="rectangle-54" src={rectangle542} />
      <img className="rectangle-60" src={rectangle60} />
      <img className="rectangle-61" src={rectangle61} />
      <div className="text-10 valign-text-middle roboto-regular-normal-black-20px">
        {text10}
      </div>
      <div className="text-11 valign-text-middle roboto-regular-normal-black-20px">
        {text11}
      </div>
      <div className="text-12 valign-text-middle roboto-regular-normal-black-20px">
        {text12}
      </div>

      <div
        className="read-more valign-text-middle roboto-bold-lochmara-20px"
        onClick={() => {
          routeChange("/blogs/1");
        }}
      >
        {readMore}
      </div>
      <div
        className="read-more-1 valign-text-middle roboto-bold-lochmara-20px"
        onClick={() => {
          routeChange("/blogs/2");
        }}
      >
        {readMore2}
      </div>
      <div
        className="read-more-2 valign-text-middle roboto-bold-lochmara-20px"
        onClick={() => {
          routeChange("/blogs/3");
        }}
      >
        {readMore3}
      </div>
      <div className="text-13 valign-text-middle roboto-bold-black-28px">
        {text13}
      </div>
      <div className="register-button">
        <div
          className="overlap-group1"
          style={{ backgroundImage: `url(${overlapGroup1})` }}
        >
          <div className="text-14 valign-text-middle ibmplexsans-regular-normal-white-26px">
            {text14}
          </div>
        </div>
      </div>

      <img className="vector-96" src={vector96} />
      <img className="vector-98" src={vector98} />
      <img className="vector-99" src={vector99} />

      <img className="vector-97" src={vector97} />
    </div>
  );
}

function VideoTag2(props) {
  const { children } = props;

  return (
    <div className="video-tag-3">
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
      <p className="text- valign-text-middle roboto-regular-normal-black-15px">
        {children}
      </p>
    </div>
  );
}
const videoTag2Data = {
  children: "How to submit & Review Offer on Houzeo.com",
};

const BlogsbasepageData = {
  howToVideos: "How To Videos",
  text6: "How to List Your Hone on the MLS For Sale By Owner (FSBO)",
  text5:
    "How to Change Your MLSListing Including Adding Open Houses...All Online!",
  text4: "How to Select a Settlement Agent - Attorney, Escrow, Title",
  recentBlogs: "Recent Blogs",
  rectangle54:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/rectangle-54@2x.png",
  text1: "Top 9 Best Real Estate Websites You Should Know in 2021",
  rectangle55:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/rectangle-55@2x.png",
  text2:
    "Homie Real Estate: Reviews, Alternatives, and Everything You Need to Know",
  rectangle56:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/rectangle-56@2x.png",
  text3:
    "Opendoor Reviews: Benefits, Drawbacks, and How to Sell a Home Yourself with 0% Commission.",
  text8: "Find Homes For Sale By Owner",
  text9: "How to Buy a House Without a Realtor?",
  address: "6 Reasons Why Houzeo is the Best Flat Fee MLS Service",
  rectangle542:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/rectangle-54-1@1x.png",
  rectangle60:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/rectangle-60@1x.png",
  rectangle61:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606a0890ce4631aa80d447ad/img/rectangle-39@1x.png",
  text10:
    "It's understandable that most home sellers opt for the FSBO alternative in order to save money and raise their benefit. Typically, these are properties that are being owned by their owners without the assistance of a real estate agent. This means the vendors would not have to pay the regular 6% fee..............",
  text11:
    "It’s obvious. You want to get a good deal on a home you like. So, if you're looking to save money, doing it yourself can be a great option. But that doesn't mean you won't have to put in a lot of time and effort to find your dream home. Home sales are not all about knocking on a door and handing over cash easily to buy a property. Real estate agents had to ..............",
  text12: (
    <>
      You&#x27;ve also heard that people are selling their properties without
      the assistance of a real estate agent.
      <br />
      Why is this so? The NAR study estimates that FSBO homes are now being sold
      even more quickly than houses supported..............
    </>
  ),
  readMore: "Read More",
  readMore2: "Read More",
  readMore3: "Read More",
  text13:
    "Did you know that the Gold Strategy of Houzeo offers appropriate state and federal sellers?",
  overlapGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606a0890ce4631aa80d447ad/img/register@1x.png",
  text14: "Start Your Free HOUZEO Listing Now!.",
  vector96:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/vector-96@1x.png",
  vector98:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/vector-98@1x.png",
  vector99:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/vector-98@1x.png",
  vector97:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/606ab17494f057546092f7d6/img/vector-97@1x.png",
  videoTag2Props: videoTag2Data,
};
