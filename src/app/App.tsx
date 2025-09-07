import React from 'react';
import './App.css';
import {NavBar} from "../components/nav-bar/ui/nav-bar";
import {HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import {NewsPage} from "../pages/news-page";
import {MusicPage} from "../pages/music-page";
import {SettingsPage} from "../pages/settings-page";
import {connect, Provider} from "react-redux";
import {UsersPage} from "../pages/users-page";
import {HeaderContainer} from "../components/header/header-container";
import Login from "../components/login/ui/login";
import {SideBarType, StateType} from "../shared/types";
import {compose} from "redux";
import {initializeAppTC} from "./app-reducer";
import {Preloader} from "../shared/ui/preloader/preloader";
import {store} from "./redux-store";
import {withSuspense} from "../shared/hoc";

const DialogsPage = React.lazy(() => import('../pages/dialogs-page'))
const ProfileContainer = React.lazy(() => import('../components/profile/ui/profile-container'))

type AppPropsType = {
  sideBar: SideBarType
  init: boolean
  initializeApp: () => void
}

class App extends React.Component<AppPropsType> {
  handleErrors = (promiseRejectionEvent: any) => {
    alert('some error occured')
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.handleErrors)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleErrors)
  }

  render() {
    if (!this.props.init) return <Preloader/>

    return (
        <div className="app-wrapper">
          <HeaderContainer/>
          <NavBar {...this.props.sideBar}/>
          <div className="app-wrapper-content">
            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
            <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>

            <Route path={'/dialogs'} render={withSuspense(DialogsPage)}/>
            <Route path={'/news'} render={() => <NewsPage/>}/>
            <Route path={'/music'} render={() => <MusicPage/>}/>
            <Route path={'/users'} render={() => <UsersPage/>}/>
            <Route path={'/settings'} render={() => <SettingsPage/>}/>
            <Route path={'/login'} render={() => <Login/>}/>

            <Route path={'/*'} render={() => <div>404 Page Not Found</div>}/>
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
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
}