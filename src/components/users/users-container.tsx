import {connect} from "react-redux";
import {
  followThunkCreator, getUsersThunkCreator,
  unFollowThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./users";
import {StateType, User} from "../../redux/types/state-types";
import {Preloader} from "../../shared/ui/preloader/preloader";


type UsersApiType = {
  users: User[]
  followingInProgress: number[]
  getUsersThunk: (currentPage: number, pageSize: number) => void
  followThunk: (userId: number) => void
  unFollowThunk: (userId: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}
export const UsersContainer = connect(mapStateToProps, {
  getUsersThunk: getUsersThunkCreator,
  followThunk: followThunkCreator,
  unFollowThunk: unFollowThunkCreator
})(UsersApiComponent)