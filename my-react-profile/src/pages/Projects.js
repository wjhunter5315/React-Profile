import React from "react";

function Projects() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Password Generator
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            A password generator made with Javascript that allows users to
            select the character types and the length for a unique password.
            TRY IT:
          </div>
          <form action="https://wjhunter5315.github.io/Password-Gen/" target="_blank">
            <input type="submit" id="passwordLinkBtn" value="Password Generator" />
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Feelancer
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            Web Application designed to give freelance workers a system to
            create invoices, send bills, and manage projcts. TRY IT:{" "}
          </div>
          <form action="https://feelancer.herokuapp.com/" target="_blank">
            <input type="submit" id="feelancerLinkBtn" value="Feelancer" />
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              CheqMate
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            Web Application built to replace the problematic table-side tablets
            used in major restaurant chains. TRY IT:{" "}
          </div>
          <form action="https://cheqmate.herokuapp.com/" target="_blank">
            <input type="submit" id="cheqmateLinkBtn" value="Feelancer" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Projects;