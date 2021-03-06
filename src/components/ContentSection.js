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

function ContentSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  description2,
  description3,

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
            <ContentInfoColumn>
              <ContentTextWrapper>
                <ContentTopLine lightTopLine={lightTopLine}>{topLine}</ContentTopLine>
                <ContentHeading lightText={lightText}>{headline}</ContentHeading>
                <ContentSubtitle lightTextDesc={lightTextDesc}>{description}</ContentSubtitle>
                <br />
                <ContentSubtitle lightTextDesc={lightTextDesc}>{description2}</ContentSubtitle>
                <br />
                <ContentSubtitle lightTextDesc={lightTextDesc}>{description3}</ContentSubtitle>
                <br />
              </ContentTextWrapper>
            </ContentInfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default ContentSection;