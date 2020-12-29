import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

export const homeObjOne = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Marketing Agency',
    headline: 'Lead Generation Specialist for Online Businesses',
    description:
      'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
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
    topLine: 'Instant Setup',
    headline: 'Extremely quick onboarding process',
    description:
      "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
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
  