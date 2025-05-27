import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/nav-bar/nav-bar";
import {ProfilePage} from "./pages/profile-page";
import {DialogsPage} from "./pages/dialogs-page";
import { Route} from "react-router-dom";
import {NewsPage} from "./pages/news-page";
import {MusicPage} from "./pages/music-page";
import {SettingsPage} from "./pages/settings-page";
import {StoreType} from "./redux/redux-store";

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
                        <DialogsPage
                            dispatch={store.dispatch.bind(store)}
                            {...state.DialogsPage}/>
                    }/>
                <Route
                    path={'/profile'}
                    render={() =>
                        <ProfilePage
                            store={store}
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