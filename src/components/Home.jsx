import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
// images
import slide_one from "../assests/pc/startup-593327_1280.jpg";
import slide_two from "../assests/pc/office-620822_1280.jpg";
import slide_three from "../assests/pc/workstation-336369_1280.jpg";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 2000
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
      <ArtishWrapper>
        <p className="name">Vikil Lakkavatri</p>
        <p className="designation">
          <span>Web developer...</span>
        </p>
      </ArtishWrapper>
    </div>
  );
}

const ArtishWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  .name {
    font-size: 44px;
    font-family: "Great Vibes", cursive;
    margin-bottom: 0px;
  }
`;
