import React from 'react';
import { Wrapper } from '../styles';
import styled from 'styled-components';
import Office from '../assets/office.svg';
import Logo from '../components/logo';
import check from '../assets/check.svg';
import { about } from '../utils/Animations';
import { motion } from 'framer-motion';

const Why: React.FC = () => {
  return (
    <Wrapper>
      <Grid id="services" initial="hidden" whileInView="show" viewport={{ amount: 0.2 }}>
        <WhySection variants={about} transition={{ duration: 0.7 }}>
          <Flex>
            <h2>Why</h2>
            <Logo />
            <h2>?</h2>
          </Flex>
          <span></span>
          <p>
            Always stay updated with the technologies thus we help our clients by giving the best
            solutions for thier needs.
          </p>
        </WhySection>
        <GridImg variants={about} transition={{ duration: 0.7 }}>
          <img src={Office} alt="Office" />
          <ul>
            <li>Over 10+ years of industry wide expierence</li>
            <li>
              Provide solutions to our multiple global clients or website traffic generation and
              workflow
            </li>
            <li>Strong team of 150+ creative people</li>
            <li>99% adhere to service level contract</li>
            <li>Ready to recieve service request 24/7</li>
          </ul>
        </GridImg>
      </Grid>
    </Wrapper>
  );
};

const Grid = styled(motion.div)`
  padding: 10rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const GridImg = styled(motion.div)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-content: center;
  img {
    align-self: center;
    justify-self: end;
    max-width: 550px;
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5rem;
    color: var(--text);
    font-weight: 500;
  }
  svg {
    color: var(--title);
    margin-right: 1rem;
  }
  li {
    font-weight: 400;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    padding-left: 40px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 25px;
      height: 25px;
      background-image: url(${check});
      background-repeat: no-repeat;
      opacity: 0.4;
    }
  }
`;

const WhySection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: block;
    border-radius: 2px;
    width: 200px;
    height: 4px;
    background-color: var(--title);
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    line-height: 1.5rem;
    color: var(--text);
    font-weight: 400;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  h2 {
    color: var(--title);
  }
`;

export default Why;
