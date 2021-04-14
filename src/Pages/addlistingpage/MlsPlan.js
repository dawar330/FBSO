import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { MenuItem, Select, TextField } from "@material-ui/core";
import "../PricingPage/style.css";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function MlsPlan() {
  const [Images, setImages] = useState([]);
  function onChangeHandler(event) {
    setImages(event.target.files);
  }
  return (
    <div className="pricing-page">
      <div className="text-3 roboto-bold-black-28px">
        Bring maximum exposure to YOUR&nbsp;&nbsp;Listing and Sell Fast.
      </div>
      <div className="text-4 roboto-regular-normal-black-24px">
        Plans designed with YOU in mind
      </div>
      <div className="flex-row-2">
        <div className="overlap-group12 border-class-2">
          <div className="surname roboto-regular-normal-white-20px">
            Best Value
          </div>
        </div>
        <div className="overlap-group4 border-1px-twine">
          <div className="most-popular roboto-regular-normal-white-20px">
            Most Popular
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="rectangle-49 border-class-3"></div>
        <img
          className="vector-32"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60510ccf7ab711553918bd10/img/vector-32@2x.png"
        />
        <img
          className="vector-33"
          src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60510ccf7ab711553918bd10/img/vector-33@2x.png"
        />
        <p className="address-1 roboto-regular-normal-black-14px">
          Most Advanced FSBO Package
          <br />
          PKR 21000/-+No hidden costs at closing Select Plan Everything’s
          included! <br />
          Max photos, virtual tours, pricing assistance, and contract review.
          Unlimited term and changes
        </p>
        <p className="text-5 roboto-regular-normal-black-14px">
          Pkr 6,000/- +No hidden costs at closing Plan Max photos, virtual 3D/2D
          tours, 3 month listing. pre filled disclosures. All changes free.
          Ideal for the savvy home-seller
        </p>
        <p className="text-6 roboto-regular-normal-black-14px">
          <span className="span">No hidden costs at closing </span>
          <span className="span1">
            Select Plan <br />
          </span>
          <span className="span">
            6 photos, 3 month listing.
            <br /> All changes included
            <br /> Rs.00/- Best for land and lots
            <br />
          </span>
        </p>
        <div className="basic-fsbo-package roboto-bold-black-20px">
          Basic FSBO Package
        </div>
        <div className="text-7 roboto-bold-black-20px">
          Stress Free FSBO Package
        </div>
        <div className="color roboto-bold-black-20px">GOLD</div>
        <div className="free roboto-bold-black-18px">FREE+</div>
        <div className="color-1 roboto-bold-black-18px">SILVER</div>
        <div className="bronze-1 roboto-bold-black-18px">BRONZE</div>
        <div className="bronze-1 roboto-bold-black-18px">BRONZE</div>
        <div className="text-8 roboto-bold-black-18px">
          Most Advanced FSBO Package
        </div>
      </div>
      <div className="flex-row-1">
        <div className="overlap-group-1 border-1px-bdazzled-blue">
          <div className="select-plan roboto-regular-normal-white-15px">
            Select Plan
          </div>
        </div>
        <div className="overlap-group-2 border-1px-forest-green">
          <div className="select-plan roboto-regular-normal-white-15px">
            Select Plan
          </div>
        </div>
        <div className="overlap-group-3 border-1px-twine">
          <div className="select-plan roboto-regular-normal-white-15px">
            Select Plan
          </div>
        </div>
      </div>
      <div className="frame-39">
        <div className="overlap-group15">
          <div className="color-3 roboto-bold-aztec-gold-20px">GOLD</div>
          <div className="color-2">SILVER</div>
          <div className="bronze">BRONZE</div>
          <img
            className="vector-50"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-50@1x.png"
          />
          <img
            className="vector-52"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-50@1x.png"
          />
          <img
            className="vector-51"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-50@1x.png"
          />
          <img
            className="vector-53"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-53@1x.png"
          />
          <img
            className="vector-54"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-56"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-55"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-59"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-60"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-62"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-64"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-61"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-63"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-65"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-57"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <img
            className="vector-58"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6051e0930e31382bcfe468a0/img/vector-54@1x.png"
          />
          <div className="text-9 roboto-bold-black-18px">
            Photos &amp; Virtual Tours
          </div>
          <div className="cancellation roboto-bold-black-18px">
            Cancellation
          </div>
          <div className="listing-term roboto-bold-black-18px">
            Listing Term
          </div>
          <div className="name-1 roboto-bold-black-18px">
            Max Listing Exposure
          </div>
          <div className="seller-disclosures roboto-bold-black-18px">
            Seller Disclosures
          </div>
          <div className="surname-1 roboto-bold-black-18px">
            Price Assistance
          </div>
          <div className="text-10 roboto-bold-black-18px">
            SOCIAL MEDIA ADVERTIZING
          </div>
          <div className="escrow-agent roboto-bold-black-18px">
            Escrow Agent
          </div>
          <div className="real-estate-forms roboto-bold-black-18px">
            Real Estate Forms
          </div>
          <div className="pro-photography roboto-bold-black-18px">
            Pro Photography
          </div>
          <div className="contract-review roboto-bold-black-18px">
            Contract Review
          </div>
          <div className="text-11 valign-text-bottom roboto-bold-black-18px">
            SOCIAL MEDIA SHARING TOOLS
          </div>
          <div className="text-12 valign-text-bottom roboto-bold-black-18px">
            Open House Data on FSBO.pk
          </div>
          <p className="text-13 roboto-regular-normal-black-14px">
            3D or 2D Virtual Tour
            <br />
            Included in all Plans.
          </p>
          <div className="text-14 roboto-regular-normal-black-14px">
            Free Cancellation Anytime
          </div>
          <p className="text-15 roboto-regular-normal-black-14px">
            Option to Renew Before Expiry Included
          </p>
          <p className="text-16 roboto-regular-normal-black-14px">
            Gold properties get ranked above Silver and Silver ranked above
            Basic listing
          </p>
          <p className="text-17 roboto-regular-normal-black-14px">
            Federal &amp; State Disclosures Provided Upon Request.
          </p>
          <p className="text-18 roboto-regular-normal-black-14px">
            <span className="span">Broker Price Assistance</span>
            <span className="span1-1">3</span>
            <span className="span"> – Rs.3000+ </span>
          </p>
          <p className="text-19 roboto-regular-normal-black-14px">
            Real Estate social media marketing is the key asset of FSBO.pk
            <br />
            We will promote your listing on all our social media accounts <br />
            – 15000+
          </p>
          <p className="text-20 roboto-regular-normal-black-14px">
            <span className="span">
              Select and Interact with your Escrow Agent
            </span>
            <span className="span1-1">3</span>
          </p>
          <p className="text-21 roboto-regular-normal-black-14px">
            <span className="span">All Required Forms and Contracts</span>
            <span className="span1-1">3</span>
            <span className="span"> – Rs.3000+</span>
          </p>
          <p className="text-22 roboto-regular-normal-black-14px">
            Pro Photography &amp; Video Tour3 – $15000+
          </p>
          <p className="text-23 roboto-regular-normal-black-14px">
            <span className="span">Review contracts</span>
            <span className="span1-1">3</span>
            <span className="span">
              {" "}
              – <br />
              offers, counteroffers, etc. <br />
              with a broker – $15000+ <br />
            </span>
          </p>
          <p className="text-24 roboto-regular-normal-black-14px">
            We provide social media sharing tools that easily let you share your
            own listing across popular social media sites, or for searchers to
            share their findings with others.
            <br />
            Spreading the word has never been more simple!
          </p>
          <p className="text-25 roboto-regular-normal-black-14px">
            Our open house system will display a noticeable &#34;Open House&#34;
            flag in the search results and on your listing page one week prior
            to the start date, and remove itself once the end date has
            finished.for silver and gold <br />
            This is a great way to get more interested buyers into your home.
          </p>
          <div className="address-2 roboto-regular-normal-black-14px">
            6 Photos
          </div>
          <div className="date-1 roboto-regular-normal-black-14px">
            3 Months
          </div>
          <div className="low roboto-regular-normal-black-14px">LOW</div>
          <div className="optional-5 roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="address roboto-regular-normal-black-14px">
            24 Photos
          </div>
          <div className="date-2 roboto-regular-normal-black-14px">
            6 Months
          </div>
          <div className="medium roboto-regular-normal-black-14px">Medium</div>
          <div className="optional-4 roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="optional roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="optional-3 roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="optional-6 roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="optional-7 roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="date roboto-regular-normal-black-14px">6 Months</div>
          <div className="name roboto-regular-normal-black-14px">
            Max Photos
          </div>
          <div className="unlimited roboto-regular-normal-black-14px">
            Unlimited
          </div>
          <div className="high roboto-regular-normal-black-14px">High</div>
          <div className="optional-2 roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="optional-1 roboto-regular-normal-black-14px">
            Optional
          </div>
          <div className="unlimited-1 roboto-regular-normal-black-14px">
            Unlimited
          </div>
          <img
            className="vector-6"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-66@2x.png"
          />
          <img
            className="vector-"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-66@2x.png"
          />
          <img
            className="vector-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-66@2x.png"
          />
          <img
            className="vector-7-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-66@2x.png"
          />
          <img
            className="vector-7-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-66@2x.png"
          />
          <img
            className="vector-7-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-66@2x.png"
          />
          <img
            className="vector--1"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-66@2x.png"
          />
          <img
            className="vector-6"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-67@2x.png"
          />
          <img
            className="vector-"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-67@2x.png"
          />
          <img
            className="vector-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-67@2x.png"
          />
          <img
            className="vector-7-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-67@2x.png"
          />
          <img
            className="vector-7-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-67@2x.png"
          />
          <img
            className="vector-7-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-67@2x.png"
          />
          <img
            className="vector--1"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-67@2x.png"
          />
          <img
            className="vector-68"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-82"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-86"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-88"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-84"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-87"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-89"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-90"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-91"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-92"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-81"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-83"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <img
            className="vector-85"
            src="https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/6064bb1318fecf772830f863/img/vector-68@2x.png"
          />
          <div className="rectangle-65 border-class-4"></div>
        </div>
      </div>
      <div className="flex-row">
        <div className="overlap-group-1 border-1px-bdazzled-blue">
          <div className="select-plan roboto-regular-normal-white-15px">
            Select Plan
          </div>
        </div>
        <div className="overlap-group-2 border-1px-forest-green">
          <div className="select-plan roboto-regular-normal-white-15px">
            Select Plan
          </div>
        </div>
        <div className="overlap-group-3 border-1px-twine">
          <div className="select-plan roboto-regular-normal-white-15px">
            Select Plan
          </div>
        </div>
      </div>
    </div>
  );
}
