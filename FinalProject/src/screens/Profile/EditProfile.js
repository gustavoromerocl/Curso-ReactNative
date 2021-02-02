import {useNavigation} from '@react-navigation/native';
import React, { useContext } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/Commons/CustomButton';
import TextInput from '../../components/Commons/TextInput';
import AddPhoto from '../../components/Photo/AddPhoto';
import colors from '../../config/colors';
import {ThemeContext} from '../../context/Theme';
import {useUserInformation} from '../../context/User';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    marginTop: 58,
    marginBottom: 40,
  },
  editPhotoText: {
    fontSize: 15,
    color: colors.pink,
    fontFamily: 'LondrinaSolid-Regular',
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 60,
  },
});

const EditProfile = () => {
  const {
    name,
    updateName,
    email,
    updateEmail,
    number,
    updateNumber,
    photo,
    storeData,
  } = useUserInformation();

  const navigation = useNavigation();

  const {
    mainTheme: {backgroundColor, textColor, primaryColor},
  } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.photoContainer}>
        <AddPhoto uri={photo} />
        <Text style={[styles.editPhotoText, {color: primaryColor}]}>Cambiar foto de perfil</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          labelTag={'Nombre de usuario:'}
          placeholder="Username"
          value={name}
          onChange={(text) => updateName(text)}
        />
        <TextInput
          labelTag={'Email:'}
          placeholder="Email"
          value={email}
          onChange={(text) => updateName(text)}
        />
        <TextInput
          labelTag={'Número:'}
          placeholder="Número"
          value={number}
          onChange={(text) => updateName(text)}
        />
        <CustomButton
          contain={'Guardar'}
          onPress={() => {
            storeData({name, email, number});
            navigation.pop();
          }}
        />
      </View>
    </ScrollView>
  );
};
export default EditProfile;
