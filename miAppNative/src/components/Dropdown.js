import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    dropdown: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#2980b9",
        padding: 20,
    },
    title: {
        color: "white",
        fontSize: 20
    }
});

// const children incluye todos los hijos incluidos entre el nodo padre
// {open && children} : Se ejecuta como un if, desde izquierda a derecha. Si open es true, entonces retorna lo siguiente del &&
export default class Dropdown extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false,
        }
    }

    //cambia el estado de la variable open a su valor contrario
    toggle = () => this.setState( ({open}) => ({ open: !open}) )

    render() {
        const { children } = this.props
        const { open } = this.state
        
        //acceder a las propiedades anidadas de un objeto con ? para proteger de errores de compilacion, evita caida de la app
        const objeto = {
            item: {
                item2:{
                    item3: "hola",
                }
            }
        }

        console.log(objeto?.item?.item2?.item3)

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.toggle()}
                >
                    <View style={styles.dropdown}>
                        <Text style={styles.title}>Dropdown</Text>
                        <Text style={styles.title}>+</Text>
                    </View>
                </TouchableOpacity>
                {open && children}
            </View>
        )
    }
}
