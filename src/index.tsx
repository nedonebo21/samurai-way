import './index.css';
import {state, subscriber} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, StateType, updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                updateNewPostText={updateNewPostText}
                addPost={addPost}
                {...state}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree()
subscriber(rerenderEntireTree)