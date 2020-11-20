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
import Home from './screens/Home';
import movies from './rawData/movies.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50'
  }
});

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
          <Home movies={movies}></Home>
      </SafeAreaView>
    </>
  );
};



export default App;
