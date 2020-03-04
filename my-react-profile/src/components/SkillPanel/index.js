import React from "react";

function SkillPanel() {
  return (
    <div className="card" id="skillsCard">
      <div className="card-header" style={{fontSize: 20, textAlign: "center"}}>Languages / Skills</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            HTML
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            CSS
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            JavaScript
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            Node.js
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            Express
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            MySQL / Sequelize
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            MongoDB / Mongoose
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p className="blockquote-footer">
            React.js
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default SkillPanel;