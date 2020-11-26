import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    defaultStyles: {
        fontSize: 20,
        color: '#2c3e58',
        fontFamily: "Roboto",
    }
});

const generateFontSize = (props) => {
    const size = props.size ? props.size : 15;
    return Number(size);
}

const generateFontItalic = ({ italic }) => {
    return italic ? 'italic' : 'normal'
}

// De esta forma la propiedad se activa solo indicando la palabra weight
const generateFontWeight = ({ weight = 'normal' }) => weight;


const generateFontColor = ({ color }) => {
    return color ? color : 'red';
}

const CustomText = ({style, children, ... props}) => {

    console.log(props);

    const customStyle = {
        fontSize: generateFontSize(props),
        fontStyle: generateFontItalic(props),
        fontWeight: generateFontWeight(props),
        color: generateFontColor(props),
    };

    return(
        <Text style={StyleSheet.flatten([style, styles.defaultStyles, customStyle])}>
            {children}
        </Text>
    )
}

export default CustomText;