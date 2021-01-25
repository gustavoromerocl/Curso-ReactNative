import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/Settings/Settings';
import colors from '../config/colors';
import {ThemeContext} from '../context/Theme';

const SettingStack = createStackNavigator();

const SettingNavigation = () => {
  const {
    mainTheme: {backgroundColor, textColor},
  } = useContext(ThemeContext);

  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTintColor: colors.skyBlue,
          headerStyle: {backgroundColor: backgroundColor},
        }}
      />
    </SettingStack.Navigator>
  );
};

export default SettingNavigation;
