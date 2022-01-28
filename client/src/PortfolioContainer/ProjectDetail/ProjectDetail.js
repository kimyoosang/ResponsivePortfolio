import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ProjectDetail.css";

function ProjectDetail(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [position, setPosition] = useState(0);
  const onScroll = () => {
    console.log(window.scrollY);
    setPosition(window.scrollY);
  };
  // useEffect(() => {
  //   document.addEventListener("scroll", getCurrentScrollPercentage);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // });

  // function getCurrentScrollPercentage() {
  //   // return (
  //   //   ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100
  //   // );
  //   console.log(
  //     ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100
  //   );
  // }
  // useEffect(() => {
  //   console.log(scrollPercentage);
  // });
  // let Element = document.getElementsByClassName("test");
  // // console.log(element[0].clientHeight);
  // var scrollPercentage =
  //   Element[0].scrollTop === 0
  //     ? 0
  //     : (100 * (Element[0].scrollTop + Element[0].clientHeight)) /
  //       Element[0].scrollHeight;
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let Topel = document.getElementsByClassName("portfolio-container")[0];
      console.log("전체 스크롤 위치", Topel.clientHeight);
      console.log("현재 스크롤 위치", window.pageYOffset);
      console.log("비율", (window.pageYOffset / Topel.clientHeight) * 100);
      //비율을 전체가 아니라 현재 컴포넌트와 맨위까지의 거리를 재고,
    });
  });

  return (
    <div className="test">
      <ScreenHeading title={"Project Detail"} sebGeading={"My Projects"} />
      <section className="project-detail-section fade-in" id={props.id || ""}>
        <div className="hidden-div">
          <div className="display-div">여기는 보여줍시다</div>
          <div className="display-div">여기는 보여줍시다</div>
          <div className="display-div">여기는 보여줍시다</div>
          <div className="none-div"></div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
