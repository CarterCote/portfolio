import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

export const homeObjOne = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'DESIGNS',
    headline: "Design Portfolio",
    description:
      "In addition to my passion for engineering, I'm also passionate about designing & building thoughtful graphics and websites with the combination of business, marketing, and UX/UI design in order to problem-solve or to express my creativity. Here are some of my notable works.",
    buttonLabel: 'Get Started',
    imgStart: '',
    img: require('../../assets/images/001.jpg'),
    alt: 'Credit Card',
    start: ''
  };
  
  export const homeObjTwo = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'WHO AM I?',
    headline: "Hi, I'm Carter Cote.",
    description:
      "I'm a first-year student at the Georgia Institute of Technology, majoring in Computer Science and minoring in Industrial Design. I love coding and design, and I'm always chipping away at a side project or sketching an idea in my notebook.",
    buttonLabel: 'Learn More',
    imgStart: '',
    img: require('../../assets/images/002.jpg'),
    alt: 'Vault',
    start: ''
  };
  
  export const homeObjThree = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sarah Jeni',
    headline:
      'Ultra helped me increase my revenue by over 3X in less than 3 months!',
    description:
      "Their team is wonderful! I can't believe I didn't start working with them earlier.",
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img: require('../../assets/images/003.jpg'),
    alt: 'Vault',
    start: 'true'
  };
  
  export const homeObjFour = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Secure Database',
    headline: 'All your data is stored on our secure server',
    description:
      'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: require('../../assets/images/003.jpg'),
    alt: 'Vault',
    start: 'true'
  };

  export const infoObjOne = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Secure Database',
    headline: 'All your data is stored on our secure server',
    description:
      'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: require('../../assets/images/003.jpg'),
    alt: 'Vault',
    start: 'true'
  };

  export const infoObjTwo = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'MORE ABOUT ME',
    headline: 'What am I good at? What am I working on?',
    description:
      "I am a full-stack web developer and digital creator, who specializes in UX/UI design, graphic design, and product design. I’m very passionate about utilizing my entrepreneurial spirit in the digital realm to create a more equitable future. I like problem-solving in a creative, value-oriented way. I never leave things half-done, and I obsess over the details. I don’t try to change THE world, but I constantly strive to change A world..",
    description2: "I have years of experience in developing digital projects that yield innovative solutions to problems within the community. Currently, I am looking for internships that will allow me to build upon my previous experience and to gain further background in computer science.",
    description3: "I’m always looking for opportunities to develop a viable, feasible, and desirable product. My most notable project is a career readiness web platform at my alma mater high school, one that provides 27 pages of career exploration tools & alumni networking opportunities. By creating this platform, I had hoped to expand cultural capital to students that lack the resources necessary to prepare for college.",
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: require('../../assets/images/003.jpg'),
    alt: 'Vault',
    start: 'true'
  };

  const MyTitleMessage = styled.h1`
    position: absolute;
    width: 100%;
    top: 22rem;
    z-index: 1;
    margin-top: -125px;
    text-align: left;
    strong {
      font-size: 1.25em;
    }
    div {
      color: ${props => props.theme.textColor};
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
      font-weight: 100;
      letter-spacing: 7px;
      .main {
        font-size: 50px;
      }
      .sub {
        font-size: 27px;
        letter-spacing: 2px;
      }
    }
  `;
  
  export const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-left mb-3">
          👋Hi, I'm
            <br />
            <span>
              <strong>Carter Cote</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Designer", "Problem Solver", "Effectuator"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
  