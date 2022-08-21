import React from 'react';
import { Wrapper } from '../styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import Logo from './logo';
import { motion } from 'framer-motion';
import { header } from '../utils/Animations';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleNav, toogleNavSelect } from '../redux/mainSlice';

const Navbar: React.FC = () => {
  const toggleNav = useSelector(toogleNavSelect);
  const dispatch = useDispatch();
  const toggle = () => dispatch(setToggleNav(!toggleNav));

  return (
    <Nav initial="hidden" whileInView="show">
      <Wrapper>
        <Navitems>
          <Logo />
          <Icon>
            {toggleNav ? (
              <MdClose cursor={'pointer'} opacity={'0.4'} size={'25px'} onClick={toggle} />
            ) : (
              <GiHamburgerMenu cursor={'pointer'} opacity={'0.4'} size={'25px'} onClick={toggle} />
            )}
          </Icon>
          <NavMenu
            variants={header}
            transition={{ duration: 0.7 }}
            className={toggleNav ? 'open' : ''}>
            <Button>
              <a href="#about">About</a>
            </Button>
            <Button>
              <a href="#services">Services</a>
            </Button>
            <Button>
              <a href="#testimonials">Testimonial</a>
            </Button>
            <Button>
              <a href="#blog">Blog</a>
            </Button>
            <Button>
              <a href="#contacts">Contacts</a>
            </Button>
          </NavMenu>
        </Navitems>
      </Wrapper>
    </Nav>
  );
};

const Icon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`;

const Nav = styled(motion.nav)`
  box-shadow: var(--shadow-box);
  @media (max-width: 768px) {
    position: relative;
  }
`;

const Navitems = styled(motion.div)`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavMenu = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 1.5rem;
  margin-left: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    width: 100%;
    top: 90px;
    padding: 1.5rem 0;
    left: -100%;
    transition: all 0.3s ease;
    &.open {
      background-color: #03030366;
      left: 0;
      transition: all 0.3s ease;
      z-index: 1;
      a {
        color: var(--white);
      }
    }
  }
`;

const Button = styled.li`
  font-size: 1rem;
  cursor: pointer;
  a {
    color: #989898;
    transition: 0.2s ease-in-out;
    &:active {
      transition: 0.2s ease-in-out;
      transform: scale(0.95);
    }
    &:hover {
      transition: 0.2s ease-in-out;
      color: var(--title);
    }
    @media (max-width: 768px) {
      color: var(--white);
    }
  }
`;

export default Navbar;
