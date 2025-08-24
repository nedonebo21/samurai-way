import {DispatchType, PostType, ProfilePageType, ProfileType} from "../../../shared/types";
import {
  ActionsType,
  AddPostActionType,
  SetUserProfileActionType,
  SetUserStatusActionType,
} from "../../../shared/types";
import {profileAPI} from "../../../shared/api";

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
