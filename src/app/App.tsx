import React from 'react';
import './App.css';
import {NavBar} from "../components/nav-bar/nav-bar";
import {DialogsPage} from "../pages/dialogs-page";
import {Redirect, Route} from "react-router-dom";
import {NewsPage} from "../pages/news-page";
import {MusicPage} from "../pages/music-page";
import {SettingsPage} from "../pages/settings-page";
import {useStore} from "react-redux";
import {UsersPage} from "../pages/users-page";
import {StoreType} from "./redux-store";
import {ProfileContainer} from "../components/profile/profile-container";
import {HeaderContainer} from "../components/header/header-container";
import {Login} from "../components/login/login";


export const App = () => {
  const store: StoreType = useStore()
  if (!store) return null

  const state = store.getState()
  return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <NavBar {...state.sideBar}/>
        <div className="app-wrapper-content">
          <Route path={'/'} render={() => <Redirect to={'/profile'}/>}></Route>
          <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>

          <Route path={'/dialogs'} render={() => <DialogsPage/>}/>
          <Route path={'/news'} render={() => <NewsPage/>}/>
          <Route path={'/music'} render={() => <MusicPage/>}/>
          <Route path={'/users'} render={() => <UsersPage/>}/>
          <Route path={'/settings'} render={() => <SettingsPage/>}/>
          <Route path={'/login'} render={() => <Login/>}/>
        </div>
      </div>
  )
}