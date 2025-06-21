import React from 'react';
import {ProfilePage} from "../../pages/profile-page";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../redux/types/state-types";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface RouteParams {
    userId: string
}

type ProfileApiType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
} & RouteComponentProps<RouteParams>

export class ProfileApiComponent extends React.Component<ProfileApiType> {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId, 10);
        if (!userId) userId = 2342324329843
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }
    render(){
        return <ProfilePage {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainer = withRouter(ProfileApiComponent)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer)
