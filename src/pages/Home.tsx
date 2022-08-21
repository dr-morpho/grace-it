import React from 'react';
import HomeImage from '../assets/main.svg';
import { GoPlay } from 'react-icons/go';
import { HiArrowRight } from 'react-icons/hi';
import styled from 'styled-components';
import { Wrapper } from '../styles';
import { motion } from 'framer-motion';
import { about, header } from '../utils/Animations';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Grid initial="hidden" whileInView="show" viewport={{ amount: 0.2 }}>
        <Content variants={header} transition={{ duration: 0.7 }}>
          <h1>We Provide Solutions to Help You to Build or Grow Your Buisness!</h1>
          <p>
            A professional web and mobile app development agency with over 100+ web and app
            developed. We provide a high- quality service in web and mobile app development as well
            as in design.
          </p>
          <ButtonContainer>
            <Button>
              <b>Video</b>
              <GoPlay size={'18px'} />
            </Button>
            <Button className="second">
              <b>Request Quote</b>
              <HiArrowRight size={'18px'} />
            </Button>
          </ButtonContainer>
        </Content>
        <motion.img
          variants={about}
          transition={{ duration: 0.7 }}
          src={HomeImage}
          alt="Home page"
        />
      </Grid>
    </Wrapper>
  );
};

const Grid = styled(motion.div)`
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
  img {
    max-width: 550px;
    width: 100%;
    justify-self: end;
    @media (max-width: 1270px) {
      justify-self: center;
    }
  }
  p {
    margin-bottom: 1.5rem;
    line-height: 1.5rem;
    color: var(--text);
    font-weight: 400;
  }
`;

const Content = styled(motion.div)`
  h1 {
    margin: 0;
    margin-bottom: 1.5rem;
    font-size: 2.8rem;
    color: var(--title);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  max-width: 160px;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 1rem;
  border: var(--border);
  background-color: var(--title);
  color: var(--white);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  b {
    margin-right: 0.5rem;
  }
  &.second {
    background-color: var(--green);
  }
  &:hover {
    opacity: var(--opacity);
    transition: 0.2s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 550px) {
    font-size: 0.7rem;
  }
`;

export default Home;
