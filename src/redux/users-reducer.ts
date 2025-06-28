import {User, UsersPageType} from "./types/state-types";
import {
    ActionsType,
    FollowActionType,
    SetCurrentPageActionType, SetTotalUsersCountActionType,
    SetUsersActionType, ToggleFetchingActionType, ToggleFollowingProgressType,
    UnFollowActionType
} from "./types/action-types";

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type){
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: true}
                    :el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: false}
                    :el)
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
export const setUsersAC = (users: User[]): SetUsersActionType => (
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