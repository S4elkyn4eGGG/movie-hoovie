import {createReducer} from "../createReducer";
import {LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE} from "../actionTypes";

const initialState = {};

export const moviesReducer = createReducer(initialState, {
    [LOAD_MOVIES_SUCCESS]: (state, {response}) => {
        return {
            ...state,
            movies: response,
        };
    },
});
