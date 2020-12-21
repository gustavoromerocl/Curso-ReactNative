import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import ShoppingUI from '../screen/ShoppingUI';
import ShoppingCart from '../components/Home/ShoppingCart';
import DishList from '../components/Home/DishList';

const Stack = createStackNavigator();
const ShoppingStack = () => {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={DishList}/>
        <Stack.Screen name="Cart" component={ShoppingCart}/>
    </Stack.Navigator>
  );
}

export default ShoppingStack;