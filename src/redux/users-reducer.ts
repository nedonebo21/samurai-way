import {ActionsType, FollowActionType, SetUsersActionType, UnFollowActionType, User, UsersPageType} from "./store";
let initialState: UsersPageType = {
    users: []
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type){
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} :el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} :el)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
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