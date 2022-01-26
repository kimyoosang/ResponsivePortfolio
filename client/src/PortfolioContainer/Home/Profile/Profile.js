import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello,I'M <span className="highlighted-text">Kimyoosang</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  logo={Infinity}
                  steps={[
                    "🎖새로운 가치를 만드는 개발자🎖",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Javascaript & Typescript Dev",
                    1000,
                    "React Dev",
                    1000,
                    "Redux, Hooks",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                새롱 것을 창조하는 개발자라는 직업의 매력을 느껴 열심히 공부하고
                있는 신입 개발자 김유상입니다
              </span>
            </span>
          </div>
          <div className="profile-potions">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="프론트엔드 김유상.pdf" download={"프론트엔드 김유상.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
