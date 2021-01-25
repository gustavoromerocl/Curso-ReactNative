import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import colors from '../../config/colors';
import useTheme, { ThemeContext } from '../../context/Theme';
import {useUserInformation} from '../../context/User';
import {logout} from '../../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
  },
  image: {
    borderRadius: 5,
    height: 200,
    width: 200,
  },
});

const Settings = ({logout}) => {
  const {name, email, number, photo} = useUserInformation();
  const {
    mainTheme: {backgroundColor, textColor},
    darkModeEnabled,
    toggleDarkMode,
  } = useContext(ThemeContext);

  AntDesignIcon.loadFont();

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Switch
        trackColor={{false: colors.gray, true: colors.gray}}
        thumbColor={darkModeEnabled ? colors.white : colors.black}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={darkModeEnabled}
      />
      <View style={styles.userInformation}>
        {!!photo && (
          <Image
            source={{uri: photo}}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <View>
          <Text style={[styles.text, {color: textColor}]}>{name}</Text>
          <Text style={[styles.text, {color: textColor}]}>{email}</Text>
          <Text style={[styles.text, {color: textColor}]}>{number}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <AntDesignIcon name="logout" color={textColor} size={30} />
        <Text style={[styles.text, {color: textColor}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

//const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Settings);
