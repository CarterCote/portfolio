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
  ProjImgWrapper,
  ProjImg
} from './InfoSection/InfoSection.elements';

function ProjPage({
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    // Header Image //
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <ProjImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ProjImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>

    {/* Introduction Text */}

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

    {/* Branding/Logos */}
    <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <ProjImgWrapper start={start}>
                <ProjImg src={img} alt={alt} />
              </ProjImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
    </InfoSec>

    {/* Wireframing & Prototyping */}
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

    {/* Wireframes */}
    <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <ProjImgWrapper start={start}>
                <ProjImg src={img} alt={alt} />
              </ProjImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
    </InfoSec>

    {/* Final Site */}
    <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
                <h1 style={{fontFamily: "Druk Wide Bold", color: "#000", fontSize: "28px", marginBottom: "12px"}}>Leave a Message!</h1>
                <ProjImgWrapper start={start}>
                    <ProjImg src={img} alt={alt} />
                </ProjImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
    </InfoSec>
  </>
  );

}

export default ProjPage;