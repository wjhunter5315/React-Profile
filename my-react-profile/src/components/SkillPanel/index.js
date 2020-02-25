import React from "react";

function SkillPanel() {
  return (
    <div className="card" id="skillsCard">
      <div className="card-header">Languages / Skills</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            HTML
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            CSS
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            JavaScript
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            Node.js
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            Express
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            MySQL / Sequelize
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            MongoDB / Mongoose
          </footer>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            React.js
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default SkillPanel;