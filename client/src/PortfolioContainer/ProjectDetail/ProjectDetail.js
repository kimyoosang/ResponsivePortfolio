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

  const projectList = [
    {
      title: "반응형 웹 포트폴리오",
      img: portfolio,
      skill: "React | Javascript | Node JS | Axios |CSS | Heroku ",
      subtitle: "개인 프로젝트",
      description: [
        "리액트와 자바스크립트를 활용하여 만든 반응형 웹 포트폴리오 입니다",
        "랜덩링, 스크롤 효과, 애니메이션을 위한 효과를 각각 모듈화 하였습니다",
        "Node js로 간단하게 백엔드를 구축하여 gmail로 메일을 보내는 기능을 추가했습니다",
      ],
    },
    {
      title: "땅땅마켓",
      img: ttangMid,
      subtitle: "4인 프로젝트",
      skill:
        "React | Javascript | Typescript | Redux | React Hooks | Styled-component | Socket.io | react-responsive | AWS",
      description: [
        "위치기반 실시간 경매형 중고거래 서비스입니다",
        "구글API를 이용하여 위치기반 상품들을 리스팅합니다",
        "Soket.io를 이용하여 구매자와 판매자가 채팅을 할 수 있습니다",
        "Oauth를 이용한 카카오 소셜 로그인",
        "스크롤 값을 이용한 랜딩페이지 애니메이션 구현",
        "검색 및 검색 결과 페이지 무한 스크롤 구현",
      ],
    },
    {
      title: "노래번호부",
      img: songnumberbook,
      subtitle: "4인 프로젝트",
      skill: "React | Javascript | React Hooks | CSS | Axios",
      description: [
        "TJ노래방 노래목록 중에서 애창곡을 리스트로 저장하는 서비스",
        "검색 및 페이징 기능 구현",
        "헤더,마이페이지,검색페이지 구현",
      ],
    },
  ];

  return (
    <div className="test">
      <ScreenHeading title={"Project Detail"} sebGeading={"My Projects"} />
      <section className="project-detail-section fade-in" id={props.id || ""}>
        {projectList.map((project, idx) => (
          <div class="card-container">
            <div class="front card">
              <img src={project.img} alt="" />
            </div>
            <div class="back card">
              <div className="title">{project.title}</div>
              <div className="sub-title">{project.subtitle}</div>
              <div className="skill">{project.skill}</div>
              <div className="description">
                {project.description.map((el, idx) => (
                  <div>
                    - {el}
                    <br></br>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectDetail;
