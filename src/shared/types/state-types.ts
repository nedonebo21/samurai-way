import {store, StoreType} from "../../app/redux-store";
import {ThunkDispatch} from "redux-thunk";
import {ActionsType} from "./action-types";
import {FormAction} from "redux-form";

export type UserDataType = {
    id: string
    name: string
    imgUrl: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    avatarUrl: string
    photos: { small: string, large: string }
    location: { city: string, country: string }
}

type UsersOnlineType = {
    id: string
    name: string
    isOnline: boolean
    imgUrl: string
}

type ProfileContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}
type ProfilePhotosType = {
    large: string | null
    small: string | null
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: ProfilePhotosType
    userId: number
}

export type ProfilePageType = {
    postsData: PostType[]
    profile: ProfileType
    status: string
}
export type MessagesPageType = {
    usersDialogsData: UserDataType[]
    messagesData: MessageType[]
}
export type SideBarType = {
    usersOnlineData: UsersOnlineType[]
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AppType = {
    init: boolean
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sideBar: SideBarType
    usersPage: UsersPageType
    auth: AuthType
    app: AppType
}
export type DispatchType = ThunkDispatch<StoreType, unknown, ActionsType | FormAction>