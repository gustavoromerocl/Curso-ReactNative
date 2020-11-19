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
import DishList from './components/DishExample/DishList';
import Dropdown from './components/Dropdown';
import HorizontalScroll from './components/HorizontalScroll';
import InputList from './components/InputList';
import RadioButton from './components/RadioButton';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  dropdownItem: {
    height: 50,
    backgroundColor: "#95a5a6",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
  safeArea: {
    flex: 1,
  }
});

const App: () => React$Node = () => {

  console.log({height, width})
  //enhanced object literal
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
          <Dropdown>
              <View style={styles.dropdownItem}>
                <Text>Chile</Text>
              </View>
              <View style={styles.dropdownItem}>
                <Text>Peru</Text>
              </View>
              <View style={styles.dropdownItem}>
                <Text>Bolivia</Text>
              </View>
              <View style={styles.dropdownItem}>
                <Text>Argentina</Text>
              </View>
          </Dropdown>
          <DishList/>
      </SafeAreaView>
    </>
  );
};

export default App;
