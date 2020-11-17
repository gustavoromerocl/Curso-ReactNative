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
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight, 
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Counter from './components/Counter';
import InputList from './components/InputList';
import RadioButton from './components/RadioButton';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  image:{
    borderRadius: 100,
    width: width * 0.4,
    height: 200,
  },
  title:{
    color: "black",
    fontSize: 40,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  container:{
    backgroundColor: '#2ecc71',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 1,
  }
});

const App: () => React$Node = () => {

  console.log({height, width})
  //enhanced object literal
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView >
          <Counter/>
          <InputList/>
          <RadioButton/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
