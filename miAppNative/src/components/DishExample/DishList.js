import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'
import HorizontalScroll from '../HorizontalScroll'
import { baseUri, dishData, dishTitles} from '../../rawData'
import DishCard from './DishCard'

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
            selectedDishes: []
        }
    }

    //dishes.filter( value, index, arregloCompleto)
    selectDishes = (name) => {
        const { dishes } = this.state;
        const filteredDishes = dishes.filter( (dish) => dish.cuisine === name);

        //console.log(filteredDishes)

        this.setState({ selectedDishes: filteredDishes})
    }



    render() {
        const { selectedDishes } = this.state
        return (
            <>
                <HorizontalScroll onPress={this.selectDishes}/>
                <FlatList
                    style={styles.flatListContainer}
                    data={selectedDishes}
                    keyExtractor={({id}) => id.toString()}
                    renderItem={({item:{ title, readyInMinutes, servings, image, sourceUrl }}) => (
                        <DishCard
                            title={title}
                            readyInMinutes={readyInMinutes} 
                            servings={servings} 
                            image={image}
                            sourceUrl={sourceUrl}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>No hay items</Text>
                        </View>
                    )}
                />
            </>
        )
    }
}
