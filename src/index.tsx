import './shared/styles/global.css';
import {store} from "./app/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
