import {AuthType, ProfileType, UserType} from "./state-types";


export type AddPostActionType = {
  type: 'ADD-POST'
  newPost: string
}
export type AddMessageActionType = {
  type: 'ADD-MESSAGE'
  message: string
}
export type SetUsersActionType = {
  type: 'SET-USERS'
  users: UserType[]
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
export type SetUserProfileActionType = {
  type: 'SET-USER-PROFILE'
  profile: ProfileType
}

export type SetUserStatusActionType = {
  type: 'SET-STATUS'
  status: string
}
export type SaveAvatarSuccessActionType = {
  type: 'SAVE-AVATAR-SUCCES'
  file: File
}

export type SetAuthUserDataType = {
  type: 'SET-USER-DATA'
  data: {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
  }
}
export type ToggleFollowingProgressType = {
  type: 'TOGGLE-FOLLOWING-PROGRESS'
  isFetching: boolean
  userId: number
}
export type SetInitType = {
  type: 'SET-INIT'
}

export type ActionsType = AddPostActionType
    | AddMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleFetchingActionType
    | SetUserProfileActionType
    | SetAuthUserDataType
    | ToggleFollowingProgressType
    | SetUserStatusActionType
    | SetInitType | SaveAvatarSuccessActionType
