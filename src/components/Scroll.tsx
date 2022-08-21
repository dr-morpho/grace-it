import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import styled from 'styled-components';

const Scroll: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ScrollStyled>
      {visible && <BsArrowUpCircle onClick={scrollToTop} size={'50px'} />}
    </ScrollStyled>
  );
};

const ScrollStyled = styled.div`
  svg {
    color: var(--title);
    cursor: pointer;
    transition: 0.2s ease;
    &:active {
      transform: scale(0.85);
      transition: 0.2s ease;
    }
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Scroll;
