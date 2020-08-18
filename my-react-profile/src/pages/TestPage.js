import React, { useState, useEffect, useRef } from "react";
import profileBrick from "../assets/profileBrick.jpg";
import profileGrey from "../assets/profileGrey.jpg";
// import ColorDrops from "../components/ColorDrops";

const colors = {
    Blue: "#0066ff",
    Red: "#ff0000",
    Green: "#33cc33"
}

const profileOption = {
    profileBrick,
    profileGrey
}

const textOptions = {
  Black: {
    width: "fit-content",
    color: "#ffffff",
    backgroundColor: "#000000",
    fontSize: 30
  },
  White: {
    width: "fit-content",
    backgroundColor: "#ffffff",
    fontSize: 30,
    
  },
  Blue: {
    width: "fit-content",
    backgroundColor: "#0066ff",
    fontSize: 30
  }
}

function TestPage() {
  const [color, setColor] = useState(colors.Blue)
  useEffect(
    () => {
      document.body.style.background = color
    }, [color],
  );
  
  const [profileState, setProfileState] = useState(profileOption.profileBrick);
  function handleClick(e) {
    e.preventDefault();
    setProfileState(profileOption.profileGrey)
  };

  function handleReset(e) {
      e.preventDefault();
      setProfileState(profileOption.profileBrick)
  };
  
  const [textColor, setTextColor] = useState(textOptions.Blue);
  function makeBlack(e) {
    e.preventDefault();
    setTextColor(textOptions.Black)
  };
  function makeWhite(e) {
    e.preventDefault();
    setTextColor(textOptions.White)
  };
  function makeBlue(e) {
    e.preventDefault();
    setTextColor(textOptions.Blue)
  };

  function makeChangeOnHover(e) {
    e.preventDefault();
    if (onmouseenter === true) {
      setTextColor(textOptions.White)
    }
    else {
      setTextColor(textOptions.Blue)
    }
  }

  return (
    <div>
      <img
        src={profileState}
        className="align-self-start mr-3"
        id="profileBrick"
        alt="me with brown bricks"
        onMouseOver={handleClick}
        onMouseLeave={handleReset}
      ></img>
      <select value={color} onChange={e => setColor(e.target.value)}>
          {Object.entries(colors).map(([name, value]) => (
              <option key={`color--${name}`} value={value}>
                  {name}
              </option>
          ))}
      </select>
      <h1 style={{width: 'fit-content'}}>{color}</h1>
      <div>
        <h1 
          id="hoverSkill"
          className="hoverText"
          style={textColor}
          onMouseOver={makeWhite}
          onMouseLeave={makeBlue}>HTML</h1>
        <h1
          id="hoverSkill"
          className="hoverText"
          style={textColor}
          onMouseOver={makeWhite}
          onMouseLeave={makeBlue}>CSS</h1>
        <h1
          id="hoverSkill"
          className="hoverText"
          style={textColor}
          onMouseOver={makeWhite}
          onMouseLeave={makeBlue}>JavaScript</h1>
        <h1
          style={textColor}
          onMouseOver={makeChangeOnHover}
          onMouseLeave={makeBlue}>TEST</h1>
      </div>
    </div>
  );
}

export default TestPage;

{/* <div>
  <div className="colorTestSpot">
    <ColorDrops />
  </div>
</div> */}