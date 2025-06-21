import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/nav-bar/nav-bar";
import {DialogsPage} from "./pages/dialogs-page";
import {Redirect, Route} from "react-router-dom";
import {NewsPage} from "./pages/news-page";
import {MusicPage} from "./pages/music-page";
import {SettingsPage} from "./pages/settings-page";
import {useStore} from "react-redux";
import {UsersPage} from "./pages/users-page";
import {StoreType} from "./redux/redux-store";
import {ProfileContainer} from "./components/profile/profile-container";


export const App = () => {
    const store: StoreType = useStore()
    if (!store) return null

    const state = store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar {...state.sideBar}/>
            <div className="app-wrapper-content">
                <Route path={'/'} render={() => <Redirect to={'/profile'}/>}></Route>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>

                <Route path={'/dialogs'} render={() => <DialogsPage/>}/>
                <Route path={'/news'} render={() => <NewsPage/>}/>
                <Route path={'/music'} render={() => <MusicPage/>}/>
                <Route path={'/users'} render={() => <UsersPage/>}/>
                <Route path={'/settings'} render={() => <SettingsPage/>}/>
            </div>
        </div>
    )
}