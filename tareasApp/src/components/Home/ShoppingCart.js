import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import DishCart from './DishCart';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    containerButton1: {
        position: "absolute",
        bottom: 10,
        width: '50%',
        right: 0,
    },
    containerButton2: {
        position: "absolute",
        bottom: 10,
        width: '50%',
        left: 0,

    },
})


const ShoppingCart = ({selectData, style, onPress, cleanCart}) => {

    return (
        <View> 
            <FlatList
                style={style}
                data={selectData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item:{id, title, readyInMinutes, servings, image }}) => (
                    <DishCart
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
                <View style={styles.containerButton1}>
                    <Button
                    onPress={cleanCart}
                    title="Vaciar Carro"
                    color={colors.red}
                    />
                </View>
                <View style={styles.containerButton2}>
                <Button
                    onPress={onPress}
                    title="Volver"
                    color={colors.violet}
                />
                </View>
    
        </View>
        );
}
export default ShoppingCart;
