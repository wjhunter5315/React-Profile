import React from "react";

function HomePage() {
  return (
    <div class="media">
      <img
        src="../../assets/profilepic.jpg"
        className="align-self-start mr-3"
        alt="me at a Dodgers game"
      />
      <div class="media-body">
        <h5 class="mt-0">About Me</h5>
        <p>
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