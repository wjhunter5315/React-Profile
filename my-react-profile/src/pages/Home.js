import React, { useState } from "react";
import SkillPanel from "../components/SkillPanel";
import EduPanel from "../components/EduPanel";
import profileBrick from "../assets/profileBrick.jpg";
import profileGrey from "../assets/profileGrey.jpg";

const profileOptions = {
  profileBrick,
  profileGrey
}

function HomePage() {
  const [profileState, setProfileState] = useState(profileOptions.profileBrick);

  function altPic(e) {
    e.preventDefault();
    setProfileState(profileOptions.profileGrey)
  }

  function resetPic(e) {
      e.preventDefault();
      setProfileState(profileOptions.profileBrick)
  }

  return (
    <div>
      <div className="media">
        <img
          src={profileState}
          className="align-self-start mr-3"
          id="profileBrick"
          alt="me with brown bricks"
          onMouseOver={altPic}
          onMouseLeave={resetPic}
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

//TRYING TO ADD SHADOW EFFECT - PLACE INSIDE COMPONENT
//   const shadowBox = document.querySelector('.media');
//   const text = shadowBox.querySelector('p');
//   const walk = 100;

//   function shadow(e) {
//     const { offsetWidth: width, offsetHeight: height } = shadowBox;
//     let { offsetX: x, offsetY: y } = e;
//     console.log(this, e.target);
//     if (this !== e.target) {
//       x = x + e.target.offsetLeft;
//       y = y + e.target.offsetTop;
//     }
//     console.log(x, y);

//     const xWalk = Math.round((x / width * walk) - (walk / 2));
//     const yWalk = Math.round((y / height * walk) - (walk / 2));
//     console.log(xWalk, yWalk);

//     text.style.textShadow = `${xWalk}px ${yWalk}px 0 grey`;
//   }
//   shadowBox.addEventListener('mousemove', shadow);

  // const [picEffect, setPicEffect] = useState();
  //   useEffect(() => {
  //     setPicEffect({})
  //   })
