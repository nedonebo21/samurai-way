import './shared/styles/global.css';
import {store} from "./redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)