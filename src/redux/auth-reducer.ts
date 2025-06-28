import {ActionsType, SetAuthUserDataType} from "./types/action-types";
import {AuthType} from "./types/state-types";

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