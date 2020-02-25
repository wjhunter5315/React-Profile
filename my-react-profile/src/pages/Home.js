import React from "react";
import profileBrick from "../assets/profileBrick.jpg";
import SkillPanel from "../components/SkillPanel";
import EduPanel from "../components/EduPanel";
console.log(profileBrick);

function HomePage() {
  return (
    <div>
      <div className="media">
        <img
          src={profileBrick}
          className="align-self-start mr-3"
          id="profileBrick"
          alt="me at a Dodgers game"
        />
        <div className="media-body">
          <h5 className="mt-0">About Me</h5>
          <p className="aboutText">
            Full Stack Web Developer from the UCLA Extension Program. I have a
            background in writing (BA in English) and brewing coupled with the
            technical skills of Javascript, CSS, and the latest version of
            React. With an environmentally conscious mind and a competitive
            side, my goal is to help technology spread through all levels of
            business.{" "}
          </p>
        </div>
      </div>
      <div className="flex-container">
        <SkillPanel />
        <EduPanel />
      </div>
    </div>
  );
}

export default HomePage;
