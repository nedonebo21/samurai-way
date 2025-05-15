import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, state} from './redux/state'

ReactDOM.render(
    <App
        addPost={addPost}
        {...state}
    />,
    document.getElementById('root')
);