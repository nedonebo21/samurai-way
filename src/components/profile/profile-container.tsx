import React from 'react';
import {ProfilePage} from "../../pages/profile-page";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../redux/types/state-types";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

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
    if (!this.props.isAuth) return <Redirect to={'/login'}/>

    return <ProfilePage {...this.props} profile={this.props.profile}/>
  }
}

let mapStateToProps = (state: StateType) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainer = withRouter(ProfileApiComponent)

export const ProfileContainer = connect(mapStateToProps, {
  getUserProfileThunk: getUserProfileThunkCreator
})(WithUrlDataContainer)
