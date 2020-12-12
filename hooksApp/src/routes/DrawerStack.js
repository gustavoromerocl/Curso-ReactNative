import React, { Component } from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer'
import MenuScreen from '../screens/Menu'
import Screen1 from '../screens/Screen1'

const MenuDrawer = createDrawerNavigator();

const Drawer = () => (
    <MenuDrawer.Navigator drawerContent={MenuScreen}>
        <MenuDrawer.Screen name="screen1" component={Screen1}/>
        <MenuDrawer.Screen name="MenuScreen" component={MenuScreen}/>
    </MenuDrawer.Navigator>
)

export default Drawer;