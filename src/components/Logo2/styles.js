import styled, {keyframes} from 'styled-components';
import {Ellipsis} from '../Logo/styles';


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

const ellipsisEnter1 = keyframes`
  from {
    opacity: 0;
    stroke-width: 0;
    transform: scale(.66);
  }

  70%, to {
    stroke-dashoffset: 0;
  }
`;

export const Ellipsis1 = styled(Ellipsis)`
  animation: ${ellipsisEnter1} 4s infinite;
`;

const ellipsisEnter2 = keyframes`
  from, 5% {
    opacity: 0;
    stroke-width: 0;
    transform: scale(.66);
  }

  75%, to {
    stroke-dashoffset: 0;
  }
`;

export const Ellipsis2 = styled(Ellipsis)`
  animation: ${ellipsisEnter2} 4s infinite;
`;

const ellipsisEnter3 = keyframes`
  from, 10% {
    opacity: 0;
    stroke-width: 0;
    transform: scale(.66);
  }

  80%, to {
    stroke-dashoffset: 0;
  }
`;

export const Ellipsis3 = styled(Ellipsis)`
  animation: ${ellipsisEnter3} 4s infinite;
`;
