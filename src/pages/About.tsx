import React from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import { Wrapper } from '../styles';
import { BsLightbulb } from 'react-icons/bs';
import { TbReportSearch } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { motion } from 'framer-motion';
import { about } from '../utils/Animations';

const About: React.FC = () => {
  return (
    <AboutWrap>
      <Wrapper>
        <Grid id="about" initial="hidden" whileInView="show" viewport={{ amount: 0.2 }}>
          <AboutSection variants={about} transition={{ duration: 0.7 }}>
            <Flex>
              <h2>About</h2>
              <Logo />
            </Flex>
            <span></span>
            <p>
              We Believe that everyone deserves to have a website or online store. Innovation and
              simplicity make us happy. Our mission is to help people achieve what they have
              passionate about it. We are excited to simplify SEO for everyone through software,
              education, or cimmunity.
            </p>
          </AboutSection>
          <BoxSection variants={about} transition={{ duration: 0.7 }}>
            <Box>
              <Icon>
                <BsLightbulb size={'35px'} />
              </Icon>
              <h3>Innovative Ideas</h3>
            </Box>
            <Box>
              <Icon>
                <TbReportSearch size={'35px'} />
              </Icon>
              <h3>Planning</h3>
            </Box>
            <Box>
              <Icon>
                <FiPhoneCall size={'35px'} />
              </Icon>
              <h3>Communication</h3>
            </Box>
            <Box>
              <Icon>
                <MdOutlineContactSupport size={'35px'} />
              </Icon>
              <h3>Support 24/7</h3>
            </Box>
          </BoxSection>
        </Grid>
      </Wrapper>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  background-color: var(--cart);
`;

const Grid = styled(motion.div)`
  background-color: var(--cart);
  padding: 10rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
  @media (max-width: 1270px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BoxSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  display: flex;
  box-shadow: var(--shadow-box);
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 160px;
  background-color: #fff;
  h3 {
    color: var(--title);
  }
  @media (max-width: 1270px) {
    align-items: center;
  }
`;

const Icon = styled.div`
  display: flex;
  background-color: var(--title);
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 0.5rem;
  svg {
    color: var(--white);
  }
`;

const Flex = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  h2 {
    color: var(--title);
  }
`;

const AboutSection = styled(motion.div)`
  align-self: center;
  span {
    display: block;
    border-radius: 2px;
    width: 202px;
    height: 4px;
    background-color: var(--title);
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5rem;
    color: var(--text);
    font-weight: 400;
  }
`;

export default About;
