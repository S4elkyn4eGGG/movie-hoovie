import {routerMiddleware} from "react-router-redux";
import {history} from "../../history";

export const historyMiddleware = routerMiddleware(history);
