import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';

const PhotoStack = createStackNavigator();

const PhotoNavigation = () => {
  return (
    <PhotoStack.Navigator>
      <PhotoStack.Screen name="Photo" component={Profile} />
    </PhotoStack.Navigator>
  );
};

export default PhotoNavigation;
