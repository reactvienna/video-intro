import React from 'react';
import Sound from 'react-sound';
import {Wrapper, Group, BlueText, RedText} from './styles';
import Logo from '../Logo';
import constants from '../../constants';

const App = () => (
  <Wrapper>
    <Sound
      url={constants.sound}
      playStatus={Sound.status.PLAYING}
    />
    <Group>
      <BlueText>React</BlueText>
      <Logo width={320} height={320} />
      <RedText>Vienna</RedText>
    </Group>
  </Wrapper>
);


export default App;
