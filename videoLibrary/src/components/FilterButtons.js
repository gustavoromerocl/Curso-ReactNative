import React, { PureComponent } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
    ModalFiltterButton: {
        padding: 10,
        backgroundColor: '#e74c3c',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        color: "white"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})

const FilterButtons = ({toggleModal, clearFilters}) => (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={toggleModal}
            style={styles.ModalFiltterButton}
        >
            <Text style={styles.text}>Volver</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={clearFilters}
            style={styles.ModalFiltterButton}>
            <Text style={styles.text}>Limpiar Filtro</Text>
        </TouchableOpacity>
    </View>
)

export default FilterButtons;