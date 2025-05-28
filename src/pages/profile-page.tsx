import React from "react";
import {ProfileInfo} from "../components/profile/profile-info/profile-info";
import {MyPostsContainer} from "../components/profile/my-posts/my-posts-container";

export const ProfilePage = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}