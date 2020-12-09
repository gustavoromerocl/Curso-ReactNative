import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from '../screen/Screen1'
import Screen2 from '../screen/Screen2'

const ScreenStack = createStackNavigator()

const Screen = () => (
    <ScreenStack.Navigator initialRouteName="Screen2" headerMode="none">
        <ScreenStack.Screen name="Screen1" component={Screen1} options={{title: 'Tavo'}}/>
        <ScreenStack.Screen name="Screen2" component={Screen2}/>
    </ScreenStack.Navigator>
)

export default Screen;