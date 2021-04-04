import React from "react";

import "./homesearchpanel.css";

export function Panel3(props) {
  const {
    text1,
    text2,
    text3,
    text4,
    image,
    text5,
    label,
    iconOutlinedOtherOtherBoxProps,
    iconOutlinedOtherOtherBox2Props,
  } = Panel3Data;

  return (
    <div className="panel3 animate-enter smart-layers-pointers ">
      <div className="left smart-layers-pointers ">
        <IconOutlinedOtherOtherBox
          overlapGroup1={iconOutlinedOtherOtherBoxProps.overlapGroup1}
          vector={iconOutlinedOtherOtherBoxProps.vector}
          vector2={iconOutlinedOtherOtherBoxProps.vector2}
        />
        <div className="text-1 mulish-normal-black-16px">{text1}</div>
        <p className="text-2 mulish-normal-rolling-stone-16px">{text2}</p>
      </div>
      <div className="overlap-group">
        <div className="left-1 smart-layers-pointers ">
          <IconOutlinedOtherOtherBox
            overlapGroup1={iconOutlinedOtherOtherBox2Props.overlapGroup1}
            vector={iconOutlinedOtherOtherBox2Props.vector}
            vector2={iconOutlinedOtherOtherBox2Props.vector2}
          />
          <div className="text-3 mulish-normal-black-16px">{text3}</div>
          <p className="text-4 mulish-normal-rolling-stone-16px">{text4}</p>
        </div>
        <img alt="" className="image" src={image} />
      </div>
      <h1 className="text-5 mulish-bold-cape-cod-32px">{text5}</h1>
      <div className="partner-button smart-layers-pointers ">
        <div className="label valign-text-middle mulish-bold-white-14px">
          {label}
        </div>
      </div>
    </div>
  );
}

function IconOutlinedOtherOtherBox(props) {
  const { overlapGroup1, vector, vector2 } = props;

  return (
    <div className="icon-outlined-other-other-box">
      <div
        className="overlap-group1"
        style={{ backgroundImage: `url(${overlapGroup1})` }}
      >
        <img alt="" className="vector-1" src={vector} />
        <img alt="" className="vector" src={vector2} />
      </div>
    </div>
  );
}
const iconOutlinedOtherOtherBoxData = {
  overlapGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-13@2x.png",
  vector:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-14@2x.png",
  vector2:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-15@2x.png",
};

const iconOutlinedOtherOtherBox2Data = {
  overlapGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-13@2x.png",
  vector:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-14@2x.png",
  vector2:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/vector-15@2x.png",
};

const Panel3Data = {
  text1: "Attract More Business",
  text2:
    "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.",
  text3: "Process Settlements Seamlessly",
  text4:
    "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.",
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/604a2033eecdd47017b01a54/releases/604a2073862f1d3cd3adbea6/img/image-1@2x.png",
  text5: "Secure & Exceptional Client Experience for settlement Agent",
  label: "Partner With Us",
  iconOutlinedOtherOtherBoxProps: iconOutlinedOtherOtherBoxData,
  iconOutlinedOtherOtherBox2Props: iconOutlinedOtherOtherBox2Data,
};
