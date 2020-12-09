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
import Tarea1 from './components/commons/Tarea1';

import colors from './config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,   
  }
});



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Tarea1 title={"Gustavo Romero"} age={30}/>
      </SafeAreaView>
    </>
  );
};

export default App;
