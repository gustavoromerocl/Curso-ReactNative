import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';
import AddPhoto from '../../components/Photo/AddPhoto';
import {useUserInformation} from '../../context/User';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    height: '70%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: '#34495e',
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

const Profile = () => {
  const [modalActive, updateModal] = useState(false);
  const toogleModal = () => updateModal(!modalActive);

  const {
    name,
    updateName,
    email,
    updateEmail,
    number,
    updateNumber,
    photo,
    updatePhoto,
    storeData,
  } = useUserInformation();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <AddPhoto uri={photo} />
      </View>
      <View style={styles.containerInfo}>
        <View>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{number}</Text>
        </View>
        <TouchableHighlight
          underlayColor={colors.skyBlue}
          onPress={toogleModal}>
          <MaterialCommunityIcons
            name="account-edit"
            color={colors.gray}
            size={40}
          />
        </TouchableHighlight>
      </View>
      <TouchableHighlight underlayColor={colors.skyBlue} onPress={() => {}}>
        <MaterialCommunityIcons name="camera" color={colors.gray} size={40} />
      </TouchableHighlight>
      <Modal visible={modalActive}>
        <Text>Nombre de usuario:</Text>
        <TextInput
          placeholder="Username"
          value={name}
          onChangeText={(text) => updateName(text)}
          style={styles.textInput}
        />
        <Text>Email:</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => updateEmail(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Número"
          value={number}
          onChangeText={(text) => updateNumber(text)}
          style={styles.textInput}
        />
        <Button
          onPress={() => {
            storeData({name, email, number});
          }}
          title="Guardar"
        />
        <Button onPress={toogleModal} title="Volver" />
      </Modal>
    </View>
  );
};

export default Profile;
