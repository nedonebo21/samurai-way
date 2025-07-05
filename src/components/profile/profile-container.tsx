import React from 'react';
import {ProfilePage} from "../../pages/profile-page";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../redux/types/state-types";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

interface RouteParams {
  userId: string
}

type ProfileApiType = {
  getUserProfileThunk: (userId: number) => void
  profile: ProfileType
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
  profile: state.profilePage.profile
})

let WithUrlDataContainer = withRouter(ProfileApiComponent)

export const ProfileContainer = connect(mapStateToProps, {
  getUserProfileThunk: getUserProfileThunkCreator
})(WithUrlDataContainer)
