// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import ProfileNavigation from './ProfileStack';
import SettingNavigation from './SettingStack';
import SearchNavigation from './SearchStack';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
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
                    name="filter"
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
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={30}
                  />
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
    </NavigationContainer>
  );
};

export default RootNavigation;
