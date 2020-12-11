import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: colors.green,
        borderRadius: 10,
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        bottom: 10,
        marginHorizontal: 10,
        width: "95%",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        color: colors.white,
    }
})


const TotalCart = ({total, onPress}) => (
    <View style={styles.container}>
        <Text style={styles.text}>Total Carrito ({total})</Text>
        <View>
            <Button title="Ver carrito" color={colors.red} onPress={onPress}/>
        </View>
    </View>
)

export default TotalCart;
