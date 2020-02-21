import React from "react";

function Contact() {
  return (
    <div>
      <div classNameName="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 classNameName="card-title">LinkedIn</h5>
          <p className="card-text">Connect with me.</p>
          <a
            href="https://www.linkedin.com/in/william-hunter-16003137/"
            className="card-link">
            Profile
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">GitHub</h5>
          <p className="card-text">Check out my Repos.</p>
          <a href="https://github.com/wjhunter5315" className="card-link">
            GitHub
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Email</h5>
          <p className="card-text">Send me an Email</p>
          <a href="wjhunter5315@gmail.com" className="card-link">
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;