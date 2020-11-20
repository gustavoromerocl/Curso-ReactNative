import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Rating from './Rating';

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: '#ecf0f1',
        marginBottom: 20,
      },
      image: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 300,
        width: '100%',
        backgroundColor: '#34495e',
      },
      textColor: {
        color: '#34495e',
      },
      name: {
        fontSize: 18,
        padding: 10,
      },
      description: {
        fontSize: 15,
        padding: 10,
      },
      rating: {
        fontSize: 25,
        fontWeight: 'bold',
      },
      subtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      heart: {
        position: 'absolute',
        left: 20,
        top: 20,
        borderRadius: 30,
        padding: 5,
        backgroundColor: 'white',
      },
});

export default class MovieCard extends Component {
    constructor(props){
        super(props)

        Icon.loadFont();
        this.state = {
            validImage: true,
            starRating: 1,
        };
    }

    starRatingSet = (index) => this.setState({starRating: index});

    invalid = () => this.setState({validImage: false});

    render() {
        const { posterUrl, title, year, imdbRating } = this.props;
        const { validImage, starRating } = this.state;
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.image} 
                    source={validImage ? {uri: posterUrl} : require('../assets/no_image_available.jpg')}
                    resizeMode="cover"
                    onError={this.invalid}
                />
                <Text style={[styles.name, styles.textColor]}>{title}</Text>
                <View style={styles.subtitle}>
                    <Text style={[styles.description, styles.textColor]}>{year}</Text>
                    <Rating 
                      star 
                      starCount={10}
                      starRating={starRating}
                      ratingPress={this.starRatingSet}/>
                    <Text style={[styles.description, styles.textColor, styles.rating]}>{imdbRating}</Text>
                    <Rating heart/>
                </View>

            </View>
        )
    }
}
