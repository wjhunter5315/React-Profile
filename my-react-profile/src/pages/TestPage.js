import React, { useState, useEffect } from "react";
import profileBrick from "../assets/profileBrick.jpg";
import profileGrey from "../assets/profileGrey.jpg";

const colors = {
    Blue: "#0066ff",
    Red: "#ff0000",
    Green: "#33cc33"
}

const profileOption = {
    profileBrick,
    profileGrey
}


function TestPage() {
    const [color, setColor] = useState(colors.Blue)
    const [profileState, setProfileState] = useState(profileOption.profileBrick)
    useEffect(
        () => {
            document.body.style.background = color
        }, [color],
    )

  function handleClick(e) {
    e.preventDefault();
    console.log("Wiggle Test");
    setProfileState(profileOption.profileGrey)
  }

  function handleReset(e) {
      e.preventDefault();
      setProfileState(profileOption.profileBrick)
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
      <h1>{color}</h1>
    </div>
  );
}

export default TestPage;
