import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMagento } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import GlobalStyle, { Container, Button } from '../globalStyles.js';
import Progress from "./Progress";
import logo from "../../assets/images/logo2.png";
import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 30px auto 20px 0;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100vw;
  ${Container}

`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  ${'' /* display: flex; */}
  align-items: right;
  list-style: none;
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0d1f68;
  }
`;

const NavItem = styled.li`
  height: 50px;
  
  border-bottom: 2px solid transparent;
  &:hover {
    ${'' /* border-bottom: 1px solid #4b59f7; */}
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export default function Navbar() {
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
      <IconContext.Provider value={{ color: '#fff' }}>
      
        <Nav>
        
          <NavbarContainer>

            <NavLogo to='/' onClick={closeMobileMenu}>
              <img src={logo} alt="" style={{width: "6%"}}/>
              
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} class="flex-column">
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/designs' onClick={closeMobileMenu}>
                  Designs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact' onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

    </>
  );
}