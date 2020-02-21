import React from "react";
import profilepic from "../assets/profilepic.jpg";
console.log(profilepic);

function HomePage() {
  return (
    <div className="media">
      <img
        src={profilepic}
        className="align-self-start mr-3"
        id="profileBball"
        alt="me at a Dodgers game"
      />
      <div className="media-body">
        <h5 className="mt-0">About Me</h5>
        <p className="aboutText">
          Full Stack Web Developer from the UCLA Extension Program. I have a
          background in writing (BA in English) and brewing coupled with the
          technical skills of Javascript, CSS, and the latest version of React.
          With an environmentally conscious mind and a competitive side, my goal
          is to help technology spread through all levels of business.{" "}
        </p>
      </div>
    </div>
  );
}

export default HomePage;