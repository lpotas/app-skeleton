import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import reducers from './reducers/index';
import promise from 'redux-promise-middleware';
import App from './main/App';


export const store = createStore(reducers, {}, applyMiddleware(promise(), logger, thunk));

const Root = () => (
    <App />
);


ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('root'));
