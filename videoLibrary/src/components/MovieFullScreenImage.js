import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    touchable:{
        position: "absolute",
        zIndex: 10,
        width: '100%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: "black"
    },
    image: {
        width: '100%',
        height: '100%'
    }

})

export default function MovieFullScreenImage({ posterUrl, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.touchable}
            >
            <Image
                source={{uri: posterUrl}}
                resizeMode="contain"
                style={styles.image}
            />
        </TouchableOpacity>
    )
}
