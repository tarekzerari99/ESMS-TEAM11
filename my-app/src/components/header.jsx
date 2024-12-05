import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">   
              <a className="page-scroll" id="reg-button" href="#registration">
                 <button>JOIN THE RACE!</button> 
              </a>{" "}
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
