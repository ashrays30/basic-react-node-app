import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import  createLogger  from "redux-logger";
import allReducers from "./reducers/AllReducers";
import thunk from 'redux-thunk';
import { getInitialState } from "./store/InitialState";
import App from './app';

const initialState = getInitialState();

const logger = createLogger();
const store = createStore(
    allReducers,
    initialState,
    applyMiddleware(thunk,logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
