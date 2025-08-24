import {ActionsType, SetAuthUserDataType} from "../../../shared/types/action-types";
import {AuthType, DispatchType} from "../../../shared/types/state-types";
import {authAPI} from "../../../shared/api/api";
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
export const getAuthUserDataTC = () => async (dispatch: DispatchType) => {
  let res = await authAPI.me()

  if (res.data.resultCode === 0) {
    let {id, login, email} = res.data.data
    dispatch(setAuthUserDataAC(id, email, login, true))
  }
}

export const loginTC = (email: string, password: string, rememberMe: boolean = false) => async (dispatch: DispatchType) => {
  let res = await authAPI.login(email, password, rememberMe)

  if (res.data.resultCode === 0) {
    dispatch(getAuthUserDataTC())
  } else {
    let message: string = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const logoutTC = () => async (dispatch: DispatchType) => {
  let res = await authAPI.logout()

  if (res.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false))
  }
}