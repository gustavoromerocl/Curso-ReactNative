import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';
import colors from '../config/colors';
import {ThemeContext} from '../context/Theme';

const SearchStack = createStackNavigator();

const SearchNavigation = () => {
  const {
    mainTheme: {backgroundColor, textColor},
  } = useContext(ThemeContext);

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerTintColor: colors.skyBlue,
          headerStyle: {backgroundColor: backgroundColor},
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
