import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const Heart = ({heart, like, ratingPress}) => {
  if (heart) {
    return (
      <TouchableOpacity onPress={() => ratingPress()}>
        <Icon name="heart" size={40} color={like ? colors.skyBlue : colors.gray} />
      </TouchableOpacity>
    );
  }
};

export default Heart;
