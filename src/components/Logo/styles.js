import styled, {keyframes} from 'styled-components';

const blazonEnter = keyframes`
  from, 80% {
    opacity: 0;
    transform: scale(2);
  }
`;

export const Blazon = styled.path`
  animation: ${blazonEnter} 4s infinite;
  fill: #ff6363;
  transform-origin: center;
`;

const ellipsisEnter = keyframes`
  from {
    opacity: 0;
    stroke-width: 0;
    transform: rotate(360deg) scale(.66);
  }

  90%, to {
    stroke-dashoffset: 0;
  }
`;

export const Ellipsis = styled.path`
  animation: ${ellipsisEnter} 4s infinite;
  stroke: #607096;
  stroke-linecap: round;
  stroke-mitterlimit: 10;
  stroke-width: 24;
  transform-origin: center;
`;
