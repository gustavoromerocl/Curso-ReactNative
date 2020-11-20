import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet } from 'react-native'
import MovieCard from './MovieCard';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
  });

export default class MovieList extends Component {

    render() {
        const {movies} = this.props;
        return (
            <FlatList
            style={styles.container}
                data={movies}
                keyExtractor={({poster}) => poster}
                showsHorizontalScrollIndicator={false}
                renderItem={({item : {posterurl, title, year, imdbRating} }) => (
                    <MovieCard
                        posterUrl={posterurl}
                        title={title}
                        year={year}
                        imdbRating={imdbRating}
                    />
                )}
            />
        )
    }
}
