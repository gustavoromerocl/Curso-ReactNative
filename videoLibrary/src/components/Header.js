import React  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import CustomText from './CustomText'

//Componente Customer    

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#bdc3c7',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      title: {
        color: '#34495e',
        fontSize: 35,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
})

const Header = ({title}) => (
    <View style={styles.container}>
        <CustomText style={styles.title} size={50} color={"black"}>{title}</CustomText>
    </View>
)

export default Header;

Header.propTypes = {
    title: PropTypes.string,
}

Header.defaultProps = {
    title: 'Titulo por defecto',
}