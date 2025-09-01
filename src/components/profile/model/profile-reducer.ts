import {DispatchType, PostType, ProfilePageType, ProfileType, SaveAvatarSuccessActionType} from "../../../shared/types";
import {
  ActionsType,
  AddPostActionType,
  SetUserProfileActionType,
  SetUserStatusActionType,
} from "../../../shared/types";
import {profileAPI} from "../../../shared/api";
import {FormDataProfileType} from "../ui/profile-info/description/profile-status/profile-data-form/profile-data-form";
import {AppStateType, StoreType} from "../../../app/redux-store";
import {stopSubmit} from "redux-form";

let initialState: ProfilePageType = {
  postsData: [
    {id: "1", message: "Yo", likes: 12},
    {id: "2", message: "Its my social network!!!", likes: 73},
    {id: "3", message: "I hope serega pirat will be my fan", likes: 999},
  ],
  profile: {
    aboutMe: '',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    fullName: '',
    lookingForAJob: true,
    lookingForAJobDescription: '',
    photos: {
      large: null,
      small: null,
    },
    userId: 32493,
  },
  status: '',
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost: PostType = {id: "5", message: action.newPost, likes: 0}
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      }
    case 'SET-USER-PROFILE':
      return {...state, profile: action.profile}
    case 'SET-STATUS':
      return {...state, status: action.status}
    case "SAVE-AVATAR-SUCCES":
      return {...state, profile: {...state.profile, photos: action.file}}
  }
  return state
}

export const addPostAC = (newPost: string): AddPostActionType => (
    {type: 'ADD-POST', newPost}
)
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => (
    {type: 'SET-USER-PROFILE', profile}
)
export const setUserStatus = (status: string): SetUserStatusActionType => (
    {type: 'SET-STATUS', status}
)
export const saveAvatarSuccess = (file: File): SaveAvatarSuccessActionType => (
    {type: 'SAVE-AVATAR-SUCCES', file}
)

export const getUserProfileTC = (userId: number) => async (dispatch: DispatchType) => {
  let res = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(res.data))
}

export const getUserStatusTC = (userId: number) => async (dispatch: DispatchType) => {
  let res = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(res.data))
}

export const updateStatusTC = (status: string) => async (dispatch: DispatchType) => {
  let res = await profileAPI.updateStatus(status)

  if (res.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export const saveAvatarTC = (file: File) => async (dispatch: DispatchType) => {
  let res = await profileAPI.saveAvatar(file)
  if (res.data.resultCode === 0) {
    dispatch(saveAvatarSuccess(res.data.data.photos))
  }
}

export const saveProfileTC = (formData: FormDataProfileType) => async (dispatch: DispatchType, getState: () => AppStateType) => {
  const userId = getState().auth.userId
  let res = await profileAPI.saveProfile(formData)
  if (res.data.resultCode === 0) {
    if (userId){
      dispatch(getUserProfileTC(userId))
    }
  } else {
    let message: string = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
    dispatch(stopSubmit('edit-profile', {_error: message}))
    return Promise.reject(message)
  }
}
