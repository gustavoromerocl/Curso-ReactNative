// In App.js in a new project

import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import HomeNavigation from './HomeStack';
import ProfileNavigation from './ProfileStack';
import SettingNavigation from './SettingStack';
import SearchNavigation from './SearchStack';
import colors from '../config/colors';
import {ThemeContext} from '../context/Theme';

const Tab = createBottomTabNavigator();

const ButtonsTabStack = () => {
  const {
    mainTheme: {backgroundColor, textColor},
  } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: backgroundColor,
        },
        showLabel: false,
        activeTintColor: colors.skyBlue,
        inactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            MaterialCommunityIcons.loadFont();
            return (
              <View>
                <MaterialCommunityIcons name="home" color={color} size={30} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            MaterialCommunityIcons.loadFont();
            return (
              <View>
                <MaterialCommunityIcons
                  name="view-grid"
                  color={color}
                  size={30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            MaterialCommunityIcons.loadFont();
            return (
              <View>
                <MaterialCommunityIcons name="cat" color={color} size={30} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            MaterialCommunityIcons.loadFont();
            return (
              <View>
                <MaterialCommunityIcons name="cog" color={color} size={30} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtonsTabStack;
