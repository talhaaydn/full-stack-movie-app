import axios from 'axios';


export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";

export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";

export function onNewMovieSubmit(data){
    const newMovie = {
        title: data.title,
        cover: data.cover
    }
    return dispatch => {
        dispatch({
            type: 'NEW_MOVIE',
            payload: axios.post('movies', newMovie).then(response => response.data)
        })
    }
}

export function fetchMovie(id) {
    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIE',
            payload: axios.get(`http://localhost:5000/api/movies/${id}`).then(response => response.data)
        })
    }
}

export function onUpdateMovieSubmit(data){
    const updateMovie = {
        title: data.title,
        cover: data.cover
    }
    return dispatch => {
        dispatch({
            type: 'UPDATE_MOVIE',
            payload: axios.put(`http://localhost:5000/api/movies/${data.id}`, updateMovie).then(response => response.data)
        })
    }
}