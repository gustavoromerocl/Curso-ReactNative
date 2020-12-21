import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingStack from './ShoppingStack';
import DishList from '../components/Home/DishList';
import ShoppingCart from '../components/Home/ShoppingCart';
import ShoppingUI from '../screen/ShoppingUI';
import Home from '../screen/Home';

const HomeStack = createStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="DishList" component={DishList}/>
        <HomeStack.Screen name="Cart" component={ShoppingUI}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;