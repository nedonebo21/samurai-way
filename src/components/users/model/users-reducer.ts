import {DispatchType, UserType, UsersPageType} from "../../../shared/types";
import {
  ActionsType,
  FollowActionType,
  SetCurrentPageActionType,
  SetTotalUsersCountActionType,
  SetUsersActionType,
  ToggleFetchingActionType,
  ToggleFollowingProgressType,
  UnFollowActionType
} from "../../../shared/types";
import {usersAPI} from "../../../shared/api/api";
import {updateObjInArray} from "../../../shared/utils";

let initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, 'id', {followed: true})
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, 'id', {followed: false})
      }
    case 'SET-USERS':
      return {...state, users: [...action.users]}
    case 'SET-CURRENT-PAGE':
      return {...state, currentPage: action.pageNumber}
    case 'SET-TOTAL-USERS-COUNT':
      return {...state, totalUsersCount: action.totalCount}
    case 'TOGGLE-FETCHING':
      return {...state, isFetching: action.isFetching}
    case 'TOGGLE-FOLLOWING-PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }
  }
  return state
}

export const followAC = (userId: number): FollowActionType => (
    {type: 'FOLLOW', userId}
)
export const unFollowAC = (userId: number): UnFollowActionType => (
    {type: 'UNFOLLOW', userId}
)
export const setUsersAC = (users: UserType[]): SetUsersActionType => (
    {type: 'SET-USERS', users}
)
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageActionType => (
    {type: 'SET-CURRENT-PAGE', pageNumber}
)
export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountActionType => (
    {type: 'SET-TOTAL-USERS-COUNT', totalCount}
)
export const toggleFetchingAC = (isFetching: boolean): ToggleFetchingActionType => (
    {type: 'TOGGLE-FETCHING', isFetching}
)
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number): ToggleFollowingProgressType => (
    {type: 'TOGGLE-FOLLOWING-PROGRESS', isFetching, userId}
)

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: DispatchType) => {
  dispatch(toggleFetchingAC(true))
  let data = await usersAPI.getUsers(currentPage, pageSize)

  dispatch(toggleFetchingAC(false))
  dispatch(setCurrentPageAC(currentPage))
  dispatch(setUsersAC(data.items))
  dispatch(setTotalUsersCountAC(data.totalCount))
}

export const toggleFollowFlowTC = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: (userId: number) => Promise<{ data: {resultCode: number} }>,
    actionCreator: (userId: number) => FollowActionType | UnFollowActionType
) => {
  dispatch(toggleFollowingProgressAC(true, userId))
  let res = await apiMethod(userId)

  if (res.data.resultCode === 0){
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgressAC(false, userId))
}

export const followTC = (userId: number) => async (dispatch: DispatchType) => {
  await toggleFollowFlowTC(dispatch, userId, usersAPI.followUser.bind(usersAPI), followAC)
}

export const unFollowTC = (userId: number) => async (dispatch: DispatchType) => {
  await toggleFollowFlowTC(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unFollowAC)
}
