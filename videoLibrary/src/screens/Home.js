import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import MovieList from '../components/MovieList';



export default class Home extends PureComponent{
    constructor(props){
        super(props)
    }

    render() {
        const {movies} = this.props;
        return (
            <>
                <Header title={'CARTELERA'}></Header>
                <MovieList movies={movies}/>
            </>
        )
    }
}

Home.propTypes = {
    movies: PropTypes.array,
};

Home.defaultProps = {
    movies: [],
};

