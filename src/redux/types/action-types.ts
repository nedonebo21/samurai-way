import {User} from "./state-types";


export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    users: User[]
}
export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    pageNumber: number
}
export type SetTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalCount: number
}
export type ToggleFetchingActionType = {
    type: 'TOGGLE-FETCHING'
    isFetching: boolean
}

export type ActionsType = AddPostActionType
    | UpdatePostTextActionType
    | AddMessageActionType
    | UpdateMessageTextType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleFetchingActionType
