import {connect} from "react-redux";
import {
  followTC, getUsersTC,
  unFollowTC
} from "../model/users-reducer";
import React from "react";
import {Users} from "./users/users";
import {StateType, UserType} from "../../../shared/types";
import {Preloader} from "../../../shared/ui/preloader/preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../../shared/hoc";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../model/users-selectors";


type UsersApiType = {
  users: UserType[]
  followingInProgress: number[]
  getUsersThunk: (currentPage: number, pageSize: number) => void
  followThunk: (userId: number) => void
  unFollowThunk: (userId: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  isAuth: boolean
}

class UsersApiComponent extends React.Component<UsersApiType> {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize)
  }

  render() {
    return (
        <>
          {this.props.isFetching
              ? <Preloader/>
              : <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       followThunk={this.props.followThunk}
                       unFollowThunk={this.props.unFollowThunk}
              />
          }
        </>
    )
  }
}

let mapStateToProps = (state: StateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth
  }
}
const ComposedComponent = compose<React.ComponentType>(
    connect(mapStateToProps, {
      getUsersThunk: getUsersTC,
      followThunk: followTC,
      unFollowThunk: unFollowTC
    }),
    WithAuthRedirect
)(UsersApiComponent)
export const UsersContainer = () => <ComposedComponent/>
