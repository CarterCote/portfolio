import styled from 'styled-components';

export const HubSec = styled.div`
  color: #fff;
  padding: 120px 0 80px 0;
  background: transparent;
  ${'' /* background: ${({ lightBg }) => (lightBg ? '#fff' : '#0d1f68')}; */}
  align-items: center;
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 4rem 0 2rem 0;
  background: #060606;
  ${'' /* background: ${({ lightBg }) => (lightBg ? '#060606' : '#0d1f68')}; */}
`;


export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  ${'' /* align-items: center; */}
  justify-content: center;

  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ContentInfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 60%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ContentTextWrapper = styled.div`
  max-width: 700px;
  padding-top: 0;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const ProjImgWrapper = styled.div`
  max-width: 1555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;


export const HubTopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  text-align: center;

  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const ContentTopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  text-align: left;
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;

export const ProjImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 700px;
`;

export const HubHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-family: "Druk Wide Bold";
  text-align: center;

  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const ContentHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-family: "Druk Wide Bold";
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;


export const Heading = styled.h1`
  text-align: center;
  font-family: "Druk Wide Bold";

  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const HubSubtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 20px;
  text-align: center;

  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ContentSubtitle = styled.p`
  max-width: 800px;
  
  text-align: left;
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 28px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;


// export const Subtitle = styled.p`
//   max-width: 440px;
//   margin-bottom: 35px;
//   font-size: 18px;
//   line-height: 24px;
//   color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
// `;