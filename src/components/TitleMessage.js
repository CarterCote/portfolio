import React from 'react';
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import GlobalStyle, { Container, Button } from '../globalStyles';
import playground from "../assets/images/playground.png";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
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
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine="CARTER COTE'S DIGITAL PORTFOLIO">CARTER COTE'S DIGITAL PORTFOLIO</TopLine>
                <Heading lightText="Hi, I'm Carter.">👋Hi, I'm Carter. </Heading>
                <Typewriter className="Subtitle"
                  options={{
                    strings: ["Designer", "Problem Solver", "Effectuator"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                  }}
                />
                <Subtitle> </Subtitle>                
                <Link to='/sign-up'>
                  <Button big fontBig primary="VIEW MY WORK">
                    VIEW MY WORK
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={playground} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
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