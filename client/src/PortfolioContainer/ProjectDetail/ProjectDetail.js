import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import ttangttang from "../../../src/img/Project/ttangttang.png";
import songnumberbook from "../../../src/img/Project/songnumberbook.gif";
import portfolio from "../../../src/img/Project/portfolio.png";
import ttangMid from "../../../src/img/Project/ttangttangMid.png";
import "./ProjectDetail.css";

function ProjectDetail(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="test">
      <ScreenHeading title={"Project Detail"} sebGeading={"My Projects"} />
      <section className="project-detail-section fade-in" id={props.id || ""}>
        <div class="card-container">
          {" "}
          <div class="front card">
            {" "}
            <img src={portfolio} alt="" />
          </div>{" "}
          <div class="back card">
            {" "}
            <p>뒤입니다.</p>{" "}
          </div>{" "}
        </div>
        <div class="card-container">
          {" "}
          <div class="front card">
            {" "}
            <img src={ttangMid} alt="" />
          </div>{" "}
          <div class="back card">
            {" "}
            <p>뒤입니다.</p>{" "}
          </div>{" "}
        </div>
        <div class="card-container">
          {" "}
          <div class="front card">
            {" "}
            <img src={songnumberbook} alt="" />
          </div>{" "}
          <div class="back card">
            {" "}
            <p>뒤입니다.</p>{" "}
          </div>{" "}
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
