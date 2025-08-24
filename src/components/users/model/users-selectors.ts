import {StateType} from "../../../shared/types";
import {createSelector} from "reselect";

const getUsersSelector = (state: StateType) => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, (users) => users.filter(el => true))

export const getPageSize = (state: StateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: StateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: StateType) => state.usersPage.currentPage
export const getIsFetching = (state: StateType) => state.usersPage.isFetching
export const getFollowingInProgress = (state: StateType) => state.usersPage.followingInProgress