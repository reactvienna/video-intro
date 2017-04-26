import styled, {keyframes} from 'styled-components';
import {animationDelay, animationDuration, animationEasing} from '../../constants';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Group = styled.div`
  align-items: center;
  display: flex;
`;

const Text = styled.span`
  font: 6rem 'Fira Mono', sans-serif;
  letter-spacing: -.2rem;
  padding: 1.5rem;
`;

const redTextEnter = keyframes`
  from, 60% {
    opacity: 0;
    transform: translateX(-2.5rem);
  }
`;
export const RedText = styled(Text)`
  animation: ${redTextEnter} ${animationDuration} ${animationEasing} ${animationDelay} forwards;
  color: #ff6363;
`;


const blueTextEnter = keyframes`
  from, 60% {
    opacity: 0;
    transform: translateX(2.5rem);
  }
`;
export const BlueText = styled(Text)`
  animation: ${blueTextEnter} ${animationDuration} ${animationEasing} ${animationDelay} forwards;
  color: #607096;
`;
