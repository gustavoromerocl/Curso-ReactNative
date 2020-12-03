import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
    box: {
        margin: 5,
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    totalText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }
})

//No olvidar poner corchetes [] cuando se carga mas de un estilo en la prop style
const Box = ({variableData, variableName, color}) => (
    <View>
        <View style={styles.box}>
            <Text style={[styles.totalText, {color}]}>{variableData}</Text>
            <Text style={[styles.totalText, {color}]}>{variableName}</Text>
        </View>
    </View>
)


export default Box;
