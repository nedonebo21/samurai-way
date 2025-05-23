import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/nav-bar/nav-bar";
import {ProfilePage} from "./pages/profile-page";
import {DialogsPage} from "./pages/dialogs-page";
import {BrowserRouter, Route} from "react-router-dom";
import {NewsPage} from "./pages/news-page";
import {MusicPage} from "./pages/music-page";
import {SettingsPage} from "./pages/settings-page";
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
                    <Route path={'/dialogs'} render={() => <DialogsPage {...dialogsPage} />}/>
                    <Route path={'/profile'} render={() => <ProfilePage updateNewPostText={updateNewPostText} addPost={addPost} {...profilePage} />}/>
                    <Route path={'/news'} render={() => <NewsPage/>}/>
                    <Route path={'/music'} render={() => <MusicPage/>}/>
                    <Route path={'/settings'} render={() => <SettingsPage/>}/>
                </div>
            </div>
    )
}