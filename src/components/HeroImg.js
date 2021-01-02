import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { Container, Button } from '../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,

  ContentInfoColumn,
  ContentTextWrapper,
  ContentTopLine,
  ContentHeading,
  ContentSubtitle,
  ImgWrapper,
  Img
} from './InfoSection/InfoSection.elements';

function HeroImg({
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
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default HeroImg;