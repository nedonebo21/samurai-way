import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../components/profile/model/profile-reducer";
import {dialogsReducer} from "../components/dialogs/model/dialogs-reducer";
import {sidebarReducer} from "../components/nav-bar/model/sidebar-reducer";
import {usersReducer} from "../components/users/model/users-reducer";
import {authReducer} from "../components/login/model/auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})
export type StoreType = typeof store
export type AppStateType = ReturnType<typeof store.getState>
export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store