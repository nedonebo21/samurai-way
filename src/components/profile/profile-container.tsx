import React from 'react';
import {ProfilePage} from "../../pages/profile-page";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../redux/types/state-types";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileApiType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

export class ProfileApiComponent extends React.Component<ProfileApiType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render(){
        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(ProfileApiComponent)
