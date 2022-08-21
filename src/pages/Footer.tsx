import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../styles';
import Logo from '../components/logo';
import Icons from '../components/Icons';
import { BiRightArrow } from 'react-icons/bi';
import { MdAlternateEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { motion } from 'framer-motion';
import { about, home } from '../utils/Animations';

const Footer: React.FC = () => {
  return (
    <FooterWrap>
      <Wrapper>
        <GridFooter id="contacts" initial="hidden" whileInView="show" viewport={{ amount: 0.2 }}>
          <Grid>
            <FirstSection variants={about} transition={{ delay: 0.2 }}>
              <Logo />
              <p>Join our newsletter to get updated with our Offers & Discounts.</p>
              <Input>
                <input type="text" placeholder="Enter your email" />
                <span>
                  <BiRightArrow />
                </span>
              </Input>
            </FirstSection>
            <FooterSection variants={about} transition={{ delay: 0.4 }}>
              <h2>Quick Links</h2>
              <ul>
                <li>About</li>
                <li>Testimonial</li>
                <li>Contact Us</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </FooterSection>
            <FooterSection variants={about} transition={{ delay: 0.6 }}>
              <h2>Industires</h2>
              <ul>
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>Website Design</li>
                <li>Mobile App Design</li>
                <li>Digital Marketing</li>
                <li>Graphic Design</li>
                <li>IOS App Development</li>
              </ul>
            </FooterSection>
            <FooterSectionBottom variants={about} transition={{ delay: 0.8 }}>
              <h2>Get in Touch</h2>
              <ul>
                <li>
                  <MdAlternateEmail size={'25px'} />
                  <div>
                    Email
                    <small>michaelohara@gmail.com</small>
                  </div>
                </li>
                <li>
                  <FiPhoneCall size={'25px'} />
                  <div>
                    Phone
                    <small>+71 849-580-60</small>
                  </div>
                </li>
                <li>
                  <GoLocation size={'25px'} />
                  <div>
                    Location
                    <small>742 Evergreen Terrace, 780501 </small>
                  </div>
                </li>
              </ul>
            </FooterSectionBottom>
          </Grid>
          <FooterBottom variants={home} transition={{ duration: 0.7 }}>
            <span></span>
            <div>
              <p>Copyright © 2022. All Rights Reserved.</p>
              <Icons />
            </div>
          </FooterBottom>
        </GridFooter>
      </Wrapper>
    </FooterWrap>
  );
};

const Input = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  width: 220px;

  input {
    padding: 0.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
    border: none;
    outline: none;
    width: 100%;
    &::placeholder {
      font-size: 0.8rem;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    background-color: var(--title);
    border-radius: 0 0.5rem 0.5rem 0;
    &:hover {
      transition: 0.2s ease-in-out;
      opacity: 0.5;
    }
  }
`;

const FooterWrap = styled.div`
  background-color: #313131;
`;

const GridFooter = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10rem 0;
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const FooterSectionBottom = styled(motion.div)`
  h2 {
    margin-bottom: 1rem;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  svg {
    margin-right: 0.5rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  small {
    color: var(--text);
    font-weight: 400;
  }
`;

const FooterBottom = styled(motion.div)`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  p {
    font-weight: 400;
    color: var(--text);
  }
  span {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: var(--white);
    opacity: 0.2;
    margin-bottom: 1rem;
  }
`;

const Grid = styled.div`
  background-color: #313131;
  color: var(--white);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FirstSection = styled(motion.div)`
  h2,
  svg {
    color: var(--white);
  }
  p {
    margin: 1rem 0;
    font-weight: 400;
    color: var(--text);
  }
`;

const FooterSection = styled(motion.div)`
  h2,
  li,
  p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    color: var(--text);
    font-weight: 400;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      transition: 0.2s ease-in-out;
      opacity: 0.5;
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

export default Footer;
