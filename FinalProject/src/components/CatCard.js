import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import CatImage from './CatImage';
import Heart from './Heart';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    width: '100%',
    height: 300,
  },
  heart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 50,
    marginBottom: 20,
  },
});

const CatCard = ({url}) => {
  const [like, updateLike] = useState(false);
  const [lastPress, updateLastPress] = useState(0);

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
        <CatImage toggle={() => onDoublePress()} catUrl={url} />
      </View>
      <View style={styles.heart}>
        <Heart heart like={like} ratingPress={() => toggleLike()} />
      </View>
    </>
  );
};

export default CatCard;
