import React from 'react';
import GlobalStyle, { Button } from '../../globalStyles.js';
import logo from "../../assets/images/logo2.png";

import Button2 from "react-bootstrap/Button";

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

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterTopLine>
          Get in touch
        </FooterTopLine>
        <FooterHeading>
          Let's work together
        </FooterHeading>
        <FooterSubHeading>
        If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books quickly, so the sooner you write, the better it is for both of us.
        </FooterSubHeading>
        {/* <FooterSubText>You can unsubscribe at any time.</FooterSubText> */}
        <Form>
          {/* <FormInput name='email' type='email' placeholder='Your Email' /> */}
          <Button href="cartercote06@gmail.com" fontBig>cartercote06@gmail.com</Button>
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
      <Button2 variant="light">Resume</Button2>
      <SocialMedia>
        <SocialMediaWrap>
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
          <SocialMediaWrap>
            {/* <SocialLogo to='/'>
              <img src={logo} alt="" style={{width: "6%", margin: 0}}/>
              CARTERCOTE.COM
            </SocialLogo> */}
          <WebsiteRights>© 2020 ALL RIGHTS RESERVED. — <a href="/">Designed & Coded by Carter Cote</a></WebsiteRights>
          

          </SocialMediaWrap>
         
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;