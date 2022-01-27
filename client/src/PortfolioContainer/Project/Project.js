import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
// import lady from "../../../src/img/Testimonial/lady.png";
// import mike from "../../../src/img/Testimonial/mike.png";
// import man from "../../../src/img/Testimonial/man.png";
import shape from "../../../src/img/Project/shape-bg.png";
import ttangttang from "../../../src/img/Project/ttangttang.png";
import songnumberbook from "../../../src/img/Project/songnumberbook.gif";
import portfolio from "../../../src/img/Project/portfolio.png";

function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="pwl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              {/* 1명 시작*/}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="test-info">
                    <img src={ttangttang} alt="no internet connection" />
                  </div>
                  <div className="test-text">여기다가 설명</div>
                </div>
              </div>
              {/* 1명 끝 */}
              {/* 1명 시작*/}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="test-info">
                    <img src={ttangttang} alt="no internet connection" />
                  </div>
                  <div className="test-text">여기다가 설명</div>
                </div>
              </div>
              {/* 1명 끝 */}
              {/* 1명 시작*/}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="test-info">
                    <img src={ttangttang} alt="no internet connection" />
                  </div>
                  <div className="test-text">여기다가 설명</div>
                </div>
              </div>
              {/* 1명 끝 */}
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div> */}
    </div>
  );
}

export default Project;
