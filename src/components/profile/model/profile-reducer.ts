import {DispatchType, PostType, ProfilePageType, ProfileType} from "../../../shared/types/state-types";
import {
  ActionsType,
  AddPostActionType,
  SetUserProfileActionType,
  SetUserStatusActionType,
  UpdatePostTextActionType
} from "../../../shared/types/action-types";
import {profileAPI} from "../../../shared/api/api";

let initialState: ProfilePageType = {
  postsData: [
    {id: "1", message: "Yo", likes: 12},
    {id: "2", message: "Its my social network!!!", likes: 73},
    {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
  ],
  profile: {
    aboutMe: 'Joskiy 4el',
    contacts: {
      facebook: null,
      website: 'pornhub.com',
      vk: 'Контора пидарасов',
      twitter: null,
      instagram: 'залупа.com',
      youtube: null,
      github: 'https://github.com/nedonebo21',
      mainLink: null
    },
    fullName: 'Stanislav',
    lookingForAJob: true,
    lookingForAJobDescription: 'yo',
    photos: {
      large: 'https://i.ytimg.com/vi/qbxteW4kI6k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHEgOyhyMA8=&rs=AOn4CLDiLrIP6bTF4-NrmKQH970OwjNRsg',
      small: 'https://i.ytimg.com/vi/qbxteW4kI6k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHEgOyhyMA8=&rs=AOn4CLDiLrIP6bTF4-NrmKQH970OwjNRsg',
    },
    userId: 32493,
  },
  newPostText: 'Yo',
  status: 'qwe',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost: PostType = {id: "5", message: state.newPostText, likes: 0}
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newPostText: ''
      }
    case 'UPDATE-NEW-POST-TEXT':
      const newPostText = action.newText
      return {...state, newPostText}
    case 'SET-USER-PROFILE':
      return {...state, profile: action.profile}
    case 'SET-STATUS':
      return {...state, status: action.status}
  }
  return state
}

export const addPostAC = (): AddPostActionType => (
    {type: 'ADD-POST'}
)
export const updatePostTextAC = (text: string): UpdatePostTextActionType => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: text}
)
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => (
    {type: 'SET-USER-PROFILE', profile}
)
export const setUserStatus = (status: string): SetUserStatusActionType => (
    {type: 'SET-STATUS', status}
)
export const getUserProfileThunkCreator = (userId: number) => {
  return (dispatch: DispatchType) => {
    profileAPI.getProfile(userId).then(res => {
      dispatch(setUserProfile(res.data.data))
    })
  }
}
export const getUserStatusThunkCreator = (userId: number) => {
  return (dispatch: DispatchType) => {
    profileAPI.getStatus(userId).then(res => {
      dispatch(setUserStatus(res.data.data))
    })
  }
}
export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: DispatchType) => {
    profileAPI.updateStatus(status).then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  }
}