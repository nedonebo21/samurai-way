import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";

export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    )
}