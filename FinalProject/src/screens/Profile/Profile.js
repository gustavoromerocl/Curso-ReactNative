import React, {useEffect, useState} from 'react';
import {Button, Image, Modal, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';
import AsyncStorage from '@react-native-community/async-storage';
import {useCallback} from 'react';

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
  const [username, updateUserName] = useState('');
  const [email, updateEmail] = useState('');
  const [number, updateNumber] = useState('');
  const [modalActive, updateModal] = useState(false);

  const storeData = async ({username, email, number}) => {
    try {
      const user = {
        user: username,
        mail: email,
        num: number,
      };
      const jsonUser = JSON.stringify(user);
      console.log({jsonUser});
      await AsyncStorage.setItem('user', jsonUser);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = useCallback(async () => {
    try {
      const jsonUser = await AsyncStorage.getItem('user');
      if (jsonUser != null) {
        const user = JSON.parse(jsonUser);
        updateUserName(user.user);
        updateEmail(user.mail);
        updateNumber(user.num);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const toogleModal = () => updateModal(!modalActive);

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/no_image_available.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.containerInfo}>
        <View>
          <Text>{username}</Text>
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
      <Modal visible={modalActive}>
        <Text>Nombre de usuario:</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => updateUserName(text)}
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
            storeData({username, email, number});
          }}
          title="Guardar"
        />
        <Button onPress={toogleModal} title="Volver" />
      </Modal>
    </View>
  );
};

export default Profile;
