import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'

const styles  = StyleSheet.create({
    container: {
        margin: 20,
        padding: 10,
        backgroundColor: "#3498db",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        color: "white",
        marginBottom: 20
    },
    textInput: {
        padding: 5,
        backgroundColor: "white",
    },
    listItem: {
        marginVertical: 10,
    },
    listItemText: {
        fontSize: 17,
        color: "white"
    }
})


export default class InputList extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: [],
            currentText: null,
        }
    }

    setCurrentText = (text) => this.setState({currentText: text})

    saveText = () => {
        const { list, currentText } = this.state

        if(!currentText.length){
            return;
        }

        const newList = [... list, currentText]
        this.setState({ list: newList, currentText: ""})
    }

    //Metodo de react para generar el contenido de las alertas, incluyendo botones.-
    deleteItem = (listItem) => {
        Alert.alert('Warning', `Quieres borrar "${listItem}"`, [
            {
                text: "Sí, quiero",
                onPress: () => this.confirmDelete(listItem)
            },
            {
                text: "No quiero",
            },
        ])
    }

    //metodo que recorre el arreglo y trae todos los elementos excepto el que se va a borrar, para dejarlo fuera de la nueva lista
    confirmDelete = (listItem) => {
        const { list } = this.state;

        const newList = list.filter(
            (currentListItem) => currentListItem != listItem
        )

        this.setState({list: newList})
    }

    //Cuando se retorna un componente se gestiona con return, las funciones anonimas retornan siempre y cuando se usen parentesis ()
    //Para el key se utiliza otro tipo de comillas
    renderList = (listItem, index) => (
        <TouchableOpacity
            onPress={ () => this.deleteItem(listItem)}
            key={`listItem-${index}`}
            style={styles.listItem}
        >
            <Text style={styles.listItemText}>{listItem}</Text>
        </TouchableOpacity>
    )

    //secureTextEntry
    //list.map(value, index, list) 
    render() {
        const { currentText, list } = this.state;
        const listRenderElements = list.map(this.renderList)

        console.log("listRenderElements: ", listRenderElements)

        return (
            <View style={styles.container}> 
                <Text style={styles.title}>Lista</Text>
                <TextInput 
                    value={currentText}
                    style={styles.textInput}
                    placeholder="¿Que quieres agregar a la lista?"
                    onChangeText={this.setCurrentText}
                    onSubmitEditing={this.saveText}
                    keyboardType="email-address"
                />
                {listRenderElements}
            </View>
        );
    }
}
