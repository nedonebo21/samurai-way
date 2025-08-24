import React from 'react';
import {ProfilePage} from "../../../pages/profile-page";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../../shared/types";
import {getUserProfileTC, getUserStatusTC, updateStatusTC} from "../model/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../shared/hoc";
import {compose} from "redux";

interface RouteParams {
  userId: string
}

type ProfileApiType = {
  getUserProfileThunk: (userId: number) => void
  profile: ProfileType
  isAuth: boolean
  getUserStatusThunk: (userId: number) => void
  updateStatusThunk: (status: string) => void
  userId: number
  status: string
} & RouteComponentProps<RouteParams>

export class ProfileApiComponent extends React.Component<ProfileApiType> {
  componentDidMount() {
    let userId = parseInt(this.props.match.params.userId, 10);
    if (!userId) {
      userId = this.props.userId
      if (!userId) this.props.history.push('/login')
    }
    this.props.getUserProfileThunk(userId)
    this.props.getUserStatusThunk(userId)
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile}/>
  }
}

let mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth
})

const ComposedComponent = compose<React.ComponentType>(
    connect(mapStateToProps, {
      getUserProfileThunk: getUserProfileTC,
      getUserStatusThunk: getUserStatusTC,
      updateStatusThunk: updateStatusTC,
    }),
    withRouter,
    WithAuthRedirect
)(ProfileApiComponent)

export const ProfileContainer= () => <ComposedComponent/>
