import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    title: {
        color: colors.white,
        fontSize: 20,
    }, 
    age: {
        color: colors.white,
        fontSize: 15,
    },
    imageContainer: {
        height: 100,
    },
    image: {
        backgroundColor: "black",
        width: '25%',
        height: '90%',
        borderRadius: 50,
        resizeMode: "cover",
    },
    subTitle: {
        color: '#bdc3c7',
    }
})

const Tarea1 = ({title, age}) => (
    <>
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View style={{height: 100}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.age}>{age}</Text>
                </View>
                    <Image style={styles.image} source={{uri: 'https://media.istockphoto.com/photos/winning-success-man-happy-ecstatic-celebrating-being-a-winner-dynamic-picture-id941370476'}}></Image>
            </View>
            
            <View>
                <Text style={styles.subTitle}>Bio:</Text>
                <Text>Desarrolador informático</Text>
            </View>

            <View style={{marginTop: 20}}> 
                <Text style={styles.subTitle}>Descripción:</Text>
                <View style={{alignContent: "stretch", flexDirection: "row"}}>
                    <Text style={{maxWidth: "50%"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, placeat quisquam deserunt iste, </Text>
                    <Text style={{maxWidth: "50%"}}>ullam error ad fugit repudiandae alias quibusdam in nihil natus sint! Consequuntur illo aspernatur illum incidunt. Enim?</Text>    
                </View>
            </View>
        </View>
    </>
)

export default Tarea1;
