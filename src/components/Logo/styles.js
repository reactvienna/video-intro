import styled, {keyframes} from 'styled-components';


const blazonEnter = keyframes`
  from, 50% {
    opacity: 0;
    transform: scale(1.5);
  }
`;
export const Blazon = styled.path`
  animation: ${blazonEnter} 4s forwards;
  fill: #ff6363;
  transform-origin: center;
`;

const ellipsisEnter = keyframes`
  to {
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
  animation: ${ellipsisEnter} 2.8s .4s forwards;
`;

export const Ellipsis2 = styled(Ellipsis)`
  animation: ${ellipsisEnter} 2.8s .8s forwards;
`;

export const Ellipsis3 = styled(Ellipsis)`
  animation: ${ellipsisEnter} 2.8s 1.2s forwards;
`;
