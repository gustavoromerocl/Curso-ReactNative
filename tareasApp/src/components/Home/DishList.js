import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, FlatList, View, StyleSheet, Text, TouchableOpacity, Linking, Alert } from 'react-native'
import { baseUri, dishData, dishTitles} from '../../rawData'
import DishCard from './DishCard'
import TotalCart from './TotalCart'
import ShoppingCart from './ShoppingCart'

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 10,
        width: '100%',
    },
})



export default class DishList extends Component {
    constructor(props){
        super(props)

        this.state = {
            dishes: dishData,
            selectedDishes: [],
            modalActive: false,
        }
    }

    //dishes.filter( value, index, arregloCompleto)

    toogleModal = () => this.setState(({modalActive}) => ({modalActive: !modalActive}))
    
    selectDishes = (id) => {
        const { dishes, selectedDishes } = this.state
        const cartDish = dishes.filter((dish) => dish.id == id)
        this.setState({selectedDishes: [...selectedDishes, cartDish]})
        console.log(cartDish)
        Alert.alert(
            "¡Muy Bien!",
            "Agregado al carrito",
            [
                { text: "OK", style: "destructive" }
            ],
            { cancelable: false }
        );
    }

    
    clearCart = () => {
        Alert.alert(
            "Confirmación",
            "¿Quieres eliminar todo el carrito?",
            [
                { text: 'Borralo todo!!', onPress: () => this.setState({selectedDishes: [] })},
                { text: "Me arrepentí", onPress: () => console.log("OK Pressed"), style: "destructive" }
            ],
            { cancelable: false }
        );
    }


    loadNumberItems = () => {
        const { selectedDishes } = this.state;
        return selectedDishes.length;
    }


    render() {
        const { selectedDishes, dishes, modalActive } = this.state
        return (
            <>  
                <FlatList
                    style={styles.flatListContainer}
                    data={dishes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item:{id, title, readyInMinutes, servings, image }}) => (
                        <DishCard
                            key={title}
                            title={title}
                            readyInMinutes={readyInMinutes} 
                            servings={servings} 
                            image={image}
                            onPress={() => this.selectDishes(id)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>No hay items</Text>
                        </View>
                    )}
                />
                <TotalCart total={selectedDishes.length} onPress={this.toogleModal}/>
                <Modal
                    visible={modalActive}
                >
                    <ShoppingCart selectData={selectedDishes} style={styles.flatListContainer}/>
                </Modal>
            </>
        )
    }
}
