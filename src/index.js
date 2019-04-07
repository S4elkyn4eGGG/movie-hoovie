import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Router, Route} from "react-router-dom";
import {composeWithDevTools} from "redux-devtools-extension";

import reducers from "./redux/reducers";
import {historyMiddleware} from "./redux/middlewares/historyMiddleware";
import {history} from "./history";

import App from "./App";
import TopMenu from "./components/TopMenu";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(historyMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <TopMenu />
            <Route path={"/"} component={App} exact />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
