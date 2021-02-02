import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';
import Camera from '../screens/Profile/Camera';
import {ThemeContext} from '../context/Theme';
import EditProfile from '../screens/Profile/EditProfile';

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
  const {
    mainTheme: {backgroundColor, textColor, primaryColor},
  } = useContext(ThemeContext);

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: primaryColor,
          headerStyle: {backgroundColor: backgroundColor},
          headerTitleStyle: {fontFamily: 'LondrinaSolid-Regular'},
        }}
      />
      <ProfileStack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerTintColor: primaryColor,
          headerStyle: {backgroundColor: backgroundColor},
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTintColor: primaryColor,
          headerStyle: {backgroundColor: backgroundColor},
          headerTitleStyle: {fontFamily: 'LondrinaSolid-Regular'},
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
