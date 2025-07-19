import React from 'react';
import {ProfilePage} from "../../pages/profile-page";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../shared/types/state-types";
import {getUserProfileThunkCreator} from "./model/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../shared/hoc/with-auth-redirect";
import {compose} from "redux";
import {DialogItems} from "../dialogs/dialog-items/dialog-items";

interface RouteParams {
  userId: string
}

type ProfileApiType = {
  getUserProfileThunk: (userId: number) => void
  profile: ProfileType
  isAuth: boolean
} & RouteComponentProps<RouteParams>

export class ProfileApiComponent extends React.Component<ProfileApiType> {
  componentDidMount() {
    let userId = parseInt(this.props.match.params.userId, 10);
    if (!userId) userId = 2342324329843
    this.props.getUserProfileThunk(userId)
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile}/>
  }
}

let mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
})

const ComposedComponent = compose<React.ComponentType>(
    connect(mapStateToProps, {
      getUserProfileThunk: getUserProfileThunkCreator
    }),
    withRouter,
    WithAuthRedirect
)(ProfileApiComponent)

export const ProfileContainer= () => <ComposedComponent/>
