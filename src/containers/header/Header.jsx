import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
const Ai = () => {
  return (
    <div className="gpt3__header-ai_photo">
      <img src={ai} alt="AI" id="ai_img" className= 'Ai'></img>
    </div>
  );
};
const HeaderLarge = () => {
  return (
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let's build something amazing with GPT-3 Open-AI
      </h1>
      <div className="gpt3__header-desctription">
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
      </div>
      <div className="gpt3__header_sign">
        <input
          className="gpt3__email-input"
          type="email"
          id="email"
          placeholder="Enter your email address"
        ></input>
        <button type="submit">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="people" id="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
  );
};
const MobileHeader = () => {
  return (
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let's build something amazing with <br></br> GPT-3 Open-AI
      </h1>
      
      <div className="gpt3__header-desctription">
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
      </div> 
      <div className="gpt3__header_sign">
        <input
          className="gpt3__email-input"
          type="email"
          id="email"
          placeholder="Your Email Address"
        ></input>
        <button type="submit" id='submit'>Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="people" id="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
        <div>
        <Ai/>
      </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="gpt3__header-section_padding" id="home">
      <div className="gpt3__header_container">
        <div className="Header">
          <HeaderLarge />
        </div>
        <div className="mobile__header" id="mobile">
          <MobileHeader />
        </div>
        <div className='ai_large '>
          <Ai />
        </div>
      </div>
    </div>
  );
};

export default Header;
