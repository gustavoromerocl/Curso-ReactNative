import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
//import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../config/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {login} from '../../redux/actions';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import {
  isLoginValidSelector,
  loginLoadingSelector,
} from '../../redux/selectors/loginSelector';

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: colors.darkGreen,
    height: 400,
    justifyContent: 'flex-end',
  },
  login: {
    margin: 20,
    fontSize: 40,
    color: colors.white,
  },
  inputContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textInputContainer: {
    width: '80%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    borderColor: colors.green,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 35,
    marginVertical: 10,
    paddingLeft: 10,
    color: colors.gray,
  },
  inputSubmit: {
    backgroundColor: colors.green,
    padding: 5,
    right: 40,
    borderRadius: 35,
  },
});

const Login = ({loginIsValid, loginIn, loading}) => {
  //const insets = useSafeAreaInsets(); corrige el notch de algunos smartphone de aple
  const [user, updateUser] = useState('');
  const [password, updatePassword] = useState('');
  //console.log('login: ', {loginIsValid});
  AntDesignIcon.loadFont();

  return (
    <KeyboardAwareScrollView>
      <OverlaySpinner visible={loading} color={colors.white} size="large" />
      <View style={[styles.header]}>
        <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Usuario"
            value={user}
            autoCapitalize="none"
            onChangeText={(text) => updateUser(text)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="*********"
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => updatePassword(text)}
            style={styles.textInput}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.inputSubmit}
            onPress={() => loginIn({user, password})}>
            <AntDesignIcon name="arrowright" color={colors.white} size={60} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => ({
  //console.log({state});
  loginIsValid: isLoginValidSelector(state),
  loading: loginLoadingSelector(state),
});

const mapDipatchToProps = (dispatch) => ({
  loginIn: ({user, password}) => dispatch(login({user, password})),
});

export default connect(mapStateToProps, mapDipatchToProps)(Login);
