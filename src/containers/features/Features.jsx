import React from "react";

const Features = () => {
  return (
    <div className="section_padding">
      <div className="gpt3__features-page">
        <div className="gpt3__features-page__header">
          <h1 className = "gradient__text"> The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.</h1>
          <p>Request Early Access.</p>
        </div>
        <div className="gpt3__features-page__header_features-list">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </div>
  );
};

export default Features;
