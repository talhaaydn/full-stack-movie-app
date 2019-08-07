import React from 'react';
import PropTypes from "prop-types";
import { Grid } from 'semantic-ui-react'
import { HashLoader } from "react-spinners";

import MovieCard from "./MovieCard";
import { loadingBarStyle } from "../helpers/styleHelper";

const MoviesList = props => {
    const { movies, deleteMovie } = props;

    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const listMovies = (
        <div>
            <HashLoader 
                css={loadingBarStyle}
                color={'#67CDC5'}
                loading={movies.fetching}
            />
            { 
                movies.error.response ? 
                    <p>Error! We can't show movies.</p> : 
                    <Grid stackable columns={3}>
                        { movies.movies.map(movie => <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} /> ) }
                    </Grid>
            }
        </div>
    );    

    return (
        <div>
            { movies.length === 0 ? emptyMessage : listMovies }
        </div>        
    );
};

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
}

export default MoviesList;