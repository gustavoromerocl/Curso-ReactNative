import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import DishCart from './DishCart';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    containerButton: {
        paddingHorizontal:10,
        marginTop: 20
    }
})

export default class ShoppingCart extends Component {
    constructor(props){
        super(props)
    }


    render() {
    const {style, selectData, onPress, cleanCart} = this.props;
    //console.log("SelectedData:",selectData)
    
    return (
    <View> 
        <FlatList
            style={style}
            data={selectData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item:{id, title, readyInMinutes, servings, image }}) => (
                <DishCart
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
        <View style={styles.containerButton}>
            <Button
            onPress={cleanCart}
            title="Vaciar Carro"
            color={colors.red}
            />
        </View>
        <View style={styles.containerButton}>
          <Button
            onPress={onPress}
            title="Volver"
            color={colors.violet}
          />
        </View>

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
