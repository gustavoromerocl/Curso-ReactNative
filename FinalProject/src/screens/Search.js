import React, {Component, useContext} from 'react';
import {View, Text} from 'react-native';
import { ThemeContext } from '../context/Theme';

const Search = () => {
  const {mainTheme: {backgroundColor, textColor}} = useContext(ThemeContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor}}>
      <Text> Search </Text>
    </View>
  );
};

export default Search;
