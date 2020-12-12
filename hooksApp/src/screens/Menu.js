import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../components/Button';
import colors from '../config/colors'


const styles = StyleSheet.create({
    container: {
        backgroundColor:  colors.gray,
        flex: 1,
    },
    header: {
        height: 200,
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    }
})

const Menu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <Button 
                onPress={()=>{}}
                text="Menu"
            />
            <Button 
                onPress={()=>{}}
                text="useState"
                icon={
                <MaterialIcon name="home" color={colors.black} size={20}/>}
            />
        </View>
    )
}

export default Menu;