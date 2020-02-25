import React, { useState } from "react";

function NavBar() {
    //TRYING TO LISTEN TO URL TO SET THE RIGHT ACTIVE TAB
    
    // const [isActive, setIsActive] = useState({});
    // let aboutTab = false;
    // let contactTab = false;
    // let projectsTab = false;

    // let currentAddress = window.location.pathname.split('/');
    // console.log(currentAddress[1]);

    // let aboutActive = document.getElementById("aboutLink");
    // console.log(aboutActive);

    // function setActiveTab(e) {
    //     if(currentAddress[1] === "projects") {
    //         projectsTab = true;
    //     }
    //     else if(currentAddress[1] === "contact") {
    //         contactTab = true;
    //     }
    //     else {
    //         aboutTab = true;
    //     }
    //     console.log(e);
    // }
    // setActiveTab(() => {

    // }, []);
        
  return (
    <div style={{backgroundColor: "skyblue"}}>
      <ul className="nav nav-tabs">
        <li className="nav-item" id="aboutLink">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li className="nav-item" id="projectLink">
          <a className="nav-link" href="/projects">
            Projects
          </a>
        </li>
        <li className="nav-item" id="contactLink">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
