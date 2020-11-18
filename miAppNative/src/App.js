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
import Dropdown from './components/Dropdown';
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
          <Dropdown>
            <View style={styles.dropdownItem}>
              <Text>Chile</Text>
            </View>
            <View style={styles.dropdownItem}>
              <Text>Perú</Text>
            </View>
            <View style={styles.dropdownItem}>
              <Text>Bolivia</Text>
            </View>
            <View style={styles.dropdownItem}>
              <Text>Argentina</Text>
            </View>
          </Dropdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
