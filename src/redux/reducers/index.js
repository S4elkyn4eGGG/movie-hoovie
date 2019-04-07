import {combineReducers} from "redux";
import {moviesReducer} from "./movies";
import {routerReducer} from "react-router-redux";

const reducers = {
    router: routerReducer,
    moviesReducer,
};

export default combineReducers(reducers);
