import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import {ThemeContext} from '../../context/Theme';

const Star = ({star, save, onPress}) => {
  const {
    mainTheme: {primaryColor},
  } = useContext(ThemeContext);

  if (star) {
    return (
      <TouchableOpacity onPress={() => onPress()}>
        <AntDesignIcon
          name="star"
          size={40}
          color={save ? colors.skyBlue : colors.gray}
        />
      </TouchableOpacity>
    );
  }
};

export default Star;
