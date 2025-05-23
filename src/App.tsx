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
import {StoreType} from "./redux/state";

type Props = {
    store: StoreType
}
export const App = (props: Props) => {
    const {store} = props
    const state = store.getState()
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar {...state.sideBar}/>
            <div className="app-wrapper-content">
                <Route
                    path={'/dialogs'}
                    render={() =>
                        <DialogsPage {...state.dialogsPage}/>
                    }/>
                <Route
                    path={'/profile'}
                    render={() =>
                        <ProfilePage
                            updateNewPostText={store.updateNewPostText.bind(store)}
                            addPost={store.addPost.bind(store)}
                            {...state.profilePage}
                        />
                    }/>
                <Route
                    path={'/news'}
                    render={() =>
                        <NewsPage/>
                    }/>
                <Route
                    path={'/music'}
                    render={() =>
                        <MusicPage/>
                    }/>
                <Route
                    path={'/settings'}
                    render={() =>
                        <SettingsPage/>
                    }/>
            </div>
        </div>
    )
}