import React from "react";

function Contact() {
  return (
    <div id="contactInfoBody">
      <div className="card mb-3" style={{ maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/300px-LinkedIn_Logo_2013.svg.png" 
                className="card-img" 
                alt="linkedInIcon" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <p className="card-text">Connect with me.</p>
            <a href="https://www.linkedin.com/in/william-hunter-16003137/"
              className="card-link">
              Profile
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/GitHub_logo_2013_padded.svg/192px-GitHub_logo_2013_padded.svg.png" 
                className="card-img" 
                alt="gitHubIcon" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <p className="card-text">Check out my Repos.</p>
            <a href="https://github.com/wjhunter5315"
              className="card-link">
              GitHub
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/150px-Gmail_Icon.svg.png" 
                className="card-img" 
                alt="gMailIcon" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <p className="card-text">Send me an Email.</p>
            <p className="emailText">wjhunter5315@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
// https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/GitHub_logo_2013_padded.svg/192px-GitHub_logo_2013_padded.svg.png