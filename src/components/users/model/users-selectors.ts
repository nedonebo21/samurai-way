import {StateType} from "../../../shared/types/state-types";

export const getUsers = (state: StateType) => state.usersPage.users
export const getPageSize = (state: StateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: StateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: StateType) => state.usersPage.currentPage
export const getIsFetching = (state: StateType) => state.usersPage.isFetching
export const getFollowingInProgress = (state: StateType) => state.usersPage.followingInProgress