import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchMovies } from "../../actions/movies";
import MoviesList from '../MoviesList'

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return(
            <div>
                <MoviesList 
                    movies={this.props.movies} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

const mapDispachToProps = {
    fetchMovies
};

export default connect(mapStateToProps, mapDispachToProps)(MoviesPage);