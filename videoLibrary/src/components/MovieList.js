import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, TouchableOpacity, View, Modal, Text, SafeAreaView } from 'react-native'
import MovieCard from './MovieCard';
import FilterButton from './FilterButton';
import Filters from './Filters';
import FilterButtons from './FilterButtons';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    filterButton: {
        position: "absolute",
        bottom: '5%',
        right: '5%',
        backgroundColor: "#f1c40f",
        borderRadius: 30,
        padding: 10,
    },
    closeModal: {
        backgroundColor: "red",
        alignSelf: "center",
        borderRadius: 75,
        padding: 15,
    },

  });

export default class MovieList extends PureComponent {
    flatListRef = null;

    constructor(props){
        super(props)

        this.state = {
            movies: props.movies,
            modalActive: false,
            moviesGenres: [],
        };
    };

    componentDidMount = () => {
        this.setGenresData();
    }

    applyFilter = (genre) => {
        const {movies} = this.props;
        const filteredMovies = movies.filter((movie) =>
          movie.genres.includes(genre),
        );
        this.setState(
            {movies: filteredMovies, modalActive: false},
            this.movieListScrollToTop,
        );
    };

    //metodo que utiliza la propiedad ref para volver la lista al index 0 cada vez que se llame
    movieListScrollToTop = () =>
        this.flatListRef.scrollToOffset({animated: true, offset: 0});

    //Iteracion sobre el array movies, mediante el metodo reduce se itera sobre cada elemento y se guarda el genero en un nuevo array
    setGenresData = () =>{
        const {movies} = this.state;

        const arrayData = movies.reduce( (genresTypes, movie) => {
            return[... genresTypes, ... movie.genres]
        }, []) 

        //metodo set elimina los elementos repetidos de un arreglo
        const genresSet = new Set(arrayData)
        //console.log(genresSet);
        this.setState({moviesGenres: [ ... genresSet]})
    }


    clearFilters = () => {
        const {movies} = this.props;
        this.setState({movies, modalActive: false},
        this.movieListScrollToTop,
        );
    };

    toggleModal = () => this.setState( ({modalActive}) => ({modalActive: !modalActive})  )

    render() {
        const {modalActive, movies, moviesGenres} = this.state;
        return (
            <>
            <FlatList
                ref={(movieListFlatListRef) => 
                    (this.flatListRef =  movieListFlatListRef)
                }
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
                <View style={styles.filterButton}>
                    <FilterButton onPress={this.toggleModal}/>
                </View>
                <Modal
                    visible={modalActive}
                    animationType="slide"
                >
                <SafeAreaView>
                    <Filters 
                        moviesGenres={moviesGenres}
                        movieGenreOnPress={this.applyFilter}
                        />
                    <FilterButtons
                        toggleModal={this.toggleModal}
                        clearFilters={this.clearFilters}
                    />
                </SafeAreaView>
                </Modal>
            </>
        )
    }
}
