import React from "react";
import "./Main.css";

function Main() {
  return (
    <div id="home">
      <div className="main-row">
        <div className="main-left">
          <div data-aos="fade-right" className="redbox">
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              className="main-title"
            >
              GÖKSU PLASTİK
            </h1>
          </div>
        </div>
        {/* <div className="main-right"></div> */}
      </div>
      <div className="arrow1"></div>
      <div className="arrow2"></div>
      <div className="arrow3"></div>
    </div>
  );
}

export default Main;
