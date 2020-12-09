/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from './components/config/colors';
import RootNavigation from './routes/RootNavigation';
import Home from './screen/Home';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <RootNavigation/>
    </>
  );
};



export default App;
