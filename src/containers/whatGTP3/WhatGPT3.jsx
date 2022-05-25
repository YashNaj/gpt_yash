import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";
const whatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatisgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          id = "gpt3__features-container__feature-headertext"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibliites are beyond your imagination.
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledge"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Education"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
      </div>
    </div>
  );
};
export default whatGPT3;
