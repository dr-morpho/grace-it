import React from 'react';
import styled from 'styled-components';
import { BiMessageSquareCheck } from 'react-icons/bi';

const logo: React.FC = () => {
  return (
    <Logo>
      <h2>Grace IT</h2>
      <BiMessageSquareCheck size={'25px'} />
    </Logo>
  );
};

const Logo = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 0;
    color: var(--title);
  }
  svg {
    color: var(--title);
    margin-left: 0.3rem;
  }
`;

export default logo;
