import React from 'react';
import './App.css';
import {NavBar} from "../components/nav-bar/ui/nav-bar";
import {DialogsPage} from "../pages/dialogs-page";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {NewsPage} from "../pages/news-page";
import {MusicPage} from "../pages/music-page";
import {SettingsPage} from "../pages/settings-page";
import {connect, Provider} from "react-redux";
import {UsersPage} from "../pages/users-page";
import {ProfileContainer} from "../components/profile/ui/profile-container";
import {HeaderContainer} from "../components/header/header-container";
import Login from "../components/login/ui/login";
import {SideBarType, StateType} from "../shared/types";
import {compose} from "redux";
import {initializeAppTC} from "./app-reducer";
import {Preloader} from "../shared/ui/preloader/preloader";
import {store} from "./redux-store";

type AppPropsType = {
  sideBar: SideBarType
  init: boolean
  initializeApp: () => void
}

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.init) return <Preloader/>

    return (
        <div className="app-wrapper">
          <HeaderContainer/>
          <NavBar {...this.props.sideBar}/>
          <div className="app-wrapper-content">
            <Route path={'/'} render={() => <Redirect to={'/profile'}/>}/>
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
}

const mapStateToProps = (state: StateType) => (
    {
      sideBar: state.sideBar,
      init: state.app.init
    }
)

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp: initializeAppTC})
)(App)

export const SamuraiJsApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}