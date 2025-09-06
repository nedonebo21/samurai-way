import {ActionsType, GetCaptchaActionType, SetAuthUserDataType} from "../../../shared/types";
import {AuthType, DispatchType} from "../../../shared/types";
import {authAPI, securityAPI} from "../../../shared/api";
import {stopSubmit} from "redux-form";

let initialState: AuthType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null
}
export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
  switch (action.type) {
    case 'SET-USER-DATA':
      return {...state, ...action.data}
    case "GET-CAPTCHA-SUCCES":
      return {...state, ...action.payload}
  }
  return state
}

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => (
    {type: 'SET-USER-DATA', data: {userId, email, login, isAuth}}
)
export const getCaptchaAC = (url: string): GetCaptchaActionType => (
    {type: 'GET-CAPTCHA-SUCCES', payload: {url}}
)
export const getAuthUserDataTC = () => async (dispatch: DispatchType) => {
  let res = await authAPI.me()

  if (res.data.resultCode === 0) {
    let {id, login, email} = res.data.data
    dispatch(setAuthUserDataAC(id, email, login, true))
  }
}

export const loginTC = (email: string, password: string, rememberMe: boolean = false, captcha: string | null | undefined) => async (dispatch: DispatchType) => {
  let res = await authAPI.login(email, password, rememberMe, captcha)

  if (res.data.resultCode === 0) {
    dispatch(getAuthUserDataTC())
  } else {
    if (res.data.resultCode === 10) {
      dispatch(getCaptchaTC())
    }
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

export const getCaptchaTC = () => async (dispatch: DispatchType) => {
  let res = await securityAPI.getCaptcha()
  const captcha = res.data.url
  dispatch(getCaptchaAC(captcha))
}