import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import styled from 'styled-components';

const Icons: React.FC = () => {
  return (
    <Flex>
      <AiOutlineInstagram size={'30px'} />
      <AiOutlineLinkedin size={'30px'} />
      <AiOutlineFacebook size={'30px'} />
      <AiOutlineTwitter size={'30px'} />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  svg {
    color: var(--white);
    opacity: 0.5;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      transition: 0.2s ease-in-out;
      opacity: 1;
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
export default Icons;
