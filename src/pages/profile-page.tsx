import React from "react";
import {ProfileInfo} from "../components/profile/profile-info/profile-info";
import {MyPostsContainer} from "../components/profile/my-posts/my-posts-container";
import {ProfileType} from "../redux/types/state-types";

type ProfilePageType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

export const ProfilePage = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
