import {DispatchType, PostType, ProfilePageType, ProfileType} from "../../../shared/types/state-types";
import {
  ActionsType,
  AddPostActionType,
  SetUserProfileActionType,
  SetUserStatusActionType,
} from "../../../shared/types/action-types";
import {profileAPI} from "../../../shared/api/api";

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
export const getUserProfileThunkCreator = (userId: number) => {
  return (dispatch: DispatchType) => {
    profileAPI.getProfile(userId).then(res => {
      dispatch(setUserProfile(res.data))
    })
  }
}
export const getUserStatusThunkCreator = (userId: number) => {
  return (dispatch: DispatchType) => {
    profileAPI.getStatus(userId).then(res => {
      dispatch(setUserStatus(res.data))
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