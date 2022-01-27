import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import education from "../../assets/Resume/education.svg";
import work_history from "../../assets/Resume/work-history.svg";
import programming_skills from "../../assets/Resume/programming-skills.svg";
import projects from "../../assets/Resume/projects.svg";
import interests from "../../assets/Resume/interests.svg";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ReusmeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            props(
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            )
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subheading ? props.subheading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: work_history },
    { label: "Programming Skills", logoSrc: programming_skills },
    { label: "Prohects", logoSrc: projects },
    { label: "interests", logoSrc: interests },
  ];

  const programmingSkillsDatails = [
    { skill: "Javascript", ratingPercentage: 90 },
    { skill: "Typescript", ratingPercentage: 85 },
    { skill: "React", ratingPercentage: 95 },
    { skill: "React Hooks", ratingPercentage: 85 },
    { skill: "Redux", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "포트폴리오",
      duration: { fromDate: "2022-01", toDate: "2022-01" },
      description: "반응형 웹 포트폴리오",
      subHeading: "개인 프로젝트",
    },
    {
      title: "땅땅마켓",
      duration: { fromDate: "2021-04", toDate: "2021-05" },
      description: "위치기반 실시간 경매형 중고거래 서비스",
      subHeading: "4인 프로젝트",
    },
    {
      title: "노래번호부",
      duration: { fromDate: "2021-03", toDate: "2021-03" },
      description: "노래방 애창곡을 리스트에 저장할 수 있는 서비스",
      subHeading: "4인 프로젝트",
    },
  ];

  const resumeDetials = [
    <div className="resume-screen-container" key={education}>
      <ReusmeHeading
        heading={"코드스테이츠 부트캠프"}
        subHeading={"Full Stack Software Engineering"}
        fromDate={"2020-09"}
        foDate={"2021-05"}
      />
      <ReusmeHeading
        heading={"동양미래대학교"}
        subHeading={"로봇자동화공학과"}
        fromDate={"2015-03"}
        foDate={"2021-02"}
      />
    </div>,
    <div className="resunme-screen-container" key="work-experience">
      <ReusmeHeading
        heading={"위멤버"}
        subHeading={"프론트엔드 개발자"}
        fromDate={"2021-09"}
        foDate={"2021-12"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          개인과 인플루언서를 기반으로 한 이커머스 서비스
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          React | Javascript | Typescript | Redux | React hooks | Axios | JWT |
          Oauth | REST API | HTML | CSS | Styled-component
        </span>
        <br />
        <span className="resume-description-text">
          - Oauth를 활용한 Kakao, Facebook, Google 소셜로그인 구현
        </span>
        <span className="resume-description-text">
          - Axios, JWT를 사용해 자사 회원가입,로그인 기능 구현
        </span>
        <br />
        <span className="resume-description-text">
          - 관리자(Admin) 페이지 전체 UI 및 CRUD 기능 구현
        </span>
        <br />
        <span className="resume-description-text">
          마이페이지 전체 기능 구현
          <br />- 보유쿠폰
          <br /> - 내가 찜한 모임
          <br /> - 추천내역
          <br /> - 결제 및 예약내역
          <br /> - 구매 후기
          <br /> - Q&A
          <br /> - FAQ
          <br /> - 공지사항
          <br /> - 개인정보수정
          <br />
        </span>
        <br />
        <span className="resume-description-text">
          - 이벤트 상품 리스팅, 디테일 페이지가 포함된 이벤트 페이지 구현
        </span>
        <br />
        <span className="resume-description-text">
          - 상품등록하는 리더 페이지 반응형 위한 기존 코드 리팩토링
        </span>
        <br />
        <span className="resume-description-text">
          - JWT + Axios 모듈화하여 서비스 전체에서 간단히 사용할 수 있도록 개선
        </span>
        <br />
        <span className="resume-description-text">
          - 디자이너와 Figma를 통한 협업
        </span>
        <br />
      </div>
    </div>,
    <div
      className="resunme-screen-container programming-skills-continer"
      key="programming-skills"
    >
      {programmingSkillsDatails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: skill.ratingPercentage + "%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetail, index) => (
        <ReusmeHeading
          key={index}
          heading={projectDetail.title}
          subHeading={projectDetail.subHeading}
          description={projectDetail.description}
          fromDate={projectDetail.fromDate}
          toDate={projectDetail.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ReusmeHeading heading="Reading" description="책 읽는 것을 좋아합니다" />
      <ReusmeHeading heading="Music" description="음악 듣는 것을 좋아합니다" />
      <ReusmeHeading heading="Coffe" description="커피를 사랑합니다" />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          src={bullet.logoSrc}
          alt="oops...no internet connection"
          className="bullet-logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetials.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
