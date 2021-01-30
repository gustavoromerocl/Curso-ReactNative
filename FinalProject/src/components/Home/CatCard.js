import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../config/colors';
import {ThemeContext} from '../../context/Theme';
import CatImage from '../Commons/CatImage';
import Heart from '../Commons/Heart';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderColor: colors.gray,
    borderWidth: 0.6,
    marginBottom: 35,
    borderRadius: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginHorizontal: 10,
  },
  catImage: {
    backgroundColor: colors.black,
    width: '100%',
    height: 400,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  heart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    height: 80,
  },
});

const CatCard = ({url}) => {
  const [like, updateLike] = useState(false);
  const [lastPress, updateLastPress] = useState(0);

  const {
    mainTheme: {backgroundColor, textColor},
  } = useContext(ThemeContext);

  const onDoublePress = () => {
    var delta = new Date().getTime() - lastPress;

    if (delta < 200) {
      updateLike(!like);
    }

    updateLastPress(new Date().getTime());
  };

  const toggleLike = () => {
    updateLike(!like);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.catImage, {backgroundColor: backgroundColor}]}>
          <CatImage toggle={() => onDoublePress()} catUrl={url} />
        </View>
        <View style={[styles.heart, {backgroundColor: backgroundColor}]}>
          <Heart heart like={like} ratingPress={() => toggleLike()} />
        </View>
      </View>
    </>
  );
};

export default CatCard;
