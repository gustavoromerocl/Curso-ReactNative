/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import RootNavigation from './routes/RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </>
  );
};

export default App;
