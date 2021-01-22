import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';
import Camera from '../screens/Profile/Camera';

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Camera" component={Camera} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
