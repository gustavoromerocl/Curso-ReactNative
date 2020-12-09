import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../components/config/colors';

const Screen1 = ({navigation, route}) => {
    console.log(route)
    return(
        <View style={{flex:1, backgroundColor: colors.green, justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Text  style={{fontSize: 30,color: colors.white}}>Volver a Screen 2</Text>
            </TouchableOpacity>
    
        </View>
    )
    
}


export default Screen1;