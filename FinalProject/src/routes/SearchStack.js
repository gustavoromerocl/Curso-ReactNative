import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';

const SearchStack = createStackNavigator();

const SearchNavigation = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
