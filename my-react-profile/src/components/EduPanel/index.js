import React from "react";

function EduPanel() {
  return (
    <div className="card" id="eduCard">
      <div className="card-header" style={{fontSize: 20, textAlign: "center"}}>Education</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            Full-Stack Web Development
          </p>
          <p className="blockquote-footer">
            UCLA Extension Program
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0" style={{marginTop: "10%"}}>
          <p>
            B.A. English
          </p>
          <p className="blockquote-footer">
            Birmingham-Southern College
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default EduPanel;
