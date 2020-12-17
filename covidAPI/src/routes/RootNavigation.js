import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Screen from './TestStack'
import { createStackNavigator } from '@react-navigation/stack'
import HomeNavigation from './HomeStack'
import HomeTab from './BottomTabStack'

const RootStack = createStackNavigator();
const RootNavigation = () =>(
    <NavigationContainer>
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="tabs" component={HomeTab}/>
            <RootStack.Screen name="Screen" component={Screen}/>
        </RootStack.Navigator>
    </NavigationContainer>
)

export default RootNavigation;
