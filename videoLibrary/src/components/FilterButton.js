import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
    container: {
    }
})

export default class FilterButton extends Component {


    render() {
        const {onPress} = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <Icon name="filter" color="red" size={30}/>
            </TouchableOpacity>
        )
    }
}
