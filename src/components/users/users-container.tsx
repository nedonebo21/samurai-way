import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFetchingAC, toggleFollowingProgressAC,
  unFollowAC
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./users";
import {StateType, User} from "../../redux/types/state-types";
import {Preloader} from "../../shared/ui/preloader/preloader";
import {usersAPI} from "../../api/api";


type UsersApiType = {
  users: User[]
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: User[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleFollowingProgress: (isFetching: boolean, userId: number) => void
  followingInProgress: number[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

class UsersApiComponent extends React.Component<UsersApiType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
    })
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
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
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
  follow: followAC,
  unFollow: unFollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: toggleFetchingAC,
  toggleFollowingProgress: toggleFollowingProgressAC
})(UsersApiComponent)