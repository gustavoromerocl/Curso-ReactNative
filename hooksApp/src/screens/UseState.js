import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Input from '../components/Input';
import RadioButton from '../components/radioButton/RadioButton';
import colors from '../config/colors';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",

    },
    separator: {
        height: 5,
        backgroundColor: colors.gray,
    }
})

const Profile = () => {
    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [active, updateActive] = useState(0);

    console.log({name, email})
    return(
        <>
            <Text style={styles.title}>Profile</Text>
            <Input 
                placeholder={"Ingrese su nombre"}
                value={name}
                onChangeText={(newText) => updateName(newText)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                placeholder={"Ingrese email"}
                value={email}
                onChangeText={(newEmail) => updateEmail(newEmail)}
                autoCapitalize="none"
                autoCorrect={false}
                email
            />
            <RadioButton
                title="Activo"
                selected={active}
                onChange={updateActive} 
            />
            <View style={styles.separator}/>
            <View>
                <Text style={styles.summary}>Resumen</Text>
                <Text style={styles.summary}>Nombte: {name}</Text>
                <Text style={styles.summary}>Correo: {email}</Text>
                <Text style={styles.summary}>Activo: {active}</Text>
            </View>
        </>
    )
}

export default Profile;