import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  touchable: {
    width: 400,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const CatImage = ({catUrl}) => {
  console.log(catUrl);
  return (
    <TouchableWithoutFeedback style={styles.touchable}>
      <Image source={{uri: catUrl}} resizeMode="contain" style={styles.image} />
    </TouchableWithoutFeedback>
  );
};

export default CatImage;
