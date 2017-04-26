import styled, {keyframes} from 'styled-components';
import {animationDelay, animationDuration, animationEasing} from '../../constants';

const blazonEnter = keyframes`
  from, 50% {
    opacity: 0;
    transform: scale(1.5);
  }
`;
export const Blazon = styled.path`
  animation: ${blazonEnter} ${animationDuration} ${animationEasing} ${animationDelay} forwards;
  fill: #ff6363;
  transform-origin: center;
`;

const ellipsisEnter1 = keyframes`
  from {
    opacity: 0;
    stroke-width: 0;
    transform: scale(.66);
  }

  90%, to {
    stroke-dashoffset: 0;
  }
`;

const Ellipsis = styled.path`
  stroke: #607096;
  stroke-linecap: round;
  stroke-mitterlimit: 10;
  stroke-width: 24;
  transform-origin: center;
`;

export const Ellipsis1 = styled(Ellipsis)`
  animation: ${ellipsisEnter1} ${animationDuration} ${animationEasing} ${animationDelay} forwards;
`;
const ellipsisEnter2 = keyframes`
  from, 5% {
    opacity: 0;
    stroke-width: 0;
    transform: scale(.66);
  }

  95%, to {
    stroke-dashoffset: 0;
  }
`;

export const Ellipsis2 = styled(Ellipsis)`
  animation: ${ellipsisEnter2} ${animationDuration} ${animationEasing} ${animationDelay} forwards;
`;

const ellipsisEnter3 = keyframes`
  from, 10% {
    opacity: 0;
    stroke-width: 0;
    transform: scale(.66);
  }

  to {
    stroke-dashoffset: 0;
  }
`;
export const Ellipsis3 = styled(Ellipsis)`
  animation: ${ellipsisEnter3} ${animationDuration} ${animationEasing} ${animationDelay} forwards;
`;
