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
    borderBottomWidth: 0.6,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginHorizontal: 7,
    width: '30%',
    height: 140,
  },
  catImage: {
    backgroundColor: colors.black,
    width: '100%',
    height: 100,
    paddingHorizontal: 5,
    paddingTop: 20,
  },
  heart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    height: 20,
  },
});

const GridCard = ({url}) => {
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
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={[styles.catImage, {backgroundColor: backgroundColor}]}>
          <CatImage toggle={() => onDoublePress()} catUrl={url} />
        </View>
      </View>
    </>
  );
};

export default GridCard;
