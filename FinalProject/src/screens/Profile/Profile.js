import React, {useContext, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';
import AddPhoto from '../../components/Photo/AddPhoto';
import {useUserInformation} from '../../context/User';
import {ThemeContext} from '../../context/Theme';
import SquareAddPhoto from '../../components/Photo/SquareAddPhoto';
import CatGrid from '../../components/Portfolio/CatGrid';
import GridCard from '../../components/Portfolio/GridCard';
import { useApiInformation } from '../../context/LoadApi';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    height: 200,
    width: '100%',
    backgroundColor: '#000',
  },
  circleImage: {
    position: 'absolute',
    top: 135,
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: '#34495e',
  },
  containerInfo: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  edit: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
});

/**
 *    <TouchableHighlight underlayColor={colors.skyBlue} onPress={() => {}}>
        <MaterialCommunityIcons name="camera" color={colors.gray} size={40} />
      </TouchableHighlight>
 */
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
    storeData,
  } = useUserInformation();

  const {rollPhotos} = useApiInformation();

  const {
    mainTheme: {backgroundColor, textColor, primaryColor},
  } = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.containerImage}>
              <SquareAddPhoto uri={photo} />
            </View>
            <View style={styles.circleImage}>
              <AddPhoto uri={photo} />
            </View>
            <View style={styles.edit}>
              <TouchableOpacity onPress={toogleModal}>
                <MaterialCommunityIcons
                  name="account-edit"
                  color={colors.gray}
                  size={40}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containerInfo}>
              <View>
                <Text style={[styles.title, {color: primaryColor}]}>
                  {name}
                </Text>
                <Text style={[styles.text, {color: textColor}]}>{email}</Text>
                <Text style={[styles.text, {color: textColor}]}>{number}</Text>
              </View>
            </View>
          </>
        }
        numColumns={3}
        data={rollPhotos}
        keyExtractor={(item) => item.id}
        renderItem={({item: {url, width}}) => <GridCard url={url} />}
      />
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
