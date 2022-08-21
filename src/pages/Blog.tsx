import React from 'react';
import { Wrapper } from '../styles';
import styled from 'styled-components';
import Mvp from '../assets/mvpone.png';
import Manager from '../assets/manager.png';
import Culture from '../assets/culture.jpg';
import { motion } from 'framer-motion';
import { about, header } from '../utils/Animations';

const Blog: React.FC = () => {
  return (
    <Wrapper>
      <Grid id="blog" initial="hidden" whileInView="show" viewport={{ amount: 0.2 }}>
        <AboutSection variants={header} transition={{ duration: 0.7 }}>
          <h2>Blogs</h2>
          <span></span>
          <p>Insights and advice from our experts.</p>
        </AboutSection>
        <BoxSection>
          <Box variants={about} transition={{ delay: 0.2 }}>
            <img src={Mvp} alt="content" />
            <div>
              <h3>Top list of Mistakes to Avoid During MVP Development</h3>
              <p>
                When there appears an idea to create a startup, have to take into account all the
                risks you will face and evalute them thoughtfullu. Also as a rule...
              </p>
              <Button>Read more</Button>
            </div>
          </Box>
          <Box variants={about} transition={{ delay: 0.4 }}>
            <img src={Manager} alt="content" />
            <div>
              <h3>A Day in the life on an Engineering Manager</h3>
              <p>
                During the eight years I spent as an engineering manager, I regularly tracked how I
                spent my time. As a startup engineering manager, I was ...
              </p>
              <Button>Read more</Button>
            </div>
          </Box>
          <Box variants={about} transition={{ delay: 0.6 }}>
            <img src={Culture} alt="content" />
            <div>
              <h3>How to Build a Strong Remote Work Culture</h3>
              <p>
                Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of
                the world's greatest freelancers with companies who...
              </p>
              <Button>Read more</Button>
            </div>
          </Box>
        </BoxSection>
        <Button className="second">View all</Button>
      </Grid>
    </Wrapper>
  );
};

const Grid = styled(motion.div)`
  padding: 8rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const BoxSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template:
    'top' 180px
    'content' auto;
  border-radius: 0.5rem;
  width: 100%;
  width: 270px;
  height: 420px;
  background-color: #fff;
  box-shadow: var(--shadow-box);
  img {
    grid-area: top;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  div {
    padding: 0.8rem;
    grid-area: content;
    display: flex;
    flex-direction: column;
  }
  h3 {
    color: var(--title);
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--text);
    font-weight: 400;
    line-height: 1.2rem;
    font-size: 0.9rem;
    margin-bottom: auto;
  }
  button {
  }
`;

const AboutSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  h2 {
    color: var(--title);
    margin-bottom: 0.5rem;
  }
  span {
    display: block;
    border-radius: 2px;
    width: 80px;
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

const Button = styled.button`
  font-weight: 500;
  font-size: 0.9rem;
  align-self: center;
  justify-self: center;
  text-align: center;
  max-width: 160px;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 1rem;
  border: var(--border);
  background-color: var(--title);
  color: var(--white);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &.second {
    background-color: var(--green);
    width: 120px;
  }
  &:hover {
    opacity: var(--opacity);
    transition: 0.2s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default Blog;
