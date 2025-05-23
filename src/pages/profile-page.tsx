import React from "react";
import {MyPosts} from "../components/profile/my-posts/my-posts";
import {ProfileInfo} from "../components/profile/profile-info/profile-info";
import {ProfilePageType, StoreType} from "../redux/state";

export type ProfilePageProps = ProfilePageType & {
    addPost: () => void
    updateNewPostText: (newText:string) => void
}

export const ProfilePage = (props: ProfilePageProps) => {
    const {postsData, addPost, updateNewPostText} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.newPostText} postsData={postsData} updateNewPostText={updateNewPostText} addPost={addPost}/>
        </div>
    )
}