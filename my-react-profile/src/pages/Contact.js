import React from "react";

function Contact() {
  return (
    <div id="contactInfoBody">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/300px-LinkedIn_Logo_2013.svg.png"}}>LinkedIn</h5>
          <p className="card-text">Connect with me.</p>
          <a
            href="https://www.linkedin.com/in/william-hunter-16003137/"
            className="card-link"
          >
            Profile
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">GitHub</h5>
          <p className="card-text">Check out my Repos.</p>
          <a href="https://github.com/wjhunter5315" className="card-link">
            GitHub
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Email</h5>
          <p className="card-text">Send me an Email</p>
          <p className="emailText">wjhunter5315@gmail.com</p>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/300px-LinkedIn_Logo_2013.svg.png" className="card-img" alt="linkedInIcon" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
