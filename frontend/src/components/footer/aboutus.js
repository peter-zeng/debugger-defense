import React from "react";

const AboutUs = () => {
  return (
    <div className="about-box">
      <div><h2>Get to know us!</h2></div>
      <div className="persons-box">
        <div className="about-person">
          <div>
            <h1>Sarah Peters</h1>
          </div>
          <div className="github-logo"
            onClick={() => window.open("https://github.com/kat-onyx")}>
          </div>
        </div>
        <div className="about-person">
          <div>
            <h1>Skylar Prill</h1>
          </div>
          <div className="github-logo"
            onClick={() => window.open("https://github.com/L412")}>
          </div>
        </div>
        <div className="about-person">
          <div>
            <h1>Peter Yao</h1>
          </div>
          <div className="github-logo"
            onClick={() => window.open("https://github.com/peteryao7")}>
          </div>
        </div>
        <div className="about-person">
          <div>
            <h1>Peter Zeng</h1>
          </div>
          <div className="github-logo"
            onClick={() => window.open("https://github.com/pzengpzeng")}>
          </div>
        </div>
      </div>
      <div className="about-story">
        <p>Interested in exploring both the MERN stack and game production, the four of us set out to create an interactive (and competitive!) browser experience. By harnessing the power of the React/Redux cycle in tandem with JavaScript and HTML’s canvas, we were able to create the typing thriller that you see here today. Enjoy!</p>
      </div>
    </div>
  )
};

export default AboutUs;