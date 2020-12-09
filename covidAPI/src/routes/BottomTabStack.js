import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import World from '../screen/World';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import colors from '../components/config/colors';

const BottomTabs = createBottomTabNavigator();

const styles = StyleSheet.create({
    icon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})



const HomeTab = () => (
    //Pasa el color a la propiedad para los inconos
    <BottomTabs.Navigator 
        tabBarOptions={{showLabel: false, activeTintColor: colors.red, inactiveTintColor: colors.gray}} initialRouteName="World">
        <BottomTabs.Screen 
            name="Home" 
            component={HomeNavigation}
            options={{
                tabBarIcon: ({ focused, color, size }) => {
                    MaterialCommunityIcons.loadFont()
                    return(
                        <View styles={styles.icon}>
                            <MaterialCommunityIcons name="home" color={color} size={30}/>
                            <Text styles={{color: color}}>Home</Text>
                        </View>
                    )
                }
            }}
        />
        <BottomTabs.Screen 
            name="World" 
            component={World}
            options={{
                tabBarIcon: ({ focused, color, size }) => {
                    FontistoIcon.loadFont()
                    return(
                        <View styles={styles.icon}>
                            <FontistoIcon name="world" color={color} size={30}/>
                            <Text styles={{color: color}}>World</Text>
                        </View>
                    )
                }
            }}
        />
    </BottomTabs.Navigator>
)

export default HomeTab;