import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, TouchableOpacity, View, Modal, Text, SafeAreaView } from 'react-native'
import MovieCard from './MovieCard';
import FilterButton from './FilterButton';
import Filters from './filters';

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
    }
  });

export default class MovieList extends Component {
    constructor(props){
        super(props)

        this.state = {
            movies: props.movies,
            modalActive: false,
            moviesGenres: [],
        }
    }

    componentDidMount = () => {
        this.setGenresData();
    }

    applyFilter = (genre) => {
        const {movies} = this.props;
        const filteredMovies = movies.filter((movie) =>
          movie.genres.includes(genre),
        );
        this.setState({movies: filteredMovies, modalActive: false});
      };

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
        this.setState({movies, modalActive: false});
    };

    toggleModal = () => this.setState( ({modalActive}) => ({modalActive: !modalActive})  )

    render() {
        const {modalActive, movies, moviesGenres} = this.state;
        return (
            <>
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
                    <View>
                        <TouchableOpacity
                            onPress={this.toggleModal}
                            style={styles.closeModal}
                        >
                            <Text style={{color: "white"}}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.clearFilters}
                            style={{
                                padding: 10,
                                backgroundColor: '#e74c3c',
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}>
                            <Text style={{color: 'white'}}>Limpiar Filtro</Text>
                        </TouchableOpacity>

                    </View>
                    </SafeAreaView>
                </Modal>
            </>
        )
    }
}
