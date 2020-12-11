import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking, Button, Alert } from 'react-native'
import colors from '../../config/colors';
import {baseUri } from '../../rawData'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#bdc3c7",
        borderRadius: 7,
        marginBottom: 10,
    },
    imageContainer: {
        height: 100,
    },
    image: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: "black",
        width: '100%',
        height: '100%',
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    information: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

const AddToCart = ({onPress}) => (
    <View style={styles.containerAddButton}>
        <Button title="Agregar al carro" color={colors.violet} onPress={onPress}/>
    </View>  
);

const ButtonAlert = () =>
    Alert.alert(
        "¡Muy Bien!",
        "Agregado al carrito",
        [
            { text: "OK", onPress: () => console.log("OK Pressed"), style: "destructive" }
        ],
        { cancelable: false }
    );

export default class DishCard extends Component {

    render() {
        const { title, readyInMinutes, servings, image, onPress} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: `${baseUri}${image}`}}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.information}>
                        <Text>{`Listo en ${readyInMinutes} min`}</Text>
                        <Text>{`Para ${servings} personas`}</Text>
                    </View>
                </View>
                <AddToCart onPress={onPress}/>
            </View>
        )
    }
}
