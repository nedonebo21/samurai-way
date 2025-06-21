import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/nav-bar/nav-bar";
import {ProfilePage} from "./pages/profile-page";
import {DialogsPage} from "./pages/dialogs-page";
import {Route} from "react-router-dom";
import {NewsPage} from "./pages/news-page";
import {MusicPage} from "./pages/music-page";
import {SettingsPage} from "./pages/settings-page";
import {useStore} from "react-redux";
import {UsersPage} from "./pages/users-page";
import {StoreType} from "./redux/redux-store";


export const App = () => {
    const store: StoreType = useStore()
    if (!store) return null

    const state = store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar {...state.sideBar}/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() => <DialogsPage/>}/>
                <Route path={'/profile'} render={() => <ProfilePage/>}/>
                <Route path={'/news'} render={() => <NewsPage/>}/>
                <Route path={'/music'} render={() => <MusicPage/>}/>
                <Route path={'/users'} render={() => <UsersPage/>}/>
                <Route path={'/settings'} render={() => <SettingsPage/>}/>
            </div>
        </div>
    )
}