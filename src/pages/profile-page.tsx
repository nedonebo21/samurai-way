import React from "react";
import {MyPosts} from "../components/profile/my-posts/my-posts";
import {ProfileInfo} from "../components/profile/profile-info/profile-info";
import {ActionsType, ProfilePageType} from "../redux/store";

export type ProfilePageProps = ProfilePageType & {
    dispatch: (action: ActionsType) => void
}

export const ProfilePage = (props: ProfilePageProps) => {
    const {postsData, dispatch} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.newPostText} postsData={postsData} dispatch={dispatch}/>
        </div>
    )
}