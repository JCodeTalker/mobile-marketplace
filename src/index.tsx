/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App = () => (
  <>
  <StatusBar barStyle="light-content" backgroundColor="#312e38" />
  <Routes/>
  </>
)

export default App;