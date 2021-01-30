import React, {useCallback, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

export const UserContext = React.createContext();

const UserHandler = ({children}) => {
  const [name, updateName] = useState('Test Cat');
  const [email, updateEmail] = useState('test@test.cl');
  const [number, updateNumber] = useState('+56962779973');
  const [photo, updatePhoto] = useState(null);
  const [rollProfilePhotos, updateRollProfilePhotos] = useState(null);

  const storeData = async ({name, email, number}) => {
    try {
      const user = {
        user: name,
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

  // Metodo que trae los datos desde el async storage para deplegarlos en la aplicacion
  const getData = useCallback(async () => {
    try {
      const jsonUser = await AsyncStorage.getItem('user');
      if (jsonUser != null) {
        const user = JSON.parse(jsonUser);
        updateName(user.user);
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

  const fetchCat = useCallback(async () => {
    try {
      Axios.defaults.headers.common['x-api-key'] =
        '2c7e068b-6c10-4846-847c- a50e06b2baa7';
      const {status, data} = await Axios.get(
        'https://api.thecatapi.com/v1/images/search',
        {
          params: {limit: 15, size: 'full'},
        },
      );
      if (status === 200) {
        updateRollProfilePhotos(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  return (
    <UserContext.Provider
      value={{
        name,
        updateName,
        email,
        updateEmail,
        number,
        updateNumber,
        photo,
        updatePhoto,
        storeData,
        rollProfilePhotos,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserHandler;

type IUser = {
  name?: String,
  updateName?: Function,
  email?: String,
  updateEmail?: Function,
  photo?: String,
  updatePhoto?: Function,
  storeData?: Function,
  rollProfilePhotos: Array,
};

export const useUserInformation = (): IUser => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserInformation debe ser usado dentro de UserHandler');
  }

  return context;
};
