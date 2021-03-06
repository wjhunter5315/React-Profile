import React from "react";
import FLlogoS from "../assets/FLlogoS.png";
import FLlogoText from "../assets/FLlogoText.png";
import cheqmateLogo from "../assets/cheqmateLogo.svg";

function Projects() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne" style={{textAlign: "center", height: "8rem"}}>
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              id="pwText"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{marginTop: "6%"}}
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
        <div className="card-header" id="headingTwo" style={{textAlign: "center"}}>
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              id="flText"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <img src={FLlogoS} style={{height: "5rem", marginRight: "2rem"}} alt=""></img>
              <img src={FLlogoText} style={{height: "3rem"}} alt=""></img>
              
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
            create invoices, send bills, and manage projcts. TRY IT (imcomplete):{" "}
          </div>
          <form action="https://feelancer.herokuapp.com/" target="_blank">
            <input type="submit" id="feelancerLinkBtn" value="Feelancer" />
          </form>
        </div>
      </div>
      <div className="card" style={{marginBottom: '10%'}}>
        <div className="card-header" id="headingThree" style={{textAlign: "center", height: "8rem"}}>
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              id="cheqText"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <img src={cheqmateLogo} style={{width: "14rem", marginTop: "11%"}} alt=""></img>
              
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