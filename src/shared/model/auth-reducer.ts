import {ActionsType, SetAuthUserDataType} from "../types/action-types";
import {AuthType, DispatchType} from "../types/state-types";
import {authAPI} from "../api/api";

let initialState: AuthType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}
export const authReducer = (state: AuthType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET-USER-DATA':
      return {...state, ...action.data, isAuth: true}
  }
  return state
}
export const setAuthUserDataAC = (userId: number, email: string, login: string): SetAuthUserDataType => (
    {type: 'SET-USER-DATA', data: {userId, email, login}}
)
export const getAuthUserDataThunkCreator = () => {
  return (dispatch: DispatchType) => {
    authAPI.me().then(res => {
      if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserDataAC(id, email, login))
      }
    })
  }
}