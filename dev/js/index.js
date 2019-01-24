import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import  createLogger  from "redux-logger";
import allReducers from "./reducers/AllReducers";
import thunk from 'redux-thunk';
import App from './app';

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__


const logger = createLogger();
const store = createStore(
    allReducers,
    preloadedState,
    applyMiddleware(thunk,logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
