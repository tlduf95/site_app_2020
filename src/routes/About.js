import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        안녕하세요.
      </span>
      <span>영화 소개 사이트입니다.</span>
    </div>
  );
}

export default About;
