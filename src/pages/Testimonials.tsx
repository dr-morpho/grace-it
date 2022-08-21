import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../styles';
import { ImQuotesLeft } from 'react-icons/im';
import { motion } from 'framer-motion';
import { about, header } from '../utils/Animations';

const Testimonials: React.FC = () => {
  return (
    <AboutWrap>
      <Wrapper>
        <Grid id="testimonials" initial="hidden" whileInView="show" viewport={{ amount: 0.2 }}>
          <AboutSection variants={header} transition={{ duration: 0.7 }}>
            <h2>Testimonials</h2>
            <span></span>
            <p>See what our clients are saying about us</p>
          </AboutSection>
          <BoxSection variants={about} transition={{ duration: 0.7 }}>
            <Box>
              <ImQuotesLeft size={'45px'} />
              <p>
                The best on the net! Software development saved my business. I use Software
                development often. I am really satisfied with my Software Development.
              </p>
              <div>
                <h4>Kevin Smith</h4>
                <small>Co-Founder</small>
              </div>
            </Box>
            <Box>
              <ImQuotesLeft size={'45px'} />
              <p>
                Mobile application developer is exactly what out business has been lacing. I have
                gotten at least 50 times the value from mobile apllication.
              </p>
              <div>
                <h4>Michael O'hara</h4>
                <small>Founder/CEO</small>
              </div>
            </Box>
            <Box>
              <ImQuotesLeft size={'45px'} />
              <p>
                Logo Design is the next killer app. We've used logo design for the last five years.
                Best. Product. Ever! Definetly worth the investment.
              </p>
              <div>
                <h4>John Hauer</h4>
                <small>Founder</small>
              </div>
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
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const BoxSection = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Box = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / 1fr;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 270px;
  height: 230px;
  background-color: #fff;
  box-shadow: var(--shadow-box);
  div {
    align-self: end;
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  p {
    color: var(--text);
    font-weight: 400;
  }
  h4 {
    color: var(--title);
  }
  small {
    color: var(--text);
  }
  svg {
    color: var(--title);
  }
`;

const AboutSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: var(--title);
    margin-bottom: 0.5rem;
  }
  span {
    display: block;
    border-radius: 2px;
    width: 150px;
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

export default Testimonials;
