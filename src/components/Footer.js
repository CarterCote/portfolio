import React, { useState, useEffect } from 'react';
import GlobalStyle, { Container, Button } from '../globalStyles.js';
// import logo from "../../assets/images/logo2.png";
import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Button2 from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

import {
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #0d1f68;
  padding: 2rem 4rem 0rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: CENTER;
  align-items: left;
`;

const FooterSec = styled.div`
  color: #fff;
  padding: 4rem 0 2rem 0;
  background: #0d1f68;
`;

const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: left;
  margin-bottom: 24px;
  padding: 16px;
  color: #fff;
`;

const FooterTopLine = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 16px;
  text-align: left;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;


const FooterHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;

  text-align: left;
  line-height: 1.1;
  font-family: "Druk Wide Bold";
  font-weight: 600;
  color: #fff;
  ${'' /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#0d1f68')}; */}
`;

const FooterSubHeading = styled.p`
  font-family: 'Circular STD Book', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 22px;
  max-width: 1000px;
  color: #fff;
  ${'' /* color: #202020; */}
`;

const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: #202020;

`;

const Form = styled.form`
  display: flex;
  justify-content: left;
  align-items: center;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: left;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  width: 98%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
  
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-bottom: 16px;


`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export default function Footer() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <FooterSec>
    <Container>

    <FooterContainer>
      <FooterSubscription>
        <FooterTopLine>
        </FooterTopLine>
        <FooterHeading>
        👋 I’m available for freelance work, please contact me <a style={{fontFamily: "Druk Wide Bold", color: "#42a1f5"}}href="mailto:cartercote06@gmail.com">here</a>.
        </FooterHeading>
        <FooterSubHeading>
        If you have a website or mobile app idea in mind, or if you're interested in my work, feel free to contact me. 
        Please be patient with inquiries! I am currently in the middle of my academic semester.
        </FooterSubHeading>
        {/* <FooterSubText>You can unsubscribe at any time.</FooterSubText> */}
        <Form onClick={handleClick} click={click}>
          {/* <FormInput name='email' type='email' placeholder='Your Email' /> */}
          <a href="https://drive.google.com/file/d/19xrtoznvBS4fh_YFwkGl7E092uZ7UKos/view?usp=sharing" target="_blank">
          <Button2 variant="warning" style={{padding: "10px 40px"}}>RESUME</Button2>
          </a>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        </FooterLinksWrapper>
      </FooterLinksContainer>


      <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to='/'>
              <img src={logo} alt="" style={{width: "6%", margin: 0}}/>
              CARTERCOTE.COM
            </SocialLogo> */}
            <WebsiteRights>© 2020 ALL RIGHTS RESERVED. — <a href="/">Designed & Coded by Carter Cote</a></WebsiteRights>
            <SocialIcons>
            <SocialIconLink href='//www.linkedin.com/in/carter-cote-960a55179/' target='_blank' aria-label='Linkedin'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='//www.instagram.com/carter.cote' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCo-DJjksl3U0kizae-nDERw'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='//t.me/cartercote' target='_blank' aria-label='LinkedIn'>
              <FaTelegram />
            </SocialIconLink>
          </SocialIcons>

        </SocialMediaWrap>
         
      </SocialMedia>
    </FooterContainer>
    </Container>

    </FooterSec>
    </>
  );
}