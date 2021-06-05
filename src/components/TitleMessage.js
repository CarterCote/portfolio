import React from 'react';
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import GlobalStyle, { Container } from '../globalStyles';
import playground from "../assets/images/playground.png";
import '../App.css';
import Button from "react-bootstrap/Button";
import Static from "../components/video/static2.mp4";
 

import {
  HubSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  HubTopLine,
  HubHeading,
  HubSubtitle,
  ImgWrapper,
  Img
} from './InfoSection/InfoSection.elements';

function TitleMessage({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <HubSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFix: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1"
            }}
          >
            <source src={Static} type="video/mp4" />
          </video>
            <InfoColumn>
              <TextWrapper>
                <HubTopLine lightTopLine="CARTER COTE'S DIGITAL PORTFOLIO">CARTER COTE'S DIGITAL PORTFOLIO</HubTopLine>
                <HubHeading lightText="Hi, I'm Carter.">👋Hi, I'm Carter. </HubHeading>
                <h1 style={{textAlign: "center"}}>
                  <Typewriter className="sign-up"
                    options={{
                      strings: ["Digital Creator", "Creative Developer", "Problem Solver", "Effectuator"],
                      autoStart: true,
                      loop: true,
                      delay: 50
                    }}
                  />
                </h1>

                <HubSubtitle> </HubSubtitle>                
                <a href="#cardsection" class="d-flex justify-content-center">
                  <Button variant="light" style={{padding: "15px 40px"}}>VIEW MY WORK</Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            {/* <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={playground} alt={alt} />
              </ImgWrapper>
            </InfoColumn> */}
          </InfoRow>
        </Container>
      </HubSec>
    </>
  );
}

export default TitleMessage;

// import React from "react";
// import Typewriter from "typewriter-effect";
// import styled from "styled-components";

// const MyTitleMessage = styled.h1`
//   position: absolute;
//   width: 100%;
//   top: 22rem;
//   z-index: 1;
//   margin-top: -125px;
//   text-align: left;
//   strong {
//     font-size: 1.25em;
//   }
//   div {
//     color: ${props => props.theme.textColor};
//     text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
//     font-weight: 100;
//     letter-spacing: 7px;
//     .main {
//       font-size: 50px;
//     }
//     .sub {
//       font-size: 27px;
//       letter-spacing: 2px;
//     }
//   }
// `;

// const TitleMessage = () => (
//   <MyTitleMessage>
//     <div className="titleMessage">
//       <div className="heading">
//         <div className="main text-left mb-3">
//         👋Hi, I'm
//           <br />
//           <span>
//             <strong>Carter Cote</strong>
//           </span>
//         </div>
//         <div className="sub">
//           <Typewriter
//             options={{
//               strings: ["Designer", "Problem Solver", "Effectuator"],
//               autoStart: true,
//               loop: true,
//               delay: 50
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   </MyTitleMessage>
// );

// export default TitleMessage;