import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";

export type FuncPostType = {
    addPost: () => void
    updateNewPostText: (newText:string) => void
}
export const App = (props: StateType & FuncPostType) => {
    const {dialogsPage, profilePage, sideBar, addPost, updateNewPostText} = props
    return (

            <div className="app-wrapper">
                <Header />
                <NavBar {...sideBar}/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'} render={() => <Dialogs {...dialogsPage} />}/>
                    <Route path={'/profile'} render={() => <Profile updateNewPostText={updateNewPostText} addPost={addPost} {...profilePage} />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
    )
}