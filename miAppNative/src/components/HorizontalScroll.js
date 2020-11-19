import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { dishTitles } from '../rawData'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: "green"
    },
    buttons: {
        padding: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    }
});


export default class HorizontalScroll extends Component {
    constructor(props){
        super(props)
        this.state = {
            hola: null,
        }
    }

    render() {
        const {style, item, onPress} = this.props;
        //consultar si el arreglo tiene contenido
        console.log(item ? true : false)
        return (
            <View style={[styles.container, style]}> 
                <FlatList
                    data={item || dishTitles}
                    keyExtractor={({ id }) => id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item: { id, name} }) => (
                        <TouchableOpacity
                            onPress={() => onPress(name)}
                            style={styles.buttons}
                        >
                            <Text style={styles.buttonText}>{name}</Text>
                        </TouchableOpacity>
                    )}
                >

                </FlatList>
            </View>
        )
    }
}

HorizontalScroll.propTypes = {
    style: PropTypes.shape({}),
    items: PropTypes.array,
    onPress: PropTypes.func,
}

//retona un valor vacio para evitar que la aplicación colapse
HorizontalScroll.defaultProps = {
    style: {},
    items: [],
    onPress: () => {},
}