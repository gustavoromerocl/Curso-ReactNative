import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../config/colors';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",

    },
    container: {
        margin: 20,
        padding: 5,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: colors.gray,
    },
})

const Input = ({value, onChangeText, autoCorrect, autoCapitalize, email , placeholder}) => (
    <View style={styles.container}>
        <TextInput
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            keyboardType={email ? 'email-address' : "default"}
        />
    </View>
)   

export default Input;