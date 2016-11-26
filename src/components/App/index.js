import React from 'react';
import {Wrapper, Group, BlueText, RedText} from './styles';
import Logo from '../Logo';


const App = () => (
  <Wrapper>
    <Group>
      <BlueText>React</BlueText>
      <Logo width={320} height={320} />
      <RedText>Vienna</RedText>
    </Group>
  </Wrapper>
);


export default App;
