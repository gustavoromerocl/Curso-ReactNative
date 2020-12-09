import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../components/config/colors';

const Screen2 = ({navigation}) => {
    return(
        <View style={{flex:1,  backgroundColor: colors.red, justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Screen1', {nombre: "Pokemon"}) }
            >
                <Text style={{fontSize: 30 ,color: colors.white}}>Navegar a Screen 1</Text>
            </TouchableOpacity>
            
        </View>

    )

}

export default Screen2;