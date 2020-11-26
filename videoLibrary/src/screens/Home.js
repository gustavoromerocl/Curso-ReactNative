import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import MovieList from '../components/MovieList';

//Home creado como componente funcional
const Home = ({movies}) => (
    <>
    <Header title={'CARTELERA'}></Header>
    <MovieList movies={movies}/>
    </>
)

export default Home;

/*
export default class Home extends PureComponent{
    constructor(props){
        super(props)
    }

    render() {
        const {movies} = this.props;
        return (

        )
    }
}
*/

Home.propTypes = {
    movies: PropTypes.array,
};

Home.defaultProps = {
    movies: [],
};

