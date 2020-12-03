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
import Home from './screen/Home';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  }
});


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Home/>
      </SafeAreaView>
    </>
  );
};



export default App;
