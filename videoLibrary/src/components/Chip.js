import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    padding: 5,
    backgroundColor: 'gray',
    margin: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white'
  }
})

const Chip = ({value, onPress}) => (
  <TouchableOpacity
    style={styles.touchable}
    disabled={!onPress}
    onPress={() => onPress(value)}>
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
)

export default Chip;