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
    
    
    return (
    <View> 
        <FlatList
            style={style}
            data={selectData}
            keyExtractor={(item) => console.log(item.id)}
            renderItem={({item : {id}}) => console.log(id)}
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
