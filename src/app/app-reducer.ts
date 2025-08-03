import {AppType, DispatchType} from "../shared/types/state-types";
import {ActionsType, SetInitType} from "../shared/types/action-types";
import {getAuthUserDataThunkCreator} from "../shared/model/auth-reducer";

let initialState: AppType = {
  init: false
}

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
  switch (action.type) {
    case "SET-INIT":
      return {...state, init: true}
  }
  return state
}

export const setInitAC = (): SetInitType => (
    {type: 'SET-INIT'}
)

export const initializeAppTC = () => (dispatch: DispatchType) => {
  const promise = dispatch(getAuthUserDataThunkCreator())
  Promise.all([promise]).then(() => {
    dispatch(setInitAC())
  })
}
