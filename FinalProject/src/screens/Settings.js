import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import colors from '../config/colors';
import {useUserInformation} from '../context/User';
import {logout} from '../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  AntDesignIcon.loadFont();
  return (
    <View style={styles.container}>
      <View style={styles.userInformation}>
        {!!photo && (
          <Image
            source={{uri: photo}}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <View>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{number}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <AntDesignIcon name="logout" color={colors.black} size={30} />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

//const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Settings);
