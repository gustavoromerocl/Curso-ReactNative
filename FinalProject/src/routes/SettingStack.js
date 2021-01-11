import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/Settings';

const SettingStack = createStackNavigator();

const SettingNavigation = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Settings" component={Settings} />
    </SettingStack.Navigator>
  );
};

export default SettingNavigation;
