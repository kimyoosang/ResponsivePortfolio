import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import shape from "../../../src/img/Project/shape-bg.png";
import ttangttang from "../../../src/img/Project/ttangttang.png";
import songnumberbook from "../../../src/img/Project/songnumberbook.gif";
import portfolio from "../../../src/img/Project/portfolio.png";

import "./Project.css";

function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // let idx = 0;

  // const handleSelect = () => {
  //   // console.log(e.page.index);
  //   idx++;
  //   console.log(idx);
  //   if (idx > 3) {
  //     idx = 0;
  //   }
  //   return;
  // };

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: false,
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
      <ScreenHeading title={"Projects"} subHeading={"Introduce My Projects"} />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="pwl-carousel"
              id="testimonial-carousel"
              // onChanged={handleSelect}
              {...options}
            >
              {/* 포트폴리오*/}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="item-title">반응형 웹 포트폴리오</div>
                  <div className="test-info">
                    <img src={portfolio} alt="no internet connection" />
                  </div>
                  {/* <div className="test-text">
                    <a href="https://www.naver.com" rel="noopener noreferrer">
                      <i class="fa fa-github"></i>
                    </a>
                  </div> */}
                </div>
              </div>

              {/* 땅땅마켓*/}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="item-title">
                    위치기반 실시간 경매형 중고거래 서비스
                  </div>
                  <div className="test-info">
                    <img src={ttangttang} alt="no internet connection" />
                  </div>
                  {/* <div className="test-text">
                    <div>여기다가 링크넣기</div>
                  </div> */}
                </div>
              </div>

              {/* 노래번호부*/}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="item-title">
                    노래방 애창곡 리스트 저장 서비스
                  </div>
                  <div className="test-info">
                    <img src={songnumberbook} alt="no internet connection" />
                  </div>
                  {/* <div className="test-text">
                    <div>여기다가 링크넣기</div>
                  </div> */}
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
