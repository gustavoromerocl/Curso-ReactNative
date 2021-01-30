import {useNavigation} from '@react-navigation/native';
import React, { useContext } from 'react';
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';
import { ThemeContext } from '../../context/Theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  squareContainer: {
    width: '100%',
    height: 200,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoContainer: {
    borderColor: colors.black,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFrame: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    paddingTop: 15,
    color: colors.black,
  },
});

const SquareAddPhoto = ({uri = null}) => {
  const navigation = useNavigation();

  const {
    mainTheme: {backgroundColor, textColor, primaryColor},
  } = useContext(ThemeContext);

  const ImagePhoto = !uri ? (
    <View
      style={[
        styles.addPhotoContainer,
        styles.imageFrame,
        {borderColor: textColor},
      ]}>
      <Icon name="image-plus" color={textColor} size={30} />
      <Text style={[styles.textStyle, {color: textColor}]}>Agregar Fondo</Text>
    </View>
  ) : (
    <Image
      style={styles.imageFrame}
      source={require('../../assets/test_background_image.jpg')}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {}}
        underlayColor={textColor}
        style={[styles.squareContainer, {backgroundColor: backgroundColor}]}>
        {ImagePhoto}
      </TouchableHighlight>
    </View>
  );
};

export default SquareAddPhoto;