import { 
    FETCH_MOVIES_PENDING,
    FETCH_MOVIES_FULFILLED, 
    FETCH_MOVIES_REJECTED,
    
    DELETE_MOVIE_PENDING,
    DELETE_MOVIE_FULFILLED, 
    DELETE_MOVIE_REJECTED
} from "../actions/movies";

const initialState = {
    fetching: false,
    movies: [],
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        // FETCH_MOVIES
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_MOVIES_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false
            }
        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
        
        // DELETE_MOVIE
        case DELETE_MOVIE_PENDING:
            return {
                ...state
            }
        case DELETE_MOVIE_FULFILLED:
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== action.payload.id),
            }
        case DELETE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}