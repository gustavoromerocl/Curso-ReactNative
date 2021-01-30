import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import {ThemeContext} from '../context/Theme';
import Portfolio from '../screens/Portolio/Portfolio';

const PortfolioStack = createStackNavigator();

const PortfolioNavigation = () => {
  const {
    mainTheme: {backgroundColor, textColor, primaryColor},
  } = useContext(ThemeContext);

  return (
    <PortfolioStack.Navigator>
      <PortfolioStack.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerTintColor: primaryColor,
          headerStyle: {backgroundColor: backgroundColor},
        }}
      />
    </PortfolioStack.Navigator>
  );
};

export default PortfolioNavigation;
