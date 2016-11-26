import React from 'react';
import {Wrapper} from './styles';
import Logo from '../Logo';
import Logo2 from '../Logo2';
import Logo3 from '../Logo3';


const App = () => (
  <Wrapper>
    <Logo width={300} height={300} />
    <Logo2 width={300} height={300} />
    <Logo3 width={300} height={300} />
  </Wrapper>
);


export default App;
