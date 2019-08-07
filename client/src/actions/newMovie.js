import axios from 'axios';


export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

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