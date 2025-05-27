import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";



let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    sideBar: SidebarReducer
})

export type StoreType = typeof store
export let store = createStore(reducers)