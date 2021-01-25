import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';
import {ThemeContext} from '../context/Theme';

const PhotoStack = createStackNavigator();

const PhotoNavigation = () => {

  const HomeNavigation = () => {
    const {
      mainTheme: {backgroundColor, textColor},
    } = useContext(ThemeContext);
    
  return (
    <PhotoStack.Navigator>
      <PhotoStack.Screen name="Photo" component={Profile} options={{headerTintColor: colors.skyBlue, headerStyle: {backgroundColor: backgroundColor}}}/>
    </PhotoStack.Navigator>
  );
};

export default PhotoNavigation;
