import React, { useState, useEffect } from 'react';
import GlobalStyle, { Container, Button } from '../../globalStyles.js';
import logo from "../../assets/images/logo2.png";

import Button2 from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

import {
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterTopLine,
  FooterHeading,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import {
  InfoSec,
  InfoRow,
  ContentInfoColumn,
  ContentTextWrapper,
  ContentTopLine,
  ContentHeading,
  ContentSubtitle,
  ImgWrapper,
  Img
} from '../InfoSection/InfoSection.elements';

function Footer() {

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
    <InfoSec lightBg>
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
          {/* <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems> */}
          {/* <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          {/* <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems> */}
          {/* <FooterLinkItems>
            <FooterLinkTitle>Social</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
      </FooterLinksContainer>


      <SocialMedia>
        {/* <SocialMediaWrap>

          </SocialMediaWrap> */}
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

    </InfoSec>
    </>
  );
}

export default Footer;