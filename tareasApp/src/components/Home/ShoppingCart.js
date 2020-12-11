import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';
import DishCart from './DishCart';

export default class ShoppingCart extends Component {
    constructor(props){
        super(props)
    }


    render() {
    const {style, selectData} = this.props;
    console.log(selectData)
    return (
    <View> 
        <FlatList
            style={style}
            data={selectData}
            keyExtractor={({index}) => index}
            renderItem={({item:{ title, readyInMinutes, servings, image }}) => (
                <DishCart
                    title={title}
                    readyInMinutes={readyInMinutes} 
                    servings={servings} 
                    image={image}
                />
            )}
            ListEmptyComponent={() => (
                <View>
                    <Text>No hay items</Text>
                </View>
            )}
        />
    </View>
    );
  }
}

ShoppingCart.propTypes = {
    style: PropTypes.shape({}),
    selectData: PropTypes.array,
    onPress: PropTypes.func,
}

ShoppingCart.defaultProps = {
    style: {},
    selectData: [],
    onPress: () => {},
}
