import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* <div className="colz">
            <div className="colz-icon">
              <a href="https://www.naver.com">
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
          </div> */}
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
                    "πμλ‘μ΄ κ°μΉλ₯Ό λ§λλ κ°λ°μπ",
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
                μλ‘± κ²μ μ°½μ‘°νλ κ°λ°μλΌλ μ§μμ λ§€λ ₯μ λκ»΄ μ΄μ¬ν κ³΅λΆνκ³ 
                μλ μ μ κ°λ°μ κΉμ μμλλ€
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="νλ‘ νΈμλ κΉμ μ.pdf" download={"νλ‘ νΈμλ κΉμ μ.pdf"}>
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
