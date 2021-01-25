import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';
import Camera from '../screens/Profile/Camera';
import colors from '../config/colors';
import {ThemeContext} from '../context/Theme';

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
  const {
    mainTheme: {backgroundColor, textColor},
  } = useContext(ThemeContext);

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: colors.skyBlue,
          headerStyle: {backgroundColor: backgroundColor},
        }}
      />
      <ProfileStack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerTintColor: colors.skyBlue,
          headerStyle: {backgroundColor: backgroundColor},
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
