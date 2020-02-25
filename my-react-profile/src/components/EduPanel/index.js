import React from "react";

function EduPanel() {
  return (
    <div className="card" id="eduCard">
      <div className="card-header">Education</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            Full-Stack Web Development
          </p>
          <footer className="blockquote-footer">
            UCLA Extension Program
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0" style={{marginTop: "10%"}}>
          <p>
            B.A. English
          </p>
          <footer className="blockquote-footer">
            Birmingham-Southern College
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default EduPanel;
