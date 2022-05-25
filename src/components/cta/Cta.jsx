import React from "react";
import "./cta.css";
const Cta = () => {
  return (
    <div className="gpt3__possibility-banner section__margin">
      <div classname="gpt3__banner-heading">
        <p>Request Early Access to Get Started</p>
        <h1 className="gpt3__banner-text">
          Register today & start exploring the endless possiblities.
        </h1>
      </div>
      <button type="submit" id="button" classsName="gpt3__banner-button">
        Get Started
      </button>
    </div>
  );
};

export default Cta;
