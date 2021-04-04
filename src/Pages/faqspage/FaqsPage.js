import React from "react";
import CustomizedAccordions from "../../Components/CustomizedAccordions";
import "./style.css";

export default FaqsPage;

function FaqsPage() {
  const {
    text1,
    text2,
    shape,
    text15,
    text16,
    subscribeToOurNew,
    submit,
    overlapGroup1,
    path,
    text17,
    text18,
    text19,
    text20,
    text21,
    text22,
    text23,
    text24,
    text25,
    text26,
    text27,
    text28,
    text29,
    text30,
    text31,
    text32,
    path2,
    path3,
    x004Instagram,
    shape2,
    oval,
    navBarProps,
    forSaleByOwnerFAQProps,
    fAQsPanelProps,
    forSaleByOwnerFAQ2Props,
    fAQsPanel2Props,
    forSaleByOwnerFAQ3Props,
    fAQsPanel3Props,
  } = FAQsData;

  const Faqs = {
    questions: [
      "Q: The result is of such an episodic kind. It's hard to measure when anyone might do it once a decade. How can you scale where a client will turn up every 10 years?",
      "Q: I have a tendency against B2B, so is there a chance to help new real estate brokers on board your platform?",
      "Q: How much do you owe the customer?",
      "Q: What's to deter rivals from seeing how well this performs and then replicating it?",
    ],
    answers: [
      "It's safe to say that the average home buyer buys every 13 years, but there are owners and home sellers who sell every two or three years.",
      "It gives real estate brokers a little bit of money. However, we agree that users should be aware of the disclosures and know where they are in the chain rather than relying on the agent.",
      "On the vendor side, we provide free basic products that provide the majority of the utilities provided by rivals. We charge for the right to close the remaining four stages. The initial investment is $399, with a performance fee of $699.",
      "The agent site is where they make money. They would be jeopardising their cash cow if they entered the consumer market.",
    ],
  };

  return (
    <div className="faqspage">
      <div className="frequently-asked-questions">
        <h1 className="text-1 valign-text-middle mulish-bold-black-35px">
          {text1}
        </h1>
      </div>
      <div className="weve-compiled-a-questions-below">
        <div className="text-2 valign-text-middle mulish-regular-normal-black-25px">
          {text2}
        </div>
      </div>
      <ForSaleByOwnerFAQ
        rectangle37={forSaleByOwnerFAQProps.rectangle37}
        text3={forSaleByOwnerFAQProps.text3}
      />

      <div className="fa-qs-panel">
        <CustomizedAccordions Faqs={Faqs} />
      </div>
    </div>
  );
}

function ForSaleByOwnerFAQ(props) {
  const { rectangle37, text3, className } = props;

  return (
    <div className={`for-sale-by-owner-faq ${className || ""}`}>
      <div className="overlap-group-1 border-1px-quill-gray">
        <img alt="" className="rectangle-37" src={rectangle37} />
        <div className="text- valign-text-middle mulish-bold-black-25px">
          {text3}
        </div>
      </div>
    </div>
  );
}

const group1Data = {
  labelI54443495: "(888) 978-9526",
  spanText: "9am to 6pm",
  spanText2: " ",
  spanText3: "EST, (Mon To Sat)",
};

const navBarData = {
  labelI1534791473: "Start Free Listing",
  links:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/links@1x.png",
  rectangle34:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-34@2x.png",
  group1Props: group1Data,
};

const forSaleByOwnerFAQData = {
  rectangle37:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-37@2x.png",
  text3: "For Sale By Owner (FSBO) FAQ",
};

const fAQsPanelData = {
  vector28:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-28@1x.png",
  vector29:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-28@1x.png",
  text6: "Should I sell my home myself?",
  text7: "What are The Most Important Factors in selling my home?",
  text8: "How do I get started with FBSO?",
};

const forSaleByOwnerFAQ2Data = {
  rectangle37:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-37@2x.png",
  text3: "For Sale By Owner (FSBO) FAQ",
};

const fAQsPanel2Data = {
  vector28:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-28@1x.png",
  vector29:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-28@1x.png",
  text6: "Should I sell my home myself?",
  text7: "What are The Most Important Factors in selling my home?",
  text8: "How do I get started with FBSO?",
};

const forSaleByOwnerFAQ3Data = {
  rectangle37:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/rectangle-37@2x.png",
  text3: "For Sale By Owner (FSBO) FAQ",
};

const fAQsPanel3Data = {
  vector28:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-28@1x.png",
  vector29:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-28@1x.png",
  text6: "Should I sell my home myself?",
  text7: "What are The Most Important Factors in selling my home?",
  text8: "How do I get started with FBSO?",
};

const FAQsData = {
  text1: "FSBO Frequently Asked Questions (FAQ)",
  text2: "We’ve compiled answers to your most asked questions below",
  shape:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60510ccf7ab711553918bd10/img/shape@2x.png",
  text15: "Ready to get started?",
  text16: "Get started",
  subscribeToOurNew: (
    <>
      Subscribe to our
      <br />
      newsletter
    </>
  ),
  submit:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/60510ccf7ab711553918bd10/img/rectangle@2x.png",
  overlapGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/path-2@2x.png",
  path:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/shape@2x.png",
  text17: "Email address",
  text18: "Services",
  text19: "Email Marketing",
  text20: "Campaigns",
  text21: "Branding",
  text22: "Offline",
  text23: "About",
  text24: "Our Story",
  text25: "Benefits",
  text26: "Team",
  text27: "Careers",
  text28: "Help",
  text29: "FAQs",
  text30: "Contact Us",
  text31: "Terms & Conditions",
  text32: "Privacy Policy",
  path2:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/path-22@2x.png",
  path3:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/path-5@2x.png",
  x004Instagram:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/shape-10@2x.png",
  shape2:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/shape-2@2x.png",
  oval:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/oval@2x.png",
  navBarProps: navBarData,
  forSaleByOwnerFAQProps: forSaleByOwnerFAQData,
  fAQsPanelProps: fAQsPanelData,
  forSaleByOwnerFAQ2Props: forSaleByOwnerFAQ2Data,
  fAQsPanel2Props: fAQsPanel2Data,
  forSaleByOwnerFAQ3Props: forSaleByOwnerFAQ3Data,
  fAQsPanel3Props: fAQsPanel3Data,
};
