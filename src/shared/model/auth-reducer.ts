import {ActionsType, SetAuthUserDataType} from "../types/action-types";
import {AuthType, DispatchType} from "../types/state-types";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let initialState: AuthType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}
export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
  switch (action.type) {
    case 'SET-USER-DATA':
      return {...state, ...action.data}
  }
  return state
}

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => (
    {type: 'SET-USER-DATA', data: {userId, email, login, isAuth}}
)
export const getAuthUserDataThunkCreator = () => (dispatch: DispatchType) => {
  authAPI.me().then(res => {
    if (res.data.resultCode === 0) {
      let {id, login, email} = res.data.data
      dispatch(setAuthUserDataAC(id, email, login, true))
    }
  })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean = false) => (dispatch: DispatchType) => {
  authAPI.login(email, password, rememberMe).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator())
    } else {
      let message: string = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
      dispatch(stopSubmit('login', {_error: message}))
    }
  })
}
export const logoutThunkCreator = () => (dispatch: DispatchType) => {
  authAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false))
    }
  })
}